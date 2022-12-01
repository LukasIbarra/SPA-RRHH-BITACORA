import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoSaludAdminComponent } from './fondo-salud-admin.component';

describe('FondoSaludAdminComponent', () => {
  let component: FondoSaludAdminComponent;
  let fixture: ComponentFixture<FondoSaludAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoSaludAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoSaludAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
