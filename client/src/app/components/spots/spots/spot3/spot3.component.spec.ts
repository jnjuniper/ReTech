import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spot3Component } from './spot3.component';

describe('Spot3Component', () => {
  let component: Spot3Component;
  let fixture: ComponentFixture<Spot3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spot3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
