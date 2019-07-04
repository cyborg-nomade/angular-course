import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(input: Array<any>): Array<any> {
    const sortedArray: Array<any> = input.sort((obj1, obj2) => {
      if (obj1.name > obj2.name) {
        return 1;
      }
      if (obj1.name < obj2.name) {
        return -1;
      }
      return 0;
    });
    return sortedArray;
  }
}
