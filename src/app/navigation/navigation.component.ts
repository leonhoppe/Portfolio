import { Component } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public constructor(public deviceService: DeviceDetectorService, public router: Router) {}

  public navLinks: {label: string, href: string, icon?: string}[] = [
    {label: 'Home', href: '/', icon: 'home'},
    {label: 'Projekte', href: '/projects', icon: 'task'},
    {label: 'Technologien', href: '/technologies', icon: 'code'},
    {label: 'Über mich', href: '/about', icon: 'person'},
    {label: 'Kontakt', href: '/contact', icon: 'mail'}
  ];

  public socialLinks: {href: string, image: string}[] = [
    {href: 'https://www.instagram.com/leonh.23/', image: 'https://instagram.com/favicon.ico'},
    {href: 'https://git.leon-hoppe.de/leon.hoppe', image: 'https://git.leon-hoppe.de/favicon.ico'},
    {href: 'mailto://leon@ladenbau-hoppe.de', image: 'https://webmail.strato.de/favicon.ico'}
  ]

}
