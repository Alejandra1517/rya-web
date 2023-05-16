import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmaterialesSolicitudComponent } from './agregarmateriales-solicitud.component';

describe('AgregarmaterialesSolicitudComponent', () => {
  let component: AgregarmaterialesSolicitudComponent;
  let fixture: ComponentFixture<AgregarmaterialesSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarmaterialesSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarmaterialesSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
