import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  click() {
    if(document.getElementById("email-usuario") 
    != document.getElementById("email-usuarioC")) {
        alert("E-mais diferentes")
    }
  }

}
