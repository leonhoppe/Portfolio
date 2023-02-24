import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './sites/home/home.component';
import { FeaturedPipe } from './pipes/featured.pipe';
import { ProjectsComponent } from './sites/projects/projects.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { FancyButtonComponent } from './components/fancy-button/fancy-button.component';
import { ProjectComponent } from './components/project/project.component';
import { TechnologiesComponent } from './sites/technologies/technologies.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { LanguagesPipe } from './pipes/languages.pipe';
import { FrameworksPipe } from './pipes/frameworks.pipe';
import { SkillsPipe } from './pipes/skills.pipe';
import { ContactComponent } from './sites/contact/contact.component';
import { AboutComponent } from './sites/about/about.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { TimestampComponent } from './components/timestamp/timestamp.component';
import { CarrierPipe } from './pipes/carrier.pipe';
import { ExperiencePipe } from './pipes/experience.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FeaturedPipe,
    ProjectsComponent,
    FancyButtonComponent,
    ProjectComponent,
    TechnologiesComponent,
    TechnologyComponent,
    LanguagesPipe,
    FrameworksPipe,
    SkillsPipe,
    ContactComponent,
    AboutComponent,
    TimestampComponent,
    CarrierPipe,
    ExperiencePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
