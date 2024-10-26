<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    import Navbar from '$lib/components/Navbar.svelte';
    import logoIcon from "$lib/resources/logo_icon.png";
    import RoomCard from '$lib/components/RoomCard.svelte';
    import {room_display_list} from '../backend/constants.js';
    import Footer from '$lib/components/Footer.svelte';

    
    let innerWidth = 0
	let innerHeight = 0
    $: orientation_condition = (innerWidth> 1160)? true : false;
    
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
<div class="footer-fixed">
    <Footer/>
</div>


<style>
    section {
        padding: 0.1%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1%;
    }
    /* .footer-fixed{
        bottom:0;
        position: relative;
        width:100%;
    } */


</style>



