import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkingLots = [
        {
            code: 'shopping',
            capacity: 5,
            openHource: 8,
            closeHour: 22,
            occupiedSpaces: 0
        }
    ];

    parkedCars: Array<object> = [];

    async getParkingLot(code: string): Promise<ParkingLot | undefined> {
        
        // isto aqui vem do banco, txt, socket etc
        const parkingLotData = await Promise.resolve(this.parkingLots.find(parkingLot => parkingLot.code === code));

        parkingLotData!.occupiedSpaces = this.parkedCars.length;

        const parkingLot = ParkingLotAdapter.create(parkingLotData!.code, parkingLotData!.capacity, parkingLotData!.openHource, parkingLotData!.closeHour, parkingLotData!.occupiedSpaces);

        return Promise.resolve(parkingLot);
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({ code, plate, date });
    }
}