import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent},
  {
    path: 'crear_registro', 
    component: CrearRegistroComponent
  },
  {
    path: 'listar_registros', 
    component: ListarRegistrosComponent
  },
  {
    path: '**', 
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
