import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from "../models/technology";

@Pipe({
  name: 'frameworks'
})
export class FrameworksPipe implements PipeTransform {

  transform(objects: Technology[]): Technology[] {
    const newObjects: Technology[] = [];
    objects?.forEach(obj => {
      if (obj?.type == "Framework")
        newObjects.push(obj);
    })
    return newObjects;
  }

}
