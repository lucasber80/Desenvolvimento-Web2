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
  playlist;
  
  
  constructor(public ps:PlaylistService) {
    
  };

  ngOnInit(): void {
    this.getter();
    this.getPlaylistById(0)
    console.log(this.playlist)
    
   
    
    
    

  }

     getPlaylistById(id:number){
       console.log(this.lists.length)
      for(var i = 0;i < this.lists.length;i++){
        
        if(this.lists[i].id == id){
          this.playlist.push(this.lists[i].id);
          console.log(this.playlist)
        } 
      }
    }
  

  
      getter(){
      this.ps.getPlaylist().subscribe(data =>{
        var playlists2:PlaylistInterface[]
        playlists2 = data;

        for(var i = 0;i < playlists2.length;i++){
          this.lists.push(playlists2[i])
        }
      })
     
    }
    
  



  post(){
    this.ps.adicionarPlaylist(new PlaylistInterface(20,"teste 2","path2",[1,2,3],4))
  }

  put(){
    this.ps.alterarProduto(new PlaylistInterface(0,"alterando","assets/imgs/teste1.png",[0,2,1],4))
  }

      
 
  
  

}
