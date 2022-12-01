import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosAddComponent } from './cargos-add.component';

describe('CargosAddComponent', () => {
  let component: CargosAddComponent;
  let fixture: ComponentFixture<CargosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
