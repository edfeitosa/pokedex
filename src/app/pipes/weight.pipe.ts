import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    function formatedWeight(weight:string) {
      const valueInInt = parseInt(weight, 10);
      if (valueInInt < 10) {
        let valueWeight = valueInInt * 10;
        return `${valueWeight} g`;
      }
      let weightCalculate = valueInInt / 10;
      let valueWeight = weightCalculate.toString().replace(".", ",");
      return `${valueWeight} kg`;
    }

    if (value) {
      return formatedWeight(value);
    }
  }

}
