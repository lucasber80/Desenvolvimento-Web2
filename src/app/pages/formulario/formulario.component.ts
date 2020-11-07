import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private fb: FormBuilder, private us: UsuarioService) { }

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
    this.us.insert(this.formulario.value).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

}
