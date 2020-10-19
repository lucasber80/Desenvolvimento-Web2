import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {playlists} from '../mock-playlist';

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {
  public playlistID: any
  public playlist: any
  public audio:any 
  public musicaatual: string
  public playlistsize:number
  
 
  constructor(private route: ActivatedRoute) {
  
  }
 
  ngOnInit(): void {
    this.audio = document.getElementById("audio")
    this.playlistID = this.route.snapshot.paramMap.get("playlistId")
    this.playlist = playlists[this.playlistID]
  
    this.audio.onended= () =>{
         if(parseInt(this.musicaatual)<this.playlist.musicas.length - 1){
           this.audioPlayer(String(parseInt(this.musicaatual)+1))
         }else{
          this.stopMusic(this.musicaatual)
         }
    };


    
      
  };



  
  
  ngOnDestroy(): void{
    this.audio.pause()
  }
  audioPlayer(musicaId:any) {
    if(this.musicaatual != musicaId){
      if(this.musicaatual != undefined){
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
    this.audio.src = ""
    this.musicaatual = undefined
    var div = document.getElementById("musica" + id)
    div.style.backgroundColor = ""


  }

  

}
