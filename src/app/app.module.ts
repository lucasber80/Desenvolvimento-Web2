import { MusicaService } from './pages/services/musica.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescricaoComponent } from './pages/descricao/descricao.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ListarMusicaComponent } from './pages/listar-musica/listar-musica.component';
import { ListaPlaylistComponent } from './pages/lista-playlist/lista-playlist.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import {LoginComponent} from './pages/login/login.component'


import { HttpClientModule } from '@angular/common/http' 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DescricaoComponent,
    RodapeComponent,
    FaqComponent,
    ListarMusicaComponent,
    ListaPlaylistComponent,
    FormularioComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [HttpClientModule,MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
