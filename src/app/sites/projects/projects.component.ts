import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {DeviceDetectorService} from "ngx-device-detector";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public constructor(public deviceService: DeviceDetectorService, private backend: BackendService) {}

  public projects: Project[] | undefined;

  public getAnimationDelay(index: number): string {
    return `${index * 150}ms`;
  }

  async ngOnInit() {
    this.projects = await this.backend.getProjects();
  }

}
