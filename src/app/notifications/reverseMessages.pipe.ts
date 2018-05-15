import { Pipe, PipeTransform } from '@angular/core';
import { filter, reverse } from 'lodash';

@Pipe({
  name: 'reverseMessages'
})
export class ReverseMessagesPipe implements PipeTransform {
  transform(value) {
        if (!value) return;

        value = filter(value, ['dismissed', false]);

        return reverse(value);
    }
}