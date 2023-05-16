import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesClientesComponent } from './solicitudes-clientes.component';

describe('SolicitudesClientesComponent', () => {
  let component: SolicitudesClientesComponent;
  let fixture: ComponentFixture<SolicitudesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
