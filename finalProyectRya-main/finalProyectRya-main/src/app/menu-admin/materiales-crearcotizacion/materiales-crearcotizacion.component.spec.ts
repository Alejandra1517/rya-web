import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesCrearcotizacionComponent } from './materiales-crearcotizacion.component';

describe('MaterialesCrearcotizacionComponent', () => {
  let component: MaterialesCrearcotizacionComponent;
  let fixture: ComponentFixture<MaterialesCrearcotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialesCrearcotizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialesCrearcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
