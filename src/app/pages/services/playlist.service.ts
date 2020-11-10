
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlaylistInterface } from '../playlists/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  apiUrl = 'http://localhost:3000/Playlists'
 

  constructor(
    private http: HttpClient
  ) { }

  
  public getPlaylist():Observable<PlaylistInterface[]>{
    return this.http.get<PlaylistInterface[]>(this.apiUrl)
  }

  public adicionarPlaylist(playlist:PlaylistInterface) {
    this.http.post(this.apiUrl, playlist)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro);
                  }
                }
              );
  }


  
 
 
}
