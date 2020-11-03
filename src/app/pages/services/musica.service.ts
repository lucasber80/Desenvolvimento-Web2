import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Musica } from '../musicas/musica';
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



  


}
