<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    import Navbar from '$lib/components/Navbar.svelte';
    import logoIcon from "$lib/resources/logo_icon.png";
    import RoomCard from '$lib/components/RoomCard.svelte';
    import RoomTypes  from '../backend/constants.js';

    let innerWidth = 0
	let innerHeight = 0
    $: orientation_condition = (innerWidth> 1000)? true : false; // still not working properly.

    let styleForCarousel:string;
    $:{
        if(orientation_condition){
            styleForCarousel = "display : flex; width:100%;";
        }
        else{
            styleForCarousel = "width:100%";
        }
    }


    let routeItems = [
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Offers", path: "/offers" },
        { name: "About Us", path: "/about" },
    ];

    let room_display_list = [
        {
            name: RoomTypes.SUPER_DELUXE_DOUBLE_BED,
            price: process.env.ROOM_PRICE_SUPER_DELUXE_DOUBLE,// coming as undefined, try importing the environment variable
            description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
            images: ["img1_lq.png","img2_lq.png","img3_lq.png"]
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

<section>
    <Navbar routes= {routeItems} />
    <RoomCard orientation_condition={orientation_condition} room_display_list={room_display_list}/>

    innerHeight:{innerHeight}
innerwidth:{innerWidth}
orientation_condition={orientation_condition}
</section>

<style>
    section {
        padding: 0.5%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    

</style>



