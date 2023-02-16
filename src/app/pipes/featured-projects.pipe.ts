import { Pipe, PipeTransform } from '@angular/core';
import {Project} from "../models/project";

@Pipe({
  name: 'featuredProjects'
})
export class FeaturedProjectsPipe implements PipeTransform {

  transform(objects: Project[]): Project[] {
    const newObjects: Project[] = [];
    objects?.forEach(obj => {
      if (obj?.featured)
        newObjects.push(obj);
    })
    return newObjects;
  }

}
