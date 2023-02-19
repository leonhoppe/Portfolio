import { Component, Input } from '@angular/core';
import {Project} from "../../models/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input('project') project: Project | undefined;
  @Input('showInfo') showInfo: "" | undefined;

}
