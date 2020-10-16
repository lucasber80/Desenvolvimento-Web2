import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {playlists} from '../mock-playlist';

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {
  playlistID: any
  playlist: any
  
  
  constructor(private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.playlistID = this.route.snapshot.paramMap.get("playlistId")
    this.playlist = playlists[this.playlistID]
    
  
  }
  
  

}
