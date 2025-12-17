import { Component } from '@angular/core';
import { NewDirective }  from './newDirective';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewDirective],
    template: `<h1>Hello world!  {{title}}</h1>
               <second-directive [firstName]="author"></second-directive>`
})
export class App {
    title = 'This is Angular! Hello!';
    author = "Joyce.";
}