import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-logim',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private fb: FormBuilder, private us: UsuarioService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }


}
