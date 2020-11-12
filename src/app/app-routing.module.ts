import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescricaoComponent } from './pages/descricao/descricao.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ListaPlaylistComponent } from './pages/lista-playlist/lista-playlist.component';
import { ListarMusicaComponent } from './pages/listar-musica/listar-musica.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { BuscaMusicaComponent } from './pages/busca-musica/busca-musica.component';
import {LoginComponent} from './pages/login/login.component';
import { EditarUserComponent } from './pages/editar-user/editar-user.component';
import { CreatePlaylistComponent } from './pages/create-playlist/create-playlist.component';




const routes: Routes = [
 {path:"descriçao",component:DescricaoComponent},
 {path:"faq",component:FaqComponent},
 {path:"lista-playlist",component:ListaPlaylistComponent},
 {path:"listar-musica/:playlistId", component:ListarMusicaComponent},
 {path:"formulario", component:FormularioComponent},
 {path:"login", component: LoginComponent},
 {path:"editar-user", component: EditarUserComponent},
 {
  path: '',
  pathMatch: 'full',
  redirectTo: 'descriçao'
},
{path: "criar-playlist", component:CreatePlaylistComponent},
{path: "buscar", component:BuscaMusicaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
