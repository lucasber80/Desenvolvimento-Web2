
import {  HttpClient, HttpHeaders } from '@angular/common/http';
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

<<<<<<< HEAD
  

  public adicionarPlaylist(playlist:PlaylistInterface) {
    this.http.post(this.apiUrl, playlist)
=======
  public adicionarPlaylist(nome: string) {
    var aux = {"nome":nome,
                "foto": "",
              musicas:[],
            id_usuario: 1};
    this.http.post(this.apiUrl, aux)
>>>>>>> playlist
              .subscribe(
                resultado => {
                  alert("Playlist adicionada");
                },
                erro => {
                  if(erro.status == 400) {
                    alert("Erro");
                  }
                }
              );
  }

<<<<<<< HEAD
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
=======
  public addMusic(music: number, playlist:number){
    var musics: number[];
    this.http.get<PlaylistInterface>(`${this.apiUrl}/${playlist}`).subscribe(dados=> {musics = dados.musicas; this.aumentar(musics, music, playlist)})
  }
  
  public aumentar(musics: number[], music:number, playlist:number){
    var musics: number[];
    musics.push(music);
    this.http.patch(`${this.apiUrl}/${playlist}`,  {"musicas":musics}).subscribe(resultado => {}, erro=>{alert(erro)});
  }

  public removeMusic(music: number, playlist:number){
    var musics: number[];
    this.http.get<PlaylistInterface>(`${this.apiUrl}/${playlist}`).subscribe(dados=> {musics = dados.musicas; this.diminuir(musics, music, playlist)})
  }
  public diminuir(musics: number[], music:number, playlist:number){
    var musics: number[];
    musics.splice(musics.findIndex(element => element = music), 1);
    console.log(musics);
    this.http.patch(`${this.apiUrl}/${playlist}`,  {"musicas":musics}).subscribe(resultado => {}, erro=>{alert(erro)});
>>>>>>> playlist
  }
  
 

 
  
 
}
