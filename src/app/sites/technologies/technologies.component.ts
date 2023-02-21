import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';
import {BackendService} from "../../services/backend.service";
import {Technology} from "../../models/technology";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements AfterViewInit {

  @ViewChild('chart') chartRef: ElementRef;
  public technologies: Technology[];

  public constructor(public deviceService: DeviceDetectorService, private backend: BackendService) {}

  async ngAfterViewInit() {
    const projects = await this.backend.getProjects();
    const data: {lang: string, count: number}[] = [];

    for (let project of projects) {
      for (let lang of project.languages) {
        if (lang.class == "angularjs") {
          project.languages.push({label: "HTML", class: ""}, {label: "CSS", class: ""}, {label: "TypeScript", class: ""});
        }

        if (lang.class == "dotnetcore") {
          project.languages.push({label: "C#", class: ''});
        }

        let element = data.filter(row => row.lang == lang.label)[0];
        if (element == undefined) {
          element = {lang: lang.label, count: 0};
          data.push(element);
        }



        element.count++;
      }
    }

    Chart.defaults.color = "#FFF";
    new Chart(
      this.chartRef.nativeElement,
      {
        type: "doughnut",
        data: {
          labels: data.map(row => row.lang),
          datasets: [
            {
              label: "Projekte",
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );

    this.technologies = await this.backend.getTechnologies();
  }

}
