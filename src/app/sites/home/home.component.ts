import { Component } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {Project} from "../../models/project";

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
  ]

}
