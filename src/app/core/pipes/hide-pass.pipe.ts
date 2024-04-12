import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePass'
})
export class HidePassPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return '*'.repeat(value.length);

  }

}
