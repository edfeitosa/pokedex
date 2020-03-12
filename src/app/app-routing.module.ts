import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/pages/home/home.component";
import { DetailsComponent } from "./components/pages/details/details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "page/:page", component: HomeComponent },
  { path: "details/:name", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
