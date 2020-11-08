import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Musica } from '../musicas/musica';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  apiUrl = 'http://localhost:3000/Musicas'

  constructor(
    private http: HttpClient
  ) { }

 

  listarMusicas():Observable<Musica[]>{
    return this.http.get<Musica[]>(this.apiUrl);
  }

  getMusicaswith(text: string){
    return this.http.get<Musica[]>(`${this.apiUrl}?nome_like=${text}&_sort=nome`); 
  }

  getArtistasWith(text: string){
    return this.http.get<any>(`${this.apiUrl}?cantor_like=${text}&_sort=cantor`); 
  }



  


}
