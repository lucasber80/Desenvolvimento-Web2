import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import {playlists} from '../mock-playlist';

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {
  playlistID: any
  playlist: any
  audio:any 
  musicaatual: any
 
  constructor(private route: ActivatedRoute) {
  
  }
 
  ngOnInit(): void {
    this.audio = new Audio()
    this.playlistID = this.route.snapshot.paramMap.get("playlistId")
    this.playlist = playlists[this.playlistID]
    
  }
  ngOnDestroy(): void{
    this.audio.pause()
  }
  audioPlayer(musicaId:any) {
    /*alert(fonte)*/
    
    if(this.musicaatual != musicaId){
      this.musicaatual = musicaId
      this.audio.src = this.playlist.musicas[parseInt(musicaId)].arquivo
      this.audio.play();
      var button = document.getElementById(musicaId)
      button.style.background = "url('src\\assets\\pause_button.png') no-repeat"
     
      
    }else{
      this.audio.pause()
      this.musicaatual = null
      var button = document.getElementById(musicaId)
      button.style.background = "url('src\\assets\\play_button.png') no-repeat"
    }
  }
 
  

}
