import {PlaylistInterface} from './playlist'
import {Musica} from './musica'
import { Musicas } from './mock-musicas';

export const playlists:PlaylistInterface[] = [
   {id:1,nome:'pop brasil',foto:"assets/teste1.png", musicas: [Musicas[0], Musicas[1]]},
   {id:2,nome:'brasil 360',foto:"assets/teste2.png", musicas:[]},
   {id:3,nome:'hip-hop',foto:"assets/teste3.jpg", musicas:[]},
   {id:4,nome:'house brasil',foto:"assets/teste4.png", musicas:[]},
   {id:5,nome:'nao sei',foto:"assets/teste5.png", musicas:[]},
   {id:6,nome:'midnight ride',foto:"assets/teste6.png", musicas:[]},
   {id:7,nome:'top brasil',foto:"assets/teste7.png", musicas:[]},
   {id:8,nome:'pagodeira',foto:"assets/teste8.png", musicas:[]}
];
