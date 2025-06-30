import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set01 } from './set01';

describe('Set01', () => {
  let component: Set01;
  let fixture: ComponentFixture<Set01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Set01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Set01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
