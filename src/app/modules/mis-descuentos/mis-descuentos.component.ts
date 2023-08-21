import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-descuentos',
  templateUrl: './mis-descuentos.component.html',
  styleUrls: ['./mis-descuentos.component.css']
})
export class MisDescuentosComponent {
  selectedClient: string = '1'; // Cliente por defecto
  clients = ['1', '2', '3', '4'];
  showModal: boolean = false;
  selectedRecord: Record | null = null;

  

  records: { [key: string]: Record[] } = {
    '1': [
      { clientId: '1', folio: 'A001', saldoActual: '100', fechaVencimiento: '2023-09-01', restaDias: '5', diasProntoPago: '3', prontoPago: '10%' },
      { clientId: '1', folio: 'A001', saldoActual: '100', fechaVencimiento: '2023-09-01', restaDias: '5', diasProntoPago: '3', prontoPago: '10%' },
      { clientId: '1', folio: 'A001', saldoActual: '100', fechaVencimiento: '2023-09-01', restaDias: '5', diasProntoPago: '3', prontoPago: '10%' },
      { clientId: '1', folio: 'A001', saldoActual: '100', fechaVencimiento: '2023-09-01', restaDias: '5', diasProntoPago: '3', prontoPago: '10%' },
    ],
    '2': [
      { clientId: '2', folio: 'B001', saldoActual: '200', fechaVencimiento: '2023-09-10', restaDias: '7', diasProntoPago: '2', prontoPago: '15%' },
      { clientId: '2', folio: 'B001', saldoActual: '200', fechaVencimiento: '2023-09-10', restaDias: '7', diasProntoPago: '2', prontoPago: '15%' },
      { clientId: '2', folio: 'B001', saldoActual: '200', fechaVencimiento: '2023-09-10', restaDias: '7', diasProntoPago: '2', prontoPago: '15%' },
      { clientId: '2', folio: 'B001', saldoActual: '200', fechaVencimiento: '2023-09-10', restaDias: '7', diasProntoPago: '2', prontoPago: '15%' },
      // ... otros 3 registros para el Cliente 2
    ],
    '3': [
      { clientId: '3', folio: 'C001', saldoActual: '150', fechaVencimiento: '2023-09-15', restaDias: '4', diasProntoPago: '1', prontoPago: '5%' },
      { clientId: '3', folio: 'C001', saldoActual: '150', fechaVencimiento: '2023-09-15', restaDias: '4', diasProntoPago: '1', prontoPago: '5%' },
      { clientId: '3', folio: 'C001', saldoActual: '150', fechaVencimiento: '2023-09-15', restaDias: '4', diasProntoPago: '1', prontoPago: '5%' },
      { clientId: '3', folio: 'C001', saldoActual: '150', fechaVencimiento: '2023-09-15', restaDias: '4', diasProntoPago: '1', prontoPago: '5%' },
      // ... otros 3 registros para el Cliente 3
    ],
    '4': [
      { clientId: '4', folio: 'D001', saldoActual: '250', fechaVencimiento: '2023-09-20', restaDias: '6', diasProntoPago: '2', prontoPago: '20%' },
      { clientId: '4', folio: 'D001', saldoActual: '250', fechaVencimiento: '2023-09-20', restaDias: '6', diasProntoPago: '2', prontoPago: '20%' },
      { clientId: '4', folio: 'D001', saldoActual: '250', fechaVencimiento: '2023-09-20', restaDias: '6', diasProntoPago: '2', prontoPago: '20%' },
      { clientId: '4', folio: 'D001', saldoActual: '250', fechaVencimiento: '2023-09-20', restaDias: '6', diasProntoPago: '2', prontoPago: '20%' },
      // ... otros 3 registros para el Cliente 4
    ],
  };

  getCurrentRecords() {
    return this.records[this.selectedClient];
  }
  viewMore(record: Record) {
    this.selectedRecord = record;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedRecord = null;
  }
}
interface Record {
  clientId: string;
  folio: string;
  saldoActual: string;
  fechaVencimiento: string;
  restaDias: string;
  diasProntoPago: string;
  prontoPago: string;
}