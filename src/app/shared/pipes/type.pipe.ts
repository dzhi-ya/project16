import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(type: number): string {
    switch(type) {
      case 0:
        return 'IT';
        break;

      case 1:
        return 'Продажи';
        break;
      
      case 2:
        return 'Доставка';
        break;

      case 3:
        return 'Юридический';
        break;
    }
  }

}
