import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus:string,propName:string): any {
    if(!value.length || !filteredStatus) return value;
    return value.filter((data)=>data[propName] === filteredStatus)
  }

}
