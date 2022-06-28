import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestPageComponent } from './pull-request-page.component';

describe('PullRequestPageComponent', () => {
  let component: PullRequestPageComponent;
  let fixture: ComponentFixture<PullRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullRequestPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
