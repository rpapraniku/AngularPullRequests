import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PullRequestPageComponent } from './pull-request-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PullRequestPageComponent', () => {
  let component: PullRequestPageComponent;
  let fixture: ComponentFixture<PullRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PullRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
