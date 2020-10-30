import {PlaylistInterface} from './playlist'
import { Musicas } from '../musicas/mock-musicas';

export const playlists:PlaylistInterface[] = [
   {id:1,nome:'pop brasil',foto:"assets/imgs/teste1.png", musicas: [0,2,1]},
   {id:2,nome:'brasil 360',foto:"assets/imgs/teste2.png", musicas:[4,6]},
   {id:3,nome:'hip-hop',foto:"assets/imgs/teste3.jpg", musicas:[3,5]},
   {id:4,nome:'house brasil',foto:"assets/imgs/teste4.png", musicas:[]},
   {id:5,nome:'nao sei',foto:"assets/imgs/teste5.png", musicas:[]},
   {id:6,nome:'midnight ride',foto:"assets/imgs/teste6.png", musicas:[]},
   {id:7,nome:'top brasil',foto:"assets/imgs/teste7.png", musicas:[]},
   {id:8,nome:'pagodeira',foto:"assets/imgs/teste8.png", musicas:[]}
];
