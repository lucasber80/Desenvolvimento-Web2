import { Component, OnInit } from '@angular/core';
import {playlists} from '../playlists/mock-playlist';
import { PlaylistInterface } from '../playlists/playlist';
import { PlaylistService } from '../playlists/playlist.service';


@Component({
  selector: 'app-lista-playlist',
  templateUrl: './lista-playlist.component.html',
  styleUrls: ['./lista-playlist.component.css']
})
export class ListaPlaylistComponent implements OnInit {
  lists:PlaylistInterface[];
  
  constructor(private ps:PlaylistService) {};

  ngOnInit(): void {

    this.lists = this.ps.all();
    
  }

  
  

}
