import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONTENT_TYPE, JSON_FORMAT } from '../consts/content-type-conts';
import { firstValueFrom } from 'rxjs';
import { IApplicationMain } from '../models/applicationMain';
import { IPullRequest } from '../models/pullRequest';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  headers = new HttpHeaders().set(CONTENT_TYPE, JSON_FORMAT);

  constructor(private http: HttpClient) { }

  async getRepo() {
    return firstValueFrom(this.http.get<IApplicationMain>("https://api.github.com/repos/angular/angular", { headers: this.headers }));
  }

  async getAllPullRequests(status: string) {
    return firstValueFrom(this.http.get<IPullRequest[]>(`https://api.github.com/repos/angular/angular/pulls?state=${status}`, { headers: this.headers }));
  }

  async getPullRequest(number: string) {
    return firstValueFrom(this.http.get<IPullRequest>(`https://api.github.com/repos/angular/angular/pulls/${number}`, { headers: this.headers }));
  }

}
