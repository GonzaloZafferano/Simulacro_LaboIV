import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesActorComponent } from './detalles-actor.component';

describe('DetallesActorComponent', () => {
  let component: DetallesActorComponent;
  let fixture: ComponentFixture<DetallesActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
