import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe'
})

export class MycustompipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('Basic Value :', value);
    console.log('Additional arguments:', args);

    if (value === '') {
      return '' ;
    }
    if (args === 'true') {
      return '{ ' + value + ' }';
    }
    if (args === 'false') {
      return '{{' + value + '}}';
    }
    return value;
  }
}
