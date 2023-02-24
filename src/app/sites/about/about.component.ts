import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Timestamp} from "../../models/timestamp";
import {BackendService} from "../../services/backend.service";
import {AnimatorService} from "../../services/animator.service";
import {About} from "../../models/about";
import {SeoService} from "../../services/seo.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('experience') experience: ElementRef;
  @ViewChild('carrier') carrier: ElementRef;
  public about: About;
  public timeline: Timestamp[];

  public constructor(private backend: BackendService, public animator: AnimatorService, public seo: SeoService) {
    this.seo.setDefaults();
    this.seo.setTitle("Über mich");
  }

  async ngOnInit() {
    this.about = await this.backend.getAbout();
    this.timeline = await this.backend.getTimeline();
  }

  ngAfterViewInit(): void {
    this.animator.observer.observe(this.experience.nativeElement);
    this.animator.observer.observe(this.carrier.nativeElement);
  }

}
