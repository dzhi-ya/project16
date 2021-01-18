import { findNode } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(workersList, searchStr: string): any[] {
    if (workersList.lenght === 0 || searchStr === '') {
      return workersList;
    }
    else {
      let filteredItems = workersList.filter(
        function (item) {
          let fio = item.name.toLowerCase() + ' ' + item.surname.toLowerCase();
          return fio.indexOf(searchStr.toLowerCase()) !== -1;
        });
      return filteredItems;
    }
  }
}
