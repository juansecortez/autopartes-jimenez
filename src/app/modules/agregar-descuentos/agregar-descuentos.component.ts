import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-descuentos',
  templateUrl: './agregar-descuentos.component.html',
  styleUrls: ['./agregar-descuentos.component.css']
})
export class AgregarDescuentosComponent {
  cliente = '';
  marca = '';
  dias = 0;
  descuento = 0;

  registros: any[] = [];

  agregar() {
    const nuevoRegistro = {
      cliente: this.cliente,
      marca: this.marca,
      dias: this.dias,
      descuento: this.descuento
    };
    this.registros.push(nuevoRegistro);

    // Limpiamos los campos después de agregar
    this.cliente = '';
    this.marca = '';
    this.dias = 0;
    this.descuento = 0;
  }
}
