import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNavbarComponent } from './feed-navbar';

describe('FeedNavbarComponent', () => {
  let component: FeedNavbarComponent;
  let fixture: ComponentFixture<FeedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
