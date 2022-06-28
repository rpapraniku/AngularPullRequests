import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PullRequestPageComponent } from './pull-request-page/pull-request-page.component';
import { GithubApiService } from './shared/services/github-api.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PullRequestPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
