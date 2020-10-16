import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescricaoComponent } from './pages/descricao/descricao.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ListaPlaylistComponent } from './pages/lista-playlist/lista-playlist.component';
import { ListarMusicaComponent } from './pages/listar-musica/listar-musica.component';




const routes: Routes = [
 {path:"descriçao",component:DescricaoComponent},
 {path:"faq",component:FaqComponent},
 {path:"lista-playlist",component:ListaPlaylistComponent},
 {path:"listar-musica/:playlistId", component:ListarMusicaComponent},
 {
  path: '',
  pathMatch: 'full',
  redirectTo: 'descriçao'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
