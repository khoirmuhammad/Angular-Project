import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: any[], filterValue: string, propertyName: string): any {
    const resultArray = [];
    if (value){
      if (value.length === 0 || filterValue === '' || propertyName === '') {
        return value;
      }

      for (const item of value) {
        if (item[propertyName] === filterValue) {
          resultArray.push(item);
        }
      }

      return resultArray;
    }
  }

}
