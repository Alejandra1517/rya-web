import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesModificarcotizacionComponent } from './materiales-modificarcotizacion.component';

describe('MaterialesModificarcotizacionComponent', () => {
  let component: MaterialesModificarcotizacionComponent;
  let fixture: ComponentFixture<MaterialesModificarcotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialesModificarcotizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialesModificarcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
