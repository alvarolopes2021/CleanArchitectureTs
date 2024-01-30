import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";
import database from "./database/database";

export default class ParkingLotRepositorySQL implements ParkingLotRepository {

    async getParkingLot(code: string): Promise<ParkingLot | undefined> {
        const parkingLotData =
            await database.oneOrNone("select *, (select count(*) from example.parked_car pc where pc.code = pl.code) as occupied_spaces from example.parking_lot where code = $1", [code]);

        return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.openHour, parkingLotData.closeHour, parkingLotData.occupied_spaces);
    }

    async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
        const parkingLotData =
            await database.oneOrNone("insert into example.parked_car (code, plate, date) values ($1, $2, $3)", [code, plate, date]);
    }

}