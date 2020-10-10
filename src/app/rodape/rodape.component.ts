import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  public now: Date = new Date();
  public dia:Number;
  public mes:Number;
  public ano:Number;
  constructor() { 
    setInterval(() => {
      this.now = new Date();
      
    }, 1);
    this.ano = this.now.getFullYear();
    this.mes = this.now.getUTCMonth() + 1;
    this.dia = this.now.getUTCDate();
  }
  
  
  ngOnInit(): void {
   
    
  }

}
