import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router'
import { Usuario } from '../usuario/usuario';

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
      nascimento: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  inserir(){
    const {email, emailC, senha, nome, nascimento, gender} = this.formulario.value
    if(email != emailC) {
        alert("E-mais diferentes")
    }
    var usuario
    var id = JSON.parse(window.localStorage.getItem('user')).id
    this.us.update(this.formulario.value).subscribe(data => {
      usuario = new Usuario(id,this.formulario.value.email,this.formulario.value.senha,this.formulario.value.nome,this.formulario.value.nascimento,this.formulario.value.gender)
      localStorage.setItem('user', JSON.stringify(usuario));
    })
    this.router.navigate(['/descriçao']);
  }

}
