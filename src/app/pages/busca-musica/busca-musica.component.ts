import { Component, OnInit } from '@angular/core';

import { CompartilhamentoService } from '../services/compartilhamento/compartilhamento.service';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../services/musica.service';
import { PlaylistInterface } from '../playlists/playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-busca-musica',
  templateUrl: './busca-musica.component.html',
  styleUrls: ['./busca-musica.component.css']
})
export class BuscaMusicaComponent implements OnInit {
  musicas: Musica[][];
  musicaatual: string;
  currentPlaylist: number;
  userPlaylists: PlaylistInterface[]
  audio: any;
  currentIndex: number;


  constructor(private playlistService: PlaylistService, private compartilhamentoService: CompartilhamentoService, private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.musicas = [];
    this.audio = document.getElementById("audio");
    this.compartilhamentoService.currentMessage.subscribe(data => {
      this.search(data);
    });
    this.audio.onended = () => {
      if (this.currentIndex < this.musicas[this.currentPlaylist].length - 1) {
        let auxId = this.musicas[this.currentPlaylist][this.currentIndex + 1].id;
        this.audioPlayer(auxId);
      } else {
        this.stopMusic(this.musicaatual)
      }
    };
    this.search("");



  }

  showPlaylists(id: number){
    this.playlistService.getPlaylistUsuario().subscribe(data => { this.userPlaylists = data});
  }

  addToPlaylist(musicId: number, playlistId: number){
    this.playlistService.addMusicToPlaylist(musicId, playlistId).subscribe(data=>{}, err=>{console.log(err.message)});
  }

  search(searchText:any) {
    this.musicaService.getMusicaswith(searchText).subscribe(data => { 
    this.musicas[0] = data
    console.log(data);
    })
    this.musicaService.getArtistasWith(searchText).subscribe(data => { this.musicas[1] = data })
  }

  audioPlayer(id: any) {
    if (this.musicaatual != id) {
      if (this.musicaatual != null) {
        this.stopMusic(this.musicaatual)
      }
      this.musicaatual = id;
      this.playMusic(id);

    } else {
      this.stopMusic(this.musicaatual)


    }
  }

  stopMusic(musica: string) {
    this.audio.pause();
    this.musicaatual = null;

  }


 
  playMusic(id: string) {
    this.musicaatual = id;
    this.currentIndex = this.musicas[this.currentPlaylist].findIndex(musica => musica.id === parseInt(id));
    this.audio.src = this.musicas[this.currentPlaylist][this.currentIndex].arquivo;
    this.audio.play();

  }

}
