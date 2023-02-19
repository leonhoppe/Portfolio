import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from "../models/technology";

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {

  transform(objects: Technology[]): Technology[] {
    const newObjects: Technology[] = [];
    objects?.forEach(obj => {
      if (obj?.type == "Additional")
        newObjects.push(obj);
    })
    return newObjects;
  }

}
