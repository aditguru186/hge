<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    import Navbar from '$lib/components/Navbar.svelte';
    import logoIcon from "$lib/resources/logo_icon.png";
    import RoomCard from '$lib/components/RoomCard.svelte';
    import RoomTypes  from '../backend/constants.js';
    import Footer from '$lib/components/Footer.svelte';

    
    let innerWidth = 0
	let innerHeight = 0
    $: orientation_condition = (innerWidth> 1160)? true : false;
    

    let room_display_list = [
        {
            name: RoomTypes.SUPER_DELUXE_DOUBLE_BED,
            initial_price: 4000,
            updateed_price : 3000,
            // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
            description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
            images: ["img1_lq.png","img2_lq.png","img3_lq.png"]
        },
        {
            name: RoomTypes.SUPER_DELUXE_TRIPLE_BED,
            initial_price:5000,
            updateed_price : 4000,
            // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
            description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
            images: ["img4_lq.png","img5_lq.png","img6_lq.png","img7_lq.png","img8_lq.png"]
        },
        {
            name: RoomTypes.DELUXE_DOUBLE_BED,
            initial_price:3000,
            updateed_price : 2000,
            // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
            description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
            images: ["img9_lq.png","img10_lq.png","img11_lq.png"]
        },
        {
            name: RoomTypes.SUPER_DELUXE_TRIPLE_BED,
            initial_price:3500,
            updateed_price : 2500,
            // price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
            description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
            images: ["img12_lq.png","img13_lq.png","img14_lq.png","img15_lq.png"]
        }
    ];

    let bookNow = () => {
        console.log("Booking Now.");
    }


</script>

<head>
    <title>Home</title>
</head>

<svelte:window bind:innerWidth bind:innerHeight />
<Navbar />
<section>
    <RoomCard bind:orientation_condition={orientation_condition} room_display_list={room_display_list}/>
</section>
<Footer/>

<style>
    section {
        padding: 0.1%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1%;
    }


</style>



