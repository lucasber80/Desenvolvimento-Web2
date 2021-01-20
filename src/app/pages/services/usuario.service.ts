import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    apiUrl = 'http://localhost:8000/users'
    usuario: Usuario;

  constructor(
    private http: HttpClient
  ) { }

    public getUsuario():Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.apiUrl)
    }
    
    public getUsuarioEmail(email:String,senha:String):Observable<Usuario>{
      var url = this.apiUrl + "/" + email + "/" + senha
      return this.http.get<Usuario>(url)
    }

    insert(usuario: Usuario):Observable<Usuario> {
      this.usuario = usuario;
      return this.http.post<Usuario>(this.apiUrl, usuario);
    }
    public getUser(){
      return this.usuario;
    }

    update(usuario: Usuario):Observable<Usuario>{
      var id = JSON.parse(window.localStorage.getItem('user')).id
      var url = this.apiUrl + "/" + id
      return this.http.put<Usuario>(url , usuario)
    }
}