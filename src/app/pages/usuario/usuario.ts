import { Data } from '@angular/router';

export class Usuario{
    id:number;
    email:String;
    senha:String;
    nome:String;
    nascimento: Data;
    gender:String;

    constructor(id:number,email:String,senha:String,nome:String,nascimento:Data,gender:String){
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.nascimento = nascimento;
        this.gender = gender;
    }
}