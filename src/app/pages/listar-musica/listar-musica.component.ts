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
    
    if(this.musicaatual != musicaId){
      if(this.musicaatual != null){
        this.stopMusic(this.musicaatual)
      }
      this.musicaatual = musicaId
      this.audio.src = this.playlist.musicas[parseInt(musicaId)].arquivo
      this.audio.play();
      var button = document.getElementById(musicaId)
      button.textContent = "Stop"
      var div = document.getElementById("musica" + musicaId)
      div.style.backgroundColor = "#1DB954"
      
   
     
      
    }else{
      this.stopMusic(this.musicaatual)
  
      
    }
  }

  stopMusic(id: string){
    var button = document.getElementById(id)
    button.textContent = "Play"
    this.audio.pause()
    this.musicaatual = null
    var div = document.getElementById("musica" + id)
    div.style.backgroundColor = ""


  }
 
  

}
