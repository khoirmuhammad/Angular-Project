import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    debugger;

    let result = value || [];

    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    result.sort((a: any, b: any) => {
      debugger;
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (aValue < bValue) {
        return -1 * multiplier;
      } else if (aValue > bValue) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    }
    );

    return result;
  }

}
