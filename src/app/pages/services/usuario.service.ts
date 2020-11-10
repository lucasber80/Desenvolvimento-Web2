import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    apiUrl = 'http://localhost:3000/Usuarios'
    usuario: Usuario;

  constructor(
    private http: HttpClient
  ) { }

    public getUsuario():Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.apiUrl)
    }
    
    public async getUsuarioEmail(email:String,senha:String):Promise<Observable<Usuario>>{
      
      var usuario = null;
      await this.getUsuario().toPromise().then(async data =>{
        for(var i = 0;i < data.length;i++){
          if(email == data[i].email && senha == data[i].senha){
              console.log("Usuario confirmado")
              usuario = data[i];
              this.usuario = usuario
              return await usuario;
          }
        }
    
      })
      return usuario
    }

    insert(usuario: Usuario) {
      this.usuario = usuario;
      return this.http.post(this.apiUrl, usuario);
    }
    public getUser(){
      return this.usuario;
    }
}