<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    import Navbar from '$lib/components/Navbar.svelte';
    import logoIcon from "$lib/resources/logo_icon.png";
    import RoomCard from '$lib/components/RoomCard.svelte';

    let innerWidth = 0
	let innerHeight = 0
    $: orientation_condition = (innerWidth> 735)? true : false;

    onMount(() => {
        
    });


    let routeItems = [
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Offers", path: "/offers" },
        { name: "About Us", path: "/about" },
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
    <RoomCard orientation_condition={orientation_condition} />

    innerHeight={innerHeight}
    innerWidth={innerWidth}
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



