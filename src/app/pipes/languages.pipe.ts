import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from "../models/technology";

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {

  transform(objects: Technology[]): Technology[] {
    const newObjects: Technology[] = [];
    objects?.forEach(obj => {
      if (obj?.type == "Language")
        newObjects.push(obj);
    })
    return newObjects;
  }

}
