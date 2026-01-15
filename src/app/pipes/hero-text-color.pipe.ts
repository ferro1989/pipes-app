import { ColorMap } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor',
})
export class TextColorPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value];
  }
}
