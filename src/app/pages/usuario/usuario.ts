import { Data } from '@angular/router';

export class Usuario{
    email:String;
    senha:String;
    nome:String;
    data: Data;
    genero:String;

    constructor(email:String,senha:String,nome:String,data:Data,genero:String){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.data = data;
        this.genero = genero;
    }
}