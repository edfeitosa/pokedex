import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    function formatedWeight(weight:string) {
      let valueWeight = parseInt(weight, 10);
      if (valueWeight < 10) {
        return `${(valueWeight * 10)} cm`;
      }
    }

    if (value) {
      return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
    }
  }

}
