export class Musica{
    id:number;
    nome:String;
    cantor:String;
    album: String
    arquivo:String;
    duracao:String;

    constructor(id:number,nome:String,cantor:String,album: String,arquivo:String,duracao:String){
        this.id = id;
        this.nome = nome;
        this.cantor = cantor;
        this.album = album;
        this.arquivo = arquivo;
        this.duracao = duracao;
        
    }
}