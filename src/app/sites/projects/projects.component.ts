import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {BackendService} from "../../services/backend.service";
import {AnimatorService} from "../../services/animator.service";
import {SeoService} from "../../services/seo.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public constructor(private backend: BackendService, public animator: AnimatorService, private seo: SeoService) {
    seo.setTitle("Projekte");
    seo.setDescription("Ein Überblick von all meinen Projekten");
  }

  public projects: Project[] | undefined;

  async ngOnInit() {
    this.projects = await this.backend.getProjects();
  }

}
