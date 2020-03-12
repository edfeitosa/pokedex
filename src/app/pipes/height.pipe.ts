import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    function formatedHeight(weight:string) {
      const valueInInt = parseInt(weight, 10);
      if (valueInInt < 10) {
        let valueHeight = valueInInt * 10;
        return `${valueHeight} cm`;
      }
      let heightCalculate = valueInInt / 10;
      let valueHeight = heightCalculate.toString().replace(".", ",");
      return `${valueHeight} m`;
    }

    if (value) {
      return formatedHeight(value);
    }
  }

}
