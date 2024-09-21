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
    * images: string, 
    * category: string, 
    * availability: boolean, 
    * createdAt: string, 
    * updatedAt: string, 
    * price: number}>}
 */
let rooms;    
let setUpDB = async () => {
    pb = new PocketBase('http://pocketbase.hotelguruestate.com');
    let response = await fetch("/api");
    const seedDataBody = await response.json();
    rooms = seedDataBody.rooms;
    try{
        await pb.admins.authWithPassword(seedDataBody.POCKETBASE_EMAIL, seedDataBody.POCKETBASE_PASSWORD);
        await pb.collection('room').create({
            "id": 1,
            "room_number": 101,
            "ac": true,
            "category": "SUPER_DELUXE_DOUBLE_BED",

            // "images": "default.png",
            // "availability": true,
            // "createdAt": "2023-02-20T14:30:00Z",
            // "updatedAt": "2023-02-20T14:30:00Z",
            // "price": 2000
        });
        console.log("Authed with email : ",seedDataBody.POCKETBASE_EMAIL);
    }
    catch(err){
        console.log("Error : ",err);
    }
}

export {
    setUpDB
}

