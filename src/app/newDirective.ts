import { Component } from '@angular/core';
import { otherDirective }  from './otherDirective';


// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'second-directive',
    standalone: true,
    imports: [otherDirective],
    template: `<h3>This is the second directive! <otherSelector></otherSelector></h3>`,
})
export class NewDirective {
}

