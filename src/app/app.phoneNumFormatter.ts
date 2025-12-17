import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumFormatter', standalone: true })

export class PhoneNumFormatterPipe implements PipeTransform {
    transform(rawNum: number): string {
        let numStr = rawNum.toString();
        let output = `(${numStr.substring(0,3)}) ${numStr.substring(3,6)}-${numStr.substring(6,10)}`;
        return output;
    }
}