
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

  public getPlaylistById(id:number):PlaylistInterface{
    
    this.getPlaylist().subscribe(data =>{
      for(var i = 0;i < data.length;i++){
        if(id == data[i].id){
          console.log("entrou")
          var playlist = data[i];
          return playlist;
        }
      }
 
    })

   return null;
  }

  
 
 
}
