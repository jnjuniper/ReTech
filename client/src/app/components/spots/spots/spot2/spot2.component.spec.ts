import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spot2Component } from './spot2.component';

describe('Spot2Component', () => {
  let component: Spot2Component;
  let fixture: ComponentFixture<Spot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spot2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
