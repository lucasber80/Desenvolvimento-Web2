import { Musica } from './../musicas/musica';

import { Component, OnInit } from '@angular/core';
import { PlaylistInterface } from '../playlists/playlist';

import { PlaylistService } from '../services/playlist.service';
import { Usuario } from '../usuario/usuario';


@Component({
  selector: 'app-lista-playlist',
  templateUrl: './lista-playlist.component.html',
  styleUrls: ['./lista-playlist.component.css']
})
export class ListaPlaylistComponent implements OnInit {
  
  lists;
  
 
  
  constructor(public ps:PlaylistService) {
    
  };

  ngOnInit(): void {
    this.getter();
    
   
    
  }

  

  async getter(){
    var play = this.ps.getPlaylistUsuario()
    console.log(play)
    await play.then(data => {
      this.lists = data
      console.log(data)
    })
  }

  post(){
    this.ps.adicionarPlaylist(new PlaylistInterface(8,"so as boas","path",[1,2,3],4))
  }

      
 
  
  

}
