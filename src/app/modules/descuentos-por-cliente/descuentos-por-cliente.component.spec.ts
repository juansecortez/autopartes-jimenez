import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosPorClienteComponent } from './descuentos-por-cliente.component';

describe('DescuentosPorClienteComponent', () => {
  let component: DescuentosPorClienteComponent;
  let fixture: ComponentFixture<DescuentosPorClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescuentosPorClienteComponent]
    });
    fixture = TestBed.createComponent(DescuentosPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
