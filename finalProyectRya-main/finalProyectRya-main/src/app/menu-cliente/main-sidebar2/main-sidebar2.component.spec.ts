import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidebar2Component } from './main-sidebar2.component';

describe('MainSidebar2Component', () => {
  let component: MainSidebar2Component;
  let fixture: ComponentFixture<MainSidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSidebar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
