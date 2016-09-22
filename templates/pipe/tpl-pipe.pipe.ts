import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tplPipe'
})
export class TplPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
