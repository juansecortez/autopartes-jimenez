import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDescuentosComponent } from './mis-descuentos.component';

describe('MisDescuentosComponent', () => {
  let component: MisDescuentosComponent;
  let fixture: ComponentFixture<MisDescuentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisDescuentosComponent]
    });
    fixture = TestBed.createComponent(MisDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
