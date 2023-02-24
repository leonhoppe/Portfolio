import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from "../models/timestamp";

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(objects: Timestamp[]): Timestamp[] {
    return objects?.filter(obj => !obj.carrier);
  }

}
