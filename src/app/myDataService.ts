// This is the service.
export class MyDataService {
    names: Array<any>;
    constructor() {
        this.names = ['Aaron', 'Tim', 'Bob'];
    }
    getNames() {
        return this.names;
    }
    returnMyName(): string {
    const name: string = 'Bateman';
    return name;
    }
}
