import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDataService } from './myDataService';
import { TemperatureService } from './TemperatureService';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],

    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService, TemperatureService],
    template: `<h1>Hello world!  {{title}}</h1>
               <ul><li *ngFor="let name of names">{{name}}</li></ul>
               <p>The temperature of {{initialCelsius}}°C is {{convertedFahrenheit}}°F</p>`,
})
export class App {
    public title = 'This is Angular!';
    public initialCelsius = 6;
    public convertedFahrenheit!: number;
    names: Array<any>;
    constructor(myDataService: MyDataService, temperatureService: TemperatureService) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.names.push(myDataService.returnMyName());
        this.convertedFahrenheit = temperatureService.cToF(this.initialCelsius);
    }
}