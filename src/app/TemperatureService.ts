// This is the service.
export class TemperatureService {
    cToF(celsius: number):number {
        return celsius*9/5+32;
    }
    fToC(fahrenheit: number): number {
    return (fahrenheit-32)*5/9;
    }
}
