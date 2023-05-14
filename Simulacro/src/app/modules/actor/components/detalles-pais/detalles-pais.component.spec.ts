import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPaisComponent } from './detalles-pais.component';

describe('DetallesPaisComponent', () => {
  let component: DetallesPaisComponent;
  let fixture: ComponentFixture<DetallesPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
