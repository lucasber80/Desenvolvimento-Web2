import { Musica } from './../musicas/musica';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { playlists } from './mock-playlist';
import { PlaylistInterface } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  apiUrl = 'path'



  constructor(
    private http: HttpClient
  ) { }

  
  public getPlaylist():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  all(): PlaylistInterface[] {
    return playlists;
  }

  insert(playlist:PlaylistInterface){
    playlists.push(playlist);
  }
  get(id: number): PlaylistInterface{
    return playlists[id];
  }
}
