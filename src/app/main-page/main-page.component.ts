import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GithubApiService } from '../shared/services/github-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private githuhService: GithubApiService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  description: string = "";
  fullName: string = "";
  htmlUrl: string = "";
  isDataReady: boolean = false;
  pullRequestState: string = "closed";
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ["id", "number", "title", "state", "action"];

  ngOnInit(): void {
    this.githuhService.getRepo().then(res => {
      this.description = res.description;
      this.fullName = res.full_name;
      this.htmlUrl = res.html_url;
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

