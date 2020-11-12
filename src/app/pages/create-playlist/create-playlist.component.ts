import { Input } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { PlaylistService } from '../services/playlist.service';
@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  nome = new FormControl('');
  clicked = false;

  constructor( private playlistService: PlaylistService) {
  
   }

  ngOnInit(): void {
  }

  updateName() {
    this.clicked = true;
    if(this.nome.valid){
    this.clicked = false;
    this.playlistService.adicionarPlaylist(this.nome.value);
    this.nome.setValue("");
    }
  }

}
