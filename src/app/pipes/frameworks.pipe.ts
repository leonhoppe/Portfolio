import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from "../models/technology";

@Pipe({
  name: 'frameworks'
})
export class FrameworksPipe implements PipeTransform {

  transform(objects: Technology[]): Technology[] {
    return objects?.filter(obj => obj.type == "Framework");
  }

}
