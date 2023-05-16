import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasClientesComponent } from './obras-clientes.component';

describe('ObrasClientesComponent', () => {
  let component: ObrasClientesComponent;
  let fixture: ComponentFixture<ObrasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrasClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
