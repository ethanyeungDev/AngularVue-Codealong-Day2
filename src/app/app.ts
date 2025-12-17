import { Component } from '@angular/core';
import { NewDirective }  from './newDirective';
import { otherDirective }  from './newDirective';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewDirective],
  template: `<h1>Hello world!  {{title}}</h1><second-directive></second-directive>`
})
export class App {
    public title = 'This is Angular!';
}