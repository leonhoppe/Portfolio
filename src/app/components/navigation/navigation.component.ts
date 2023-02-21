import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public constructor(public deviceService: DeviceDetectorService, public router: Router, private backend: BackendService) {}

  public navLinks: {label: string, href: string, icon?: string}[] = [
    {label: 'Home', href: '/', icon: 'home'},
    {label: 'Projekte', href: '/projects', icon: 'task'},
    {label: 'Technologien', href: '/technologies', icon: 'code'},
    {label: 'Über mich', href: '/about', icon: 'person'},
    {label: 'Kontakt', href: '/contact', icon: 'mail'}
  ];

  public socialLinks: {href: string, image: string}[];

  public cleanUrl(url: string): string {
    try {
      url = location.origin + url;
      const urlObj = new URL(url);

      urlObj.search = '';
      urlObj.hash = '';

      return urlObj.toString().replace(location.origin, "");
    } catch {
      return "";
    }
  }

  async ngOnInit() {
    this.socialLinks = await this.backend.getSocials();
  }

}
