import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import {Language, Project} from "../models/project";
import {Technology} from "../models/technology";
import {Timestamp} from "../models/timestamp";
import {Social} from "../models/social";
import {Message} from "../models/message";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('https://ed168214-77da-44f1-9a61-859abb49edf8.api.leon-hoppe.de');
  }

  public async getProjects(): Promise<Project[]> {
    const rawProjects = await this.pb?.collection('projects').getFullList(200, {
      sort: '-order'
    }) as Project[];
    const allLanguages = await this.pb?.collection('languages').getFullList();
    const states = await this.pb?.collection('project_states').getFullList();

    const projects: Project[] = [];
    for(let rawProject of rawProjects) {
      const project = rawProject as Project;

      project.status = states?.filter(state => state.id == rawProject.status)[0]['name'];

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
    return await this.pb?.collection('timeline').getFullList();
  }

  public async getSocials(): Promise<Social[]> {
    return [
      {href: 'https://www.instagram.com/leonh.23/', image: 'https://instagram.com/favicon.ico'},
      {href: 'https://git.leon-hoppe.de/leon.hoppe', image: 'https://git.leon-hoppe.de/favicon.ico'},
      {href: 'mailto://leon@ladenbau-hoppe.de', image: 'https://webmail.strato.de/favicon.ico'}
    ];
  }

  public async sendMessage(message: Message) {
    await this.pb?.collection('messages').create(message);
  }

}
