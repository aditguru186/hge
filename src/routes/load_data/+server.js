import PocketBase from 'pocketbase';
// import { POCKETBASE_EMAIL, POCKETBASE_PASSWORD } from '$env/static/private';

// const roomPriceDouble = process.env.ROOM_PRICE_DELUXE_DOUBLE;

/**
 * @type {PocketBase}
 */
let pb;     
/**
 * @type {Array<{id: number, 
    * room_number: number, 
    * ac: boolean, 
    * category: string, 
    * availability: boolean, 
    * createdAt: string, 
    * updatedAt: string, 
    * price: number}>}
 */
let rooms;    
export  async function _setUpDB () {
    pb = new PocketBase('http://pocketbase.hotelguruestate.com/_/');
    let response = await fetch("/api");
    const seedDataBody = await response.json();
    rooms = seedDataBody.rooms;
    try{
        console.log(seedDataBody.POCKETBASE_EMAIL, seedDataBody.POCKETBASE_PASSWORD);
        // const authData = await pb.collection('users').authWithPassword(seedDataBody.POCKETBASE_EMAIL, seedDataBody.POCKETBASE_PASSWORD);
        const authData = await pb.admins.authWithPassword(seedDataBody.POCKETBASE_EMAIL, seedDataBody.POCKETBASE_PASSWORD);
    //    const resp1 = await pb.collection('room').create({
    //         "id": 1,
    //         "room_number": 101,
    //         "ac": true,
    //         "category": "SUPER_DELUXE_DOUBLE_BED",
    //         "availability": true,
    //         "createdAt": "2023-02-20T14:30:00Z",
    //         "updatedAt": "2023-02-20T14:30:00Z",
    //         "price": 2000
    //     });
    //     console.log("Authed with email : ",seedDataBody.POCKETBASE_EMAIL);
        console.log(authData);
    }
    catch(err){
        console.log("Error : ",err);
    }
}

export {
}

