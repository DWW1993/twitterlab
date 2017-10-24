import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tweet } from './list.component';

describe('ListComponent', () => {
  let component: Tweet;
  let fixture: ComponentFixture<Tweet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tweet ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tweet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
