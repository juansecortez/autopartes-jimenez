import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDescuentosComponent } from './modules/agregar-descuentos/agregar-descuentos.component';
import { DescuentosPorClienteComponent } from './modules/descuentos-por-cliente/descuentos-por-cliente.component';
import { MisDescuentosComponent } from './modules/mis-descuentos/mis-descuentos.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'agregar-descuentos', component: AgregarDescuentosComponent },
  { path: 'descuentos-por-cliente', component: DescuentosPorClienteComponent },
  { path: 'mis-descuentos', component: MisDescuentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
