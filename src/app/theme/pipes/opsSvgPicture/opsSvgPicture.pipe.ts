import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from '../../../theme';

@Pipe({name: 'opsSvgPicture'})
export class SvgPicturePipe implements PipeTransform {

    transform (input: string): string {
        return layoutPaths.images.svg + input + '.svg';
    }
}
