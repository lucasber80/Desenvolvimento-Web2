import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistInterface } from '../playlists/playlist';
import { PlaylistService } from '../playlists/playlist.service';

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {
  public playlist: PlaylistInterface
  public audio:any 
  public musicaatual: string
  
 
  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
  
  }
 
  ngOnInit(): void {
    this.audio = document.getElementById("audio")
    var playlistID = parseInt(this.route.snapshot.paramMap.get("playlistId"))
    this.playlist = this.playlistService.get(playlistID);
  
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
    this.audio.src = ""
  }

  audioPlayer(musicaId:any) {
    if(this.musicaatual != musicaId){
      if(this.musicaatual != undefined){
        this.stopMusic(this.musicaatual)
      }
      this.playMusic(musicaId)
      
    }else{
      this.stopMusic(this.musicaatual)
  
      
    }
  }

  stopMusic(id: string){
    var button = document.getElementById(id)
    button.textContent = "Play"
    this.audio.pause()
    this.audio.src = ""
    this.musicaatual = null;


  }

  playMusic(id: string){
      this.musicaatual = id;
      this.audio.src = this.playlist.musicas[parseInt(id)].arquivo
      this.audio.play();
      var button = document.getElementById(id)
      button.textContent = "Stop"
  }

}
