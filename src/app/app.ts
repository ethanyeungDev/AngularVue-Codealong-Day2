import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDataService } from './myDataService';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],

    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService],
    template: `<h1>Hello world!  {{title}}</h1>
               <ul><li *ngFor="let name of names">{{name}}</li></ul>`
})
export class App {
    public title = 'This is Angular!';
    names: Array<any>;

    // Create instance of 'MyDataService' right in the constructor header.
    constructor(@Inject(MyDataService) myDataService: MyDataService) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.names.push(myDataService.returnMyName());
    }
}