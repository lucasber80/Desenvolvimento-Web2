import { Musica } from './../musicas/musica';

import { Component, OnInit } from '@angular/core';
import { PlaylistInterface } from '../playlists/playlist';

import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'app-lista-playlist',
  templateUrl: './lista-playlist.component.html',
  styleUrls: ['./lista-playlist.component.css']
})
export class ListaPlaylistComponent implements OnInit {
  
  lists = new Array;
  
 
  
  constructor(public ps:PlaylistService) {
    
  };

  ngOnInit(): void {
    this.getter();
    
    
   
    
  }

  

  getter(){
    this.ps.getPlaylist().subscribe(data =>{
      this.lists = data
    })
    console.log(this.lists)
  }

  post(){
    this.ps.adicionarPlaylist(new PlaylistInterface(8,"so as boas","path",[1,2,3],4))
  }

      
 
  
  

}
