import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../shared/services/github-api.service';

@Component({
  selector: 'app-pull-request-page',
  templateUrl: './pull-request-page.component.html',
  styleUrls: ['./pull-request-page.component.scss']
})
export class PullRequestPageComponent implements OnInit {

  pullRequest: any;
  title: string;
  number: string;
  state: string;
  createdTime: Date;
  requestViewers: any = [];

  constructor(private activationRoute: ActivatedRoute, private githubApiService: GithubApiService) {
  }

  ngOnInit(): void {
    this.githubApiService.getPullRequest(this.activationRoute.snapshot.params.number).then(res => {
      this.number = this.activationRoute.snapshot.params.number;
      this.pullRequest = res;
      this.title = res.title;
      this.state = res.state;
      this.createdTime = res.created_at;
      this.requestViewers = res.requested_reviewers;
    });
  }

}
