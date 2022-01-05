import { Pipe, PipeTransform } from '@angular/core';
import { DocKeyWord } from './doc-key-word';

@Pipe({
  name: 'searchKeyWords'
})
export class SearchKeyWordsPipe implements PipeTransform {

  transform(value: DocKeyWord[], input: string): any {
    if (input != '') {
       return value.filter(val => val.Keywords.toLowerCase().indexOf(input.toLowerCase()) > 0) ;
     } else {
       return value;
     }
    }

}
