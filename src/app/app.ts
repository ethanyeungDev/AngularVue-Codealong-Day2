import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumFormatterPipe } from './app.phoneNumFormatter';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, PhoneNumFormatterPipe],
    template: `<p>{{phoneNum | phoneNumFormatter }}</p>`
})

export class App {
    phoneNum: number;
    constructor() {
        this.phoneNum = 6049222222;
    }
}