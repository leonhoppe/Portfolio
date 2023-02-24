import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Social} from "../../models/social";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialLinks: Social[];

  public constructor(private backend: BackendService) {}

  async ngOnInit() {
    this.socialLinks = await this.backend.getSocials();
  }

}
