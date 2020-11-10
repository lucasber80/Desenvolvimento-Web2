import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logim',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private router: Router,private fb: FormBuilder, private us: UsuarioService) { }

  ngOnInit(): void {
    window.localStorage.removeItem('user');
    this.login = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  async entrar() {
    const {email, senha} = this.login.value
    var user;
    var usuario = this.us.getUsuarioEmail(email, senha)
    await usuario.then(data => { user = data })
    if(usuario == null) {
      alert("Usuario não encontrado, se não for cadastrado clique para se cadastrar!")
    } else {
      window.localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/descriçao']);
    }
  }

}
