import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {
  
  
  formulario: FormGroup;
  constructor(private router: Router,private fb: FormBuilder, private us: UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      emailC: ['',Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      data: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  inserir(){
    const {email, emailC, senha, nome, data, genero} = this.formulario.value
    console.log(email)
    if(email != emailC) {
        alert("E-mais diferentes")
    }
    console.log(this.formulario.value)
    var usuario = this.us.update(this.formulario.value)
    window.localStorage.setItem('user', JSON.stringify(usuario));
    this.router.navigate(['/descriçao']);
  }

}
