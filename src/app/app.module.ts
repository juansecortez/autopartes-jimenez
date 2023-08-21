import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { TopbarComponent } from './modules/topbar/topbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { AgregarDescuentosComponent } from './modules/agregar-descuentos/agregar-descuentos.component';
import { DescuentosPorClienteComponent } from './modules/descuentos-por-cliente/descuentos-por-cliente.component';
import { MisDescuentosComponent } from './modules/mis-descuentos/mis-descuentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    FooterComponent,
    AgregarDescuentosComponent,
    DescuentosPorClienteComponent,
    MisDescuentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
