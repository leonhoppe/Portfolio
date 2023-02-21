import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from "../models/technology";

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {

  transform(objects: Technology[]): Technology[] {
    return objects?.filter(obj => obj.type == "Language");
  }

}
