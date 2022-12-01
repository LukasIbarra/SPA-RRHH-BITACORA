import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosAdminComponent } from './cargos-admin.component';

describe('CargosAdminComponent', () => {
  let component: CargosAdminComponent;
  let fixture: ComponentFixture<CargosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
