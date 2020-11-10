import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CompartilhamentoService } from '../pages/services/compartilhamento/compartilhamento.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchWord = new FormControl('');


  constructor(private router: Router, private compartilhamento: CompartilhamentoService) {


  }

  ngOnInit(): void {

  }

  openSearch() {
    this.router.navigate(['buscar'])
  }

  search() {
    this.compartilhamento.changeMessage(this.searchWord.value);
  }

}
