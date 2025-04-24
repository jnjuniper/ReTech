import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spot1Component } from './spot1.component';

describe('Spot1Component', () => {
  let component: Spot1Component;
  let fixture: ComponentFixture<Spot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spot1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
