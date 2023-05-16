import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudClienteComponent } from './crear-solicitud-cliente.component';

describe('CrearSolicitudClienteComponent', () => {
  let component: CrearSolicitudClienteComponent;
  let fixture: ComponentFixture<CrearSolicitudClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSolicitudClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
