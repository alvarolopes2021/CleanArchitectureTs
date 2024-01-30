export default class ExpressAdapter {
    static create (fn: Function){

        return async function (req: any, res: any){
            console.log('called hapu');

            const obj = await fn(req.params, req.payload);
            return obj;
        }
    }
}