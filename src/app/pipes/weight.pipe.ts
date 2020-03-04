import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    function formatedWeight(weight:string) {
      let valueWeight = parseInt(weight, 10);
      if (valueWeight < 10) {
        return `${(valueWeight * 100)} gramas`;
      } else {

      }
    }

    if (value) {
      return parseFloat(value).toFixed(1);
    }
  }

}
