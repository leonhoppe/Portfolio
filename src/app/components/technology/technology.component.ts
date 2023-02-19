import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Technology} from "../../models/technology";
import {AnimatorService} from "../../services/animator.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements AfterViewInit {

  @Input('technology') technology: Technology;
  @ViewChild('slider') slider: ElementRef;

  public constructor(private animator: AnimatorService) {}

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

  ngAfterViewInit(): void {
    this.animator.observer.observe(this.slider.nativeElement);
  }

}
