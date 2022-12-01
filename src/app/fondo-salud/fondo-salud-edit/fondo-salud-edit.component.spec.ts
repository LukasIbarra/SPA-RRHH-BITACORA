import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoSaludEditComponent } from './fondo-salud-edit.component';

describe('FondoSaludEditComponent', () => {
  let component: FondoSaludEditComponent;
  let fixture: ComponentFixture<FondoSaludEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoSaludEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoSaludEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
