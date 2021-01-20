
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlaylistInterface } from '../playlists/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  apiUrl = 'http://localhost:8000/playlist'
 

  constructor(
    private http: HttpClient
  ) { }

  
   public getPlaylist():Observable<PlaylistInterface[]>{
    return this.http.get<PlaylistInterface[]>(this.apiUrl)
  }

  

  
  public adicionarPlaylist(nome: string) {
    var id = JSON.parse(window.localStorage.getItem('user')).id
    var aux = {"nome":nome,
                "foto": "",
              musicas:[],
            id_usuario: id};
    this.http.post(this.apiUrl, aux)
  }

  alterarProduto(playlist:PlaylistInterface) {
    var id = playlist.id
  
    this.http.put(`${ this.apiUrl }/atualizar/${id}`, playlist)
  }


  public getPlaylistUsuario(): Observable<PlaylistInterface[]> {
    var id = JSON.parse(window.localStorage.getItem('user')).id
    var url = this.apiUrl + "/user/" + id
    return this.http.get<PlaylistInterface[]>(url)
  }
  public getPlaylistById(playlistId: number): Observable<PlaylistInterface> {
    var i = playlistId + 1
    let url = `${this.apiUrl}/${i}`;
    return this.http.get<PlaylistInterface>(url);
 
  }
  
  public addMusicToPlaylist(music: number, playlist:number):Observable<any>{
    let url = `${this.apiUrl}/${playlist}/addM/${music}`;
    return this.http.post(url, {});
  }


  public removeMusicOfPlaylist(music: number, playlist:number):Observable<any>{
    let url = `${this.apiUrl}/${playlist}/removeM/${music}`;
    return this.http.delete(url);
  }

 
  
 
}
