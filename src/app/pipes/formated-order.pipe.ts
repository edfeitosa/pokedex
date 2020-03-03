import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatedOrder"
})
export class FormatedOrderPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value <= 9) {
      return `00${value}`;
    }
    if (value > 9 && value <= 99) {
      return `0${value}`;
    }
    return value;
  }
}
