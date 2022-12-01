import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoPensionEditComponent } from './fondo-pension-edit.component';

describe('FondoPensionEditComponent', () => {
  let component: FondoPensionEditComponent;
  let fixture: ComponentFixture<FondoPensionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoPensionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoPensionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
