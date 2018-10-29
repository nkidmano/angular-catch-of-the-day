import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centUSD'
})
export class CentUSDPipe implements PipeTransform {

  transform(cents: any, args?: any): any {
    return (cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

}
