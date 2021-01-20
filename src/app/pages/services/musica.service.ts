import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Musica } from '../musicas/musica';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  apiUrl = 'http://localhost:8000/musicas'

  constructor(
    private http: HttpClient
  ) { }

 

  listarMusicas():Observable<Musica[]>{
    return this.http.get<Musica[]>(this.apiUrl);
  }


  getMusicaswith(text: string){
    return this.http.get<Musica[]>(`${this.apiUrl}/nome/${text}`); 
  }

  getArtistasWith(text: string){
    return this.http.get<any>(`${this.apiUrl}/artista/${text}`); 
  }

  getMusicasByPlaylist(id: number){
    return this.http.get<any>(`${this.apiUrl}/playlist/${id+1}`)
  }

  


}
