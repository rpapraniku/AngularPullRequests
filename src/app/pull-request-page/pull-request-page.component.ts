import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRequestViewer } from '../shared/models/requestViewer';
import { GithubApiService } from '../shared/services/github-api.service';

@Component({
  selector: 'app-pull-request-page',
  templateUrl: './pull-request-page.component.html',
  styleUrls: ['./pull-request-page.component.scss']
})
export class PullRequestPageComponent implements OnInit {

  id: string;
  number: string;
  title: string;
  state: string;
  created_at: string;
  requested_reviewers: IRequestViewer[];

  constructor(private activationRoute: ActivatedRoute, private githubApiService: GithubApiService) { }

  ngOnInit(): void {
    this.githubApiService.getPullRequest(this.activationRoute.snapshot.params.number).then(res => {
      this.id = res.id;
      this.number = res.number;
      this.title = res.title;
      this.state = res.state;
      this.created_at = res.created_at;
      this.requested_reviewers = res.requested_reviewers;
    });
  }
}
