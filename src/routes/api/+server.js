import { 
    ROOM_PRICE_SUPER_DELUXE_DOUBLE,
    ROOM_PRICE_DELUXE_DOUBLE,
    ROOM_PRICE_DELUXE_TRIPLE,
    ROOM_PRICE_SUPER_DELUXE_TRIPLE,
    POCKETBASE_EMAIL,
    POCKETBASE_PASSWORD
} from '$env/static/private';
import RoomTypes from "../../backend/constants.js";
// import { json } from '@sveltejs/kit';

const seedData_rooms = [
    {
        "id": 1,
        "room_number": 101,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 2,
        "room_number": 102,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 3,
        "room_number": 103,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 4,
        "room_number": 104,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 5,
        "room_number": 105,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 6,
        "room_number": 106,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 7,
        "room_number": 108,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 8,
        "room_number": 109,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 9,
        "room_number": 110,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 10,
        "room_number": 111,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 11,
        "room_number": 112,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 12,
        "room_number": 113,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 13,
        "room_number": 114,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 14,
        "room_number": 115,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 15,
        "room_number": 116,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 16,
        "room_number": 117,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 17,
        "room_number": 119,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 18,
        "room_number": 120,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 19,
        "room_number": 121,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 20,
        "room_number": 122,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 21,
        "room_number": 2,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "id": 22,
        "room_number": 3,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_DOUBLE
    },
    {
        "room_number": 201,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 23,
        "room_number": 202,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 24,
        "room_number": 203,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 25,
        "room_number": 206,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 26,
        "room_number": 207,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 27,
        "room_number": 209,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 28,
        "room_number": 302,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 29,
        "room_number": 303,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 30,
        "room_number": 304,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 31,
        "room_number": 309,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 32,
        "room_number": 310,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 33,
        "room_number": 311,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 34,
        "room_number": 312,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 35,
        "room_number": 314,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 36,
        "room_number": 315,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 37,
        "room_number": 301,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_DOUBLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_DOUBLE
    },
    {
        "id": 38,
        "room_number": 204,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 39,
        "room_number": 208,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 40,
        "room_number": 210,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 41,
        "room_number": 211,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 42,
        "room_number": 212,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 43,
        "room_number": 213,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 44,
        "room_number": 214,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 45,
        "room_number": 215,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 46,
        "room_number": 305,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 47,
        "room_number": 306,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 48,
        "room_number": 307,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 49,
        "room_number": 308,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 50,
        "room_number": 313,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 51,
        "room_number": 317,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 52,
        "room_number": 318,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_DELUXE_TRIPLE
    },
    {
        "id": 53,
        "room_number": 1,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_TRIPLE
    },
    {
        "id": 54,
        "room_number": 107,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_TRIPLE
    },
    {
        "id": 55,
        "room_number": 108,
        "ac": true,
        "images": "default.png",
        "category": RoomTypes.SUPER_DELUXE_TRIPLE_BED,
        "availability": true,
        "createdAt": "2023-02-20T14:30:00Z",
        "updatedAt": "2023-02-20T14:30:00Z",
        "price": ROOM_PRICE_SUPER_DELUXE_TRIPLE
    }

];
export async function GET() {
    return new Response(JSON.stringify({
        rooms: seedData_rooms,
        POCKETBASE_EMAIL: POCKETBASE_EMAIL,
        POCKETBASE_PASSWORD: POCKETBASE_PASSWORD
    }), {
        status: 200
    });

}