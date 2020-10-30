import { Observable } from 'rxjs';
import { playlists } from './../playlists/mock-playlist';
import { Injectable } from '@angular/core';
import { PlaylistInterface } from '../playlists/playlist';
import { Musicas } from './mock-musicas';
import { Musica } from './musica';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  apiUrl = 'http://localhost:3000/Musicas'

  constructor(
    private http: HttpClient
  ) { }

  getMusic(id:number): Musica{
    var pos = -1;
    for(var i = 0;i < Musicas.length;i++){
      if(id == Musicas[i].id){
        pos = i;
        break;
      }
    }
    return Musicas[pos];
  }

  listarMusicas():Observable<Musica[]>{
    
    return this.http.get<Musica[]>(this.apiUrl);
  }



  


}
