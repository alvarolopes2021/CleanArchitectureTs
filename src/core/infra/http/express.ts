import Express from "express";
import ExpressAdapter from "../../../adapter/ExpressAdapter";
import ParkingLotController from "../../../controller/ParkingLotController";

const app = Express();

// THIS IS CHAINED/LINKED/COUPLED -> strong link

/*
app.get("/parkingLots/:code", async (req, res) => {    
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);

    const parkingLot = await getParkingLot.execute(req.params.code);
    res.json(parkingLot);

});
*/

app.get("/parkingLots/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);