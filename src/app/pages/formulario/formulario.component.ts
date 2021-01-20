import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private router: Router,private fb: FormBuilder, private us: UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      emailC: ['',Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  inserir(){
    const {email, emailC, senha, nome, nascimento, gender} = this.formulario.value
    if(email != emailC) {
        alert("E-mais diferentes")
    }
    var usuario;
    var user
    this.us.insert(this.formulario.value).subscribe(data=>{
      user = data[0]
      usuario = this.us.getUsuarioEmail(email, senha).subscribe(data=>{
        user = data[0];
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/descriçao']);    
      })
    })
    
    
  }

}
