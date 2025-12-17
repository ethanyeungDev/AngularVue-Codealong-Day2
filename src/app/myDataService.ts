// This is the service.
export class MyDataService {
    names: Array<any>;
    constructor() {
        this.names = ['Aaron', 'Tim', 'Bob'];
    }
    getNames() {
        return this.names;
    }
}