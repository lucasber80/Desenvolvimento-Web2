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
import { BuscaMusicaComponent } from './pages/busca-musica/busca-musica.component';
import { LoginComponent } from './pages/login/login.component'
import { EditarUserComponent } from './pages/editar-user/editar-user.component';

import { HttpClientModule } from '@angular/common/http' 
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePlaylistComponent } from './pages/create-playlist/create-playlist.component';



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
    BuscaMusicaComponent,
    LoginComponent,
    EditarUserComponent,
    CreatePlaylistComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule,MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
