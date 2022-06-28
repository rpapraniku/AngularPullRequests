import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { PullRequestPageComponent } from "./pull-request-page/pull-request-page.component";

const routes: Routes = [
    {
        path: "main",
        component: MainPageComponent
    },
    {
        path: "pull-request/:number",
        component: PullRequestPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }