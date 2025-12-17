import { Component, Input } from '@angular/core';
import { ThirdDirective } from './thirdDirective';

// Define second directive.
@Component({
    selector: 'second-directive',
    standalone: true,
    imports: [ThirdDirective],
    template: `<h3>This is the second directive! {{firstName}} </h3><third-directive [num]="figure"></third-directive>`,
})

// This is just a component.
export class NewDirective {
    figure = 67;
    @Input()
    firstName!: string;
    
}