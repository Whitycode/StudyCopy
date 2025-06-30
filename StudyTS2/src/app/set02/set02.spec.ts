import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set02 } from './set02';

describe('Set02', () => {
  let component: Set02;
  let fixture: ComponentFixture<Set02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Set02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Set02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
