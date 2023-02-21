import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from "../models/technology";

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {

  transform(objects: Technology[]): Technology[] {
    return objects?.filter(obj => obj.type == "Additional");
  }

}
