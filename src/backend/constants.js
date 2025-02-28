// Constants

const RoomTypes = {
    SUPER_DELUXE_DOUBLE_BED: "SUPER DELUXE DOUBLE BED",
    DELUXE_DOUBLE_BED: "DELUXE DOUBLE BED",
    SUPER_DELUXE_TRIPLE_BED: "SUPER DELUXE TRIPLE BED",
    DELUXE_TRIPLE_BED: "DELUXE TRIPLE BED"
};
export const wp_url_coupon24 = "https://wa.me/919861133360/?text=I%20want%20to%20book%20a%20room.%20Use%20coupon%20code%20%22Code24%22";
export let room_display_list = [
    {
        name: RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        initial_price: 4500,
        updated_price: 4200,
        // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
        description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
        images: ["img1_lq.png", "img2_lq.png", "img3_lq.png"]
    },
    {
        name: RoomTypes.SUPER_DELUXE_TRIPLE_BED,
        initial_price: 5000,
        updated_price: 4500,
        // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
        description: "Experience luxury at our Super Deluxe Tripple Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
        images: ["img4_lq.png", "img5_lq.png", "img6_lq.png", "img7_lq.png", "img8_lq.png"]
    },
    {
        name: RoomTypes.DELUXE_DOUBLE_BED,
        initial_price: 3500,
        updated_price: 2900,
        // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
        description: "Experience luxury at our  Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
        images: ["img9_lq.png", "img10_lq.png", "img11_lq.png"]
    },
    {
        name: RoomTypes.DELUXE_TRIPLE_BED,
        initial_price: 3800,
        updated_price: 3000,
        // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
        description: "Experience luxury at our  Deluxe Triple Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
        images: ["img12_lq.png", "img13_lq.png", "img14_lq.png", "img15_lq.png"]
    }
];

export default RoomTypes;
// export default ROOM_TYPES;


