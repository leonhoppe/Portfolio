import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {Project} from "../../models/project";
import {Technology} from "../../models/technology";
import {BackendService} from "../../services/backend.service";
import {AnimatorService} from "../../services/animator.service";

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

  public constructor(public deviceService: DeviceDetectorService, private backend: BackendService, private animator: AnimatorService) {}

  public timeline: {date: number, description: string}[] = [
    {date: 2010, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?"},
    {date: 2015, description: "Lorem ipsum dolor sit amet"},
    {date: 2017, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?"},
    {date: 2022, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?"},
  ];

  public socialLinks: {href: string, image: string}[] = [
    {href: 'https://www.instagram.com/leonh.23/', image: 'https://instagram.com/favicon.ico'},
    {href: 'https://git.leon-hoppe.de/leon.hoppe', image: 'https://git.leon-hoppe.de/favicon.ico'},
    {href: 'mailto://leon@ladenbau-hoppe.de', image: 'https://webmail.strato.de/favicon.ico'}
  ];

  public getAnimationDelay(index: number, multiplier = 150): string {
    return `${index * multiplier}ms`;
  }

  async ngOnInit() {
    this.projects = await this.backend.getProjects();
    this.technologies = (await this.backend.getTechnologies()).filter(tech => tech.featured);
  }

  ngAfterViewInit(): void {
    this.animator.observer.observe(this.projectsWrapper.nativeElement);
    this.animator.observer.observe(this.timelineElement.nativeElement);
  }

}
