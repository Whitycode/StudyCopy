import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterPreview } from './creater-preview';

describe('CreaterPreview', () => {
  let component: CreaterPreview;
  let fixture: ComponentFixture<CreaterPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaterPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
