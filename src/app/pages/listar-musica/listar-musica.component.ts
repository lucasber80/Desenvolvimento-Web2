import { MusicaService } from '../services/musica.service';
import { Musica } from './../musicas/musica';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistInterface } from '../playlists/playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {
  public playlist: PlaylistInterface
  public playlistId: number
  public audio: any
  public musicaatual: string
  public currentIndex: number
  public musicasPlaylist = new Array;





  constructor(private router: Router, private route: ActivatedRoute, private playlistService: PlaylistService, private musicaService: MusicaService) {

  }

  ngOnInit(): void {
    this.playlistId = parseInt(this.route.snapshot.paramMap.get("playlistId"))
    this.audio = document.getElementById("audio")
    this.getPlaylist();
    this.getMusicas();
    this.audio.onended = () => {
      if (parseInt(this.musicaatual) < this.musicasPlaylist.length - 1) {
        this.audioPlayer(String(parseInt(this.musicaatual) + 1))
      } else {
        this.stopMusic(this.musicaatual)
      }
    };

  };

  getMusicas() {
    this.musicaService.listarMusicas().subscribe(
      data => {
        var musicas: Musica[]
<<<<<<< HEAD
        musicas = data

        for(var i = 0;i < this.playlist.musicas.length;i++){
          for(var j = 0;j < musicas.length;j++){
            if(this.playlist.musicas[i] == musicas[j].id){
              this.musicasPlaylist.push(musicas[j])
            }
          }
        }    
=======
        musicas = data;
        for (var i = 0; i < this.playlist.musicas.length; i++) {
          for (var j = 0; j < musicas.length; j++) {
            if (this.playlist.musicas[i] == musicas[j].id ) {
              this.musicasPlaylist.push(musicas[j])
            }
          }
        }
>>>>>>> playlist
      }

    )
  }

  getPlaylist() {
    this.playlistService.getPlaylist().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (this.playlistId == data[i].id) {
          this.playlist = data[i];

        }
      }
    }
    )
  }



  ngOnDestroy(): void {
    this.audio.pause()
    this.audio.src = ""
  }

  audioPlayer(musicaId: any) {
    if (this.musicaatual != musicaId) {
      if (this.musicaatual != undefined) {
        this.stopMusic(this.musicaatual)
      }
      this.playMusic(musicaId)

    } else {
      this.stopMusic(this.musicaatual)


    }
  }

  stopMusic(id: string) {
    this.audio.pause()
    this.audio.src = ""
    this.musicaatual = null;


  }

  playMusic(id: string) {
    this.musicaatual = id;
    this.currentIndex = this.musicasPlaylist.findIndex(musica => musica.id === parseInt(id));
    this.audio.src = this.musicasPlaylist[this.currentIndex].arquivo;
    this.audio.play();
  }

  removeMusic(musicId: number){
    this.playlistService.removeMusic(musicId, this.playlist.id);
    this.musicasPlaylist = [];
    this.getPlaylist();
    this.getMusicas();
    this.router.navigate(['./'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}