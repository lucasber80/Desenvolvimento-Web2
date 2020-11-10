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
    var play = this.ps.getPlaylistUsuario()
    console.log(play)
    await play.then(data => {
      this.lists = data

    })
  }

<<<<<<< HEAD
 
    
  



  post(){
    this.ps.adicionarPlaylist(new PlaylistInterface(20,"teste 2","path2",[1,2,3],4))
  }

  put(){
    this.ps.alterarProduto(new PlaylistInterface(0,"alterando","assets/imgs/teste1.png",[0,2,1],4))
  }
=======
  
>>>>>>> playlist

      
 
  
  

}
