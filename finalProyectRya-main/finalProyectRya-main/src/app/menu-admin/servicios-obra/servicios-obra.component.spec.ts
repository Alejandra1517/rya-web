import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosObraComponent } from './servicios-obra.component';

describe('ServiciosObraComponent', () => {
  let component: ServiciosObraComponent;
  let fixture: ComponentFixture<ServiciosObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosObraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
