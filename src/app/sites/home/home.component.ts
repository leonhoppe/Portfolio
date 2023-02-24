import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project} from "../../models/project";
import {Technology} from "../../models/technology";
import {BackendService} from "../../services/backend.service";
import {AnimatorService} from "../../services/animator.service";
import {Timestamp} from "../../models/timestamp";
import {SeoService} from "../../services/seo.service";

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

  public jobs: {current: number, all: string[], state: number, display: string} = {
    current: 0,
    all: ["full stack developer", "C# developer", "Java developer"],
    state: 0,
    display: ""
  };

  public constructor(private backend: BackendService, public animator: AnimatorService, private seo: SeoService) {
    setInterval(this.handleJobsAnimation.bind(this), 50);
    seo.setDefaults();
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

  private handleJobsAnimation(): void {
    if (this.jobs.state == 0) {
      const len = this.jobs.display.length;
      this.jobs.display = this.jobs.all[this.jobs.current].slice(0, len + 1);

      if (this.jobs.display.length >= this.jobs.all[this.jobs.current].length) this.jobs.state = 1;
    } else if (this.jobs.state == 50) {
      const len = this.jobs.display.length;
      this.jobs.display = this.jobs.display.slice(0, len - 1);

      if (this.jobs.display.length <= 1) {
        this.jobs.state = 0;
        this.jobs.current = (this.jobs.current + 1) % this.jobs.all.length;
      }
    } else {
      this.jobs.state++;
    }
  }

}
