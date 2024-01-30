export default class ParkingLot{
    code: any;
    capacity: any;
    openHour: any;
    closeHour: any;
    occupiedSpaces: number;
    
    constructor (code: any, capacity: any, openHour: any, closeHour: any, occupiedSpaces : number){
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.occupiedSpaces = occupiedSpaces;
    }

    isOpen(date: Date){
        const hour = date.getHours();
        return (hour >= this.openHour && hour <= this.closeHour);

    }

    isFull(){
        return this.capacity === this.occupiedSpaces;
    }
}