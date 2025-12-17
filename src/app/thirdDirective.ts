import { Component, Input } from '@angular/core';

@Component({
    selector: 'third-directive',
    standalone: true,
    template: `<h4>The third directive is running! Hello from the new directive. The number taken is {{num}}</h4>
               `
})

export class ThirdDirective {
    @Input()
    num!:  number;
}
