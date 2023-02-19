import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './sites/home/home.component';
import { FeaturedProjectsPipe } from './pipes/featured-projects.pipe';
import { ProjectsComponent } from './sites/projects/projects.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { FancyButtonComponent } from './components/fancy-button/fancy-button.component';
import { ProjectComponent } from './components/project/project.component';
import { TechnologiesComponent } from './sites/technologies/technologies.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { LanguagesPipe } from './pipes/languages.pipe';
import { FrameworksPipe } from './pipes/frameworks.pipe';
import { SkillsPipe } from './pipes/skills.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FeaturedProjectsPipe,
    ProjectsComponent,
    FancyButtonComponent,
    ProjectComponent,
    TechnologiesComponent,
    TechnologyComponent,
    LanguagesPipe,
    FrameworksPipe,
    SkillsPipe
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
