const dotenv = await import('dotenv')
dotenv.config();
// const __dirname = "./src/backend";
dotenv.config({ path: `${__dirname}/stackFile.env` });
import PocketBase from 'pocketbase';
import { POCKETBASE_EMAIL, POCKETBASE_PASSWORD } from '$env/static/private';
import { seedData_rooms } from "./seedData.js";


const roomPriceDouble = process.env.ROOM_PRICE_DELUXE_DOUBLE;

let pb:PocketBase;
let setUpDB = async () => {
    // pb = loadDB();
    pb = new PocketBase('http://pocketbase.hotelguruestate.com');
    await pb.admins.authWithPassword(POCKETBASE_EMAIL, POCKETBASE_PASSWORD);

    //clean the DB
    await cleanUpDB(pb, 'rooms');

    //add the seed data
    if(pb != null) {
        seedData_rooms.map(async (room) => {
            await pb.collection('rooms').create(room);
        })
    }
    
}

let list_rooms = async (pb: PocketBase, table: string) => {
    if(pb) {
        return pb.collection(table).getFullList();
    }
}
let cleanUpDB = async (pb: PocketBase, table: string) => {
    list_rooms(pb, table).then(async (data) => {
        if(data && data.length>0){
            await pb.collection(table).delete(data[0].id);
        }
    })

}

await setUpDB();


export { }