import { MusicaService } from '../services/musica.service';
import { Musica } from './../musicas/musica';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistInterface } from '../playlists/playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {
  public playlist: PlaylistInterface
  public audio:any 
  public musicaatual: string
  public musicasPlaylist = new Array;
 
  
  
  
 
  constructor(private route: ActivatedRoute, private playlistService: PlaylistService,private musicaService:MusicaService) {
  
  }
 
  ngOnInit(): void {
   
    
    var playlistID = parseInt(this.route.snapshot.paramMap.get("playlistId"))
    this.audio = document.getElementById("audio")
    this.getPlaylist(playlistID);
  
    
    
   
    
    
   
   
    this.getMusicas();
    
    
   
    
    
    
    
    this.audio.onended= () =>{
         if(parseInt(this.musicaatual)<this.musicasPlaylist.length - 1){
           this.audioPlayer(String(parseInt(this.musicaatual)+1))
         }else{
           this.stopMusic(this.musicaatual)
         }
    };

  };
  
  getMusicas(){
    this.musicaService.listarMusicas().subscribe(
      data => {
        var musicas: Musica[]
        musicas = data
        
        
        for(var i = 0;i < this.playlist.musicas.length;i++){
          for(var j = 0;j < musicas.length;j++){
            if(this.playlist.musicas[i] == musicas[j].id){
              this.musicasPlaylist.push(musicas[j])
            }
          }
        }

        
      }

    )
  }

  getPlaylist(playlistId:number){
    this.playlistService.getPlaylist().subscribe(data =>{
      for(var i = 0;i < data.length;i++){
        if(playlistId == data[i].id){
          this.playlist = data[i];
          
        }
      }

    }
   )
  }

  

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
  
      this.audio.src = this.musicasPlaylist[id].arquivo
      this.audio.play();
      var button = document.getElementById(id)
      button.textContent = "Stop"
  }

}
