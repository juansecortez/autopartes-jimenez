import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDescuentosComponent } from './agregar-descuentos.component';

describe('AgregarDescuentosComponent', () => {
  let component: AgregarDescuentosComponent;
  let fixture: ComponentFixture<AgregarDescuentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarDescuentosComponent]
    });
    fixture = TestBed.createComponent(AgregarDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
