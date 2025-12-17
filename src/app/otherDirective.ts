import { Component } from '@angular/core';

@Component({
    selector: 'otherSelector',
    standalone: true,
    template: `<h4>The third directive is running! Hello from the new directive.'</h4>
               `
})

export class otherDirective {
}
