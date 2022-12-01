import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoSaludAddComponent } from './fondo-salud-add.component';

describe('FondoSaludAddComponent', () => {
  let component: FondoSaludAddComponent;
  let fixture: ComponentFixture<FondoSaludAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoSaludAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoSaludAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
