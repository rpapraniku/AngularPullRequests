import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONTENT_TYPE, JSON_FORMAT } from '../consts/content-type-conts';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  headers = new HttpHeaders().set(CONTENT_TYPE, JSON_FORMAT);

  constructor(private http: HttpClient) { }

  async getRepo(): Promise<any> {
    return this.http.get("https://api.github.com/repos/angular/angular", { headers: this.headers }).toPromise();
  }
  async getAllPullRequests(status: string): Promise<any> {
    return this.http.get(`https://api.github.com/repos/angular/angular/pulls?state=${status}`, { headers: this.headers }).toPromise();
  }

  async getPullRequest(number: string): Promise<any> {
    return this.http.get(`https://api.github.com/repos/angular/angular/pulls/${number}`, { headers: this.headers }).toPromise();
  }

}
