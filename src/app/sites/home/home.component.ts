import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {Project} from "../../models/project";
import {Technology} from "../../models/technology";
import {BackendService} from "../../services/backend.service";
import {AnimatorService} from "../../services/animator.service";
import {Timestamp} from "../../models/timestamp";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('projectsWrapper') projectsWrapper: ElementRef;
  @ViewChild('timelineElement') timelineElement: ElementRef;
  public projects: Project[];
  public technologies: Technology[];
  public timeline: Timestamp[];
  public socialLinks: {href: string, image: string}[];

  public constructor(public deviceService: DeviceDetectorService, private backend: BackendService, private animator: AnimatorService) {}

  public getAnimationDelay(index: number, multiplier = 150): string {
    return `${index * multiplier}ms`;
  }

  async ngOnInit() {
    this.projects = await this.backend.getProjects();
    this.technologies = await this.backend.getTechnologies();
    this.timeline = await this.backend.getTimeline();
    this.socialLinks = await this.backend.getSocials();
  }

  ngAfterViewInit(): void {
    this.animator.observer.observe(this.projectsWrapper.nativeElement);
    this.animator.observer.observe(this.timelineElement.nativeElement);
  }

}
