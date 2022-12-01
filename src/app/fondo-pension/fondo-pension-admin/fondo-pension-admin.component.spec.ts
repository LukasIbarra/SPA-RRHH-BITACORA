import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoPensionAdminComponent } from './fondo-pension-admin.component';

describe('FondoPensionAdminComponent', () => {
  let component: FondoPensionAdminComponent;
  let fixture: ComponentFixture<FondoPensionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoPensionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoPensionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
