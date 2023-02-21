import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(objects: (any & {featured: boolean})[]): any[] {
    return objects?.filter(obj => obj.featured);
  }

}
