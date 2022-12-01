import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoPensionAddComponent } from './fondo-pension-add.component';

describe('FondoPensionAddComponent', () => {
  let component: FondoPensionAddComponent;
  let fixture: ComponentFixture<FondoPensionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoPensionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoPensionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
