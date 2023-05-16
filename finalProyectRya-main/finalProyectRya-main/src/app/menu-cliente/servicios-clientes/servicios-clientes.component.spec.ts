import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosClientesComponent } from './servicios-clientes.component';

describe('ServiciosClientesComponent', () => {
  let component: ServiciosClientesComponent;
  let fixture: ComponentFixture<ServiciosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
