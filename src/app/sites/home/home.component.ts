import { Component } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {Project} from "../../models/project";
import {Technology} from "../../models/Technology";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public constructor(public deviceService: DeviceDetectorService) {}

  public projects: Project[] = [
    {
      name: "Test Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?",
      cover: "https://cdn.leon-hoppe.de/portfolio/projects/manager.jpeg",
      featured: true,
      buttons: [{
        text: "Source Code",
        link: "#hero"
      }]
    },
    {
      name: "Test Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?",
      cover: "https://cdn.leon-hoppe.de/portfolio/projects/manager.jpeg",
      featured: true,
      buttons: [{
        text: "Source Code",
        link: ""
      },
        {
          text: "gskjghjshfkafsdgs",
          link: "#hero"
        },]
    },
    {
      name: "Test Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?",
      cover: "https://cdn.leon-hoppe.de/portfolio/projects/manager.jpeg",
      featured: true
    },
    {
      name: "Test Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi facere, fuga maxime nulla qui voluptas voluptates? Adipisci asperiores dolor error iste sunt tempore. Blanditiis illum mollitia nostrum quae vero?",
      cover: "https://cdn.leon-hoppe.de/portfolio/projects/manager.jpeg",
      featured: true
    },
  ];

  public technologies: Technology[] = [
    {name: "C#", level: 3},
    {name: "Java", level: 3},
    {name: "HTML, CSS / SCSS", level: 2},
    {name: "JavaScript, TypeScript", level: 3},
    {name: "Lua", level: 2},
    {name: "Python", level: 1},
  ];

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

  public getTechnologyLevelName(level: number): string {
    switch (level) {
      case 1:
        return "Anfänger";
      case 2:
        return "Erweitert";
      case 3:
        return "Fortgeschritten";

      default:
        return "Normal";
    }
  }

  public createTechProgressClasses(level: number): string {
    return `tech-progress level-${level}`;
  }

}
