import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVehicleComponent } from './detail-vehicle.component';

describe('DetailVehicleComponent', () => {
  let component: DetailVehicleComponent;
  let fixture: ComponentFixture<DetailVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
