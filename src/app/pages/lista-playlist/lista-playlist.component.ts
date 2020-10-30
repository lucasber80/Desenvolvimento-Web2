import { playlists } from './../playlists/mock-playlist';
import { Component, OnInit } from '@angular/core';
import { PlaylistInterface } from '../playlists/playlist';
import { PlaylistService } from '../playlists/playlist.service';


@Component({
  selector: 'app-lista-playlist',
  templateUrl: './lista-playlist.component.html',
  styleUrls: ['./lista-playlist.component.css']
})
export class ListaPlaylistComponent implements OnInit {
  lists:PlaylistInterface[];

  playlistPrevious: PlaylistInterface[]
  
  constructor(public ps:PlaylistService) {};

  ngOnInit(): void {
    //this.getter();
    this.lists = this.ps.all();
    
  }

  getter(){
    this.ps.getPlaylist().subscribe(data =>{
      console.log(data)
    })
  }

      

  
  

}
