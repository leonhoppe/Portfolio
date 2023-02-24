import { Injectable } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
    this.setDefaults();
  }

  public setTitle(title: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({property: "og:title", content: title});
  }

  public setDescription(description: string): void {
    this.meta.updateTag({property: "description", content: description});
    this.meta.updateTag({property: "og:description", content: description});
  }

  public setDefaults(): void {
    this.meta.updateTag({property: "description", content: "Auf dieser Seite erfahren Sie, an welchen Projekten ich bereits gearbeitet habe, was meine Programmierkenntnisse sind und welche Pläne ich für die Zukunft habe."});
    this.meta.updateTag({property: "og:description", content: "Auf dieser Seite erfahren Sie, an welchen Projekten ich bereits gearbeitet habe, was meine Programmierkenntnisse sind und welche Pläne ich für die Zukunft habe."});
    this.meta.updateTag({property: "og:url", content: "https://leon-hoppe.de/"});
    this.meta.updateTag({property: "og:title", content: "Portfolio von Leon Hoppe"});
    this.meta.updateTag({property: "og:image", content: "https://leon-hoppe.de/favicon.ico"});
    this.title.setTitle("Portfolio von Leon Hoppe");
  }

}
