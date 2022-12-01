import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacionAdminComponent } from './liquidacion-admin.component';

describe('LiquidacionAdminComponent', () => {
  let component: LiquidacionAdminComponent;
  let fixture: ComponentFixture<LiquidacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidacionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
