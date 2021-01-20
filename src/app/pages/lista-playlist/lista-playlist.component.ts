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
  
  lists;
  playlist;
  
  
  constructor(public ps:PlaylistService) {
    
  };

  ngOnInit(): void {
    this.getter();
    
    

  }
  
  
  async getter(){
    var play = this.ps.getPlaylistUsuario().subscribe(data =>
      this.lists = data
    )
  }

 

      
 
  
  

}
