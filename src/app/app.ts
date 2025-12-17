import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template:   
      `<h1>This is the header</h1>
      <nav>
        <a href="/page-a"> A </a> | <a href="/page-b"> B </a>
      </nav>
      <!-- Where router should display a view -->
      <router-outlet></router-outlet>`
})
export class App { }