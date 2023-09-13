import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import {Language, Project} from "../models/project";
import {Technology} from "../models/technology";
import {Timestamp} from "../models/timestamp";
import {Social} from "../models/social";
import {Message} from "../models/message";
import {About} from "../models/about";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private pb: PocketBase;

  private states: {id: string, name: string}[] = [
    {id: 'finished', name: "Fertig"},
    {id: 'canceled', name: "Abgebrochen"},
    {id: 'paused', name: "Pausiert"},
    {id: 'development', name: "In Entwicklung"}
  ]

  constructor() {
    this.pb = new PocketBase('https://api.leon-hoppe.de');
  }

  public async getProjects(): Promise<Project[]> {
    const rawProjects = await this.pb?.collection('projects').getFullList(200, {
      sort: '-order'
    }) as Project[];
    const allLanguages = await this.pb?.collection('languages').getFullList();

    const projects: Project[] = [];
    for(let rawProject of rawProjects) {
      const project = rawProject as Project;

      project.status = this.states?.filter(state => state.id == rawProject.status)[0]['name'];

      if (rawProject.languages != undefined) {
        const languages: Language[] = []
        for (let languageId of rawProject.languages as unknown as string[]) {
          languages.push(allLanguages?.filter(lang => lang.id == languageId)[0] as unknown as Language)
        }
        project.languages = languages;
      }

      projects.push(project);
    }

    return projects;
  }

  public async getTechnologies(): Promise<Technology[]> {
    return await this.pb?.collection('technologies').getFullList();
  }

  public async getTimeline(): Promise<Timestamp[]> {
    return await this.pb?.collection('timeline').getFullList(200, {
      sort: 'date'
    });
  }

  public async getSocials(): Promise<Social[]> {
    return [
      {href: 'https://www.instagram.com/leonh.23/', image: 'https://instagram.com/favicon.ico'},
      {href: 'https://gitlab.com/leon.hoppe', image: 'https://gitlab.com/favicon.ico'},
      {href: 'mailto://leon@ladenbau-hoppe.de', image: 'https://webmail.strato.de/favicon.ico'}
    ];
  }

  public async getAbout(): Promise<About> {
    return await this.pb?.collection('about').getFirstListItem('');
  }

  public async sendMessage(message: Message) {
    await this.pb?.collection('messages').create(message);
  }

}
