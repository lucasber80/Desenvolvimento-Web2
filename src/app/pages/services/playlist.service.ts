
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

  alterarProduto(playlist:PlaylistInterface) {
    var id = playlist.id
  
    this.http.put(`${ this.apiUrl }/${id}`, playlist)
              .subscribe(
                resultado => {
                  console.log('Produto alterado com sucesso.')
                },
                erro => {
                  switch(erro.status) {
                    case 400:
                      console.log(erro.error.mensagem);
                      break;
                    case 404:
                      console.log('Produto não localizado.');
                      break;
                  }
                }
              );
  }


  
 
 
}
