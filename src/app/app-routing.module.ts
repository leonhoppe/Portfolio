import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./sites/home/home.component";
import {ProjectsComponent} from "./sites/projects/projects.component";
import {TechnologiesComponent} from "./sites/technologies/technologies.component";
import {AboutComponent} from "./sites/about/about.component";
import {ContactComponent} from "./sites/contact/contact.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "technologies", component: TechnologiesComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", pathMatch: "full", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
