import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    apiUrl = 'http://localhost:3000/Usuarios'

  constructor(
    private http: HttpClient
  ) { }

    public getUsuario():Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.apiUrl)
    }
    
    public getUsuarioEmail(email:String,senha:String):Usuario{
    
    this.getUsuario().subscribe(data =>{
        for(var i = 0;i < data.length;i++){
        if(email == data[i].email && senha == data[i].senha){
            console.log("Usuario confirmado")
            var usuario = data[i];
            return usuario;
        }
        }
    
    })

    return null;
    }

    insert(usuario: Usuario) {
        return this.http.post(this.apiUrl, usuario)
    }
    
}