import { Musica } from './musica';

export interface PlaylistInterface{
    id:number;
    nome:String;
    foto:String;
    musicas:Musica[];

}