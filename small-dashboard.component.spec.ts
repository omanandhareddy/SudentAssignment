import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDashboardComponent } from './small-dashboard.component';

describe('SmallDashboardComponent', () => {
  let component: SmallDashboardComponent;
  let fixture: ComponentFixture<SmallDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
