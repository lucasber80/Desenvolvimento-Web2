



export class PlaylistInterface{
    id:number;
    nome:String;
    foto:String;
    musicas:number[];
    id_usuario:number;

    constructor( id:number,nome:String,foto:String,musicas:number[],id_usuario:number,){
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.musicas = musicas;
        this.id_usuario = id_usuario;
   }
  
   

}