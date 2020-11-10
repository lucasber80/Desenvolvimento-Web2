
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

  public async getPlaylistUsuario(): Promise<Observable<PlaylistInterface[]>> {
    var lista = null;
    await this.getPlaylist().toPromise().then( async data =>{
      var id = JSON.parse(window.localStorage.getItem('user')).id
      lista = new Array();
      data.forEach(element => {
        if(element.id_usuario == id){
          lista.push(element)
        }
      });
      return await lista;
    })
    return lista;
  }
  
 
 
}
