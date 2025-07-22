import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPage } from './quest-page';

describe('QuestPage', () => {
  let component: QuestPage;
  let fixture: ComponentFixture<QuestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
