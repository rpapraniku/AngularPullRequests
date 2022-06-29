import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPullRequest } from '../shared/models/pullRequest';
import { GithubApiService } from '../shared/services/github-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private githuhService: GithubApiService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  full_name: string;
  html_url: string;
  description: string;

  isDataReady: boolean = false;
  pullRequestState: string = "closed";
  dataSource = new MatTableDataSource<IPullRequest>();
  displayedColumns = ["id", "number", "title", "state", "action"];

  ngOnInit(): void {
    this.githuhService.getRepo().then(res => {
      this.full_name = res.full_name;
      this.html_url = res.html_url;
      this.description = res.description;
    });

    this.githuhService.getAllPullRequests("open").then(res => {
      this.dataSource.data = res;
      this.isDataReady = true;
    });
  }

  editPullRequest(number: string) {
    this.router.navigate(['/pull-request', number]);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onStateToggleChange(state: string) {
    this.isDataReady = false;
    this.dataSource.data = [];
    this.githuhService.getAllPullRequests(state).then(res => {
      this.dataSource.data = res;
      this.isDataReady = true;
    });
  }
}

