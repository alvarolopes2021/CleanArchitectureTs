import ParkingLotRepositorySQL from "../core/infra/ParkingLotRepositorySQL";
import GetParkingLot from "../core/usecase/GetParkingLot";

export default class ParkingLotController {
    
    static async getParkingLot(params: any, body: any) {
        const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
        const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);

        const parkingLot = await getParkingLot.execute(params.code);

        return parkingLot;
    }
}