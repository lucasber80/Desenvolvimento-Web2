import { Component, OnInit } from '@angular/core';
import {playlists} from '../mock-playlist';
import { PlaylistInterface } from '../playlist';

@Component({
  selector: 'app-lista-playlist',
  templateUrl: './lista-playlist.component.html',
  styleUrls: ['./lista-playlist.component.css']
})
export class ListaPlaylistComponent implements OnInit {
  lists = playlists;
  listsView:PlaylistInterface[][];
  
  constructor() {};

  ngOnInit(): void {

    
    
  }

  
  

}
