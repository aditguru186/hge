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
<!-- have to add hero section here, with book now as the first thing that pops up. -->
{#if orientation_condition}
<section>
    <RoomCard bind:orientation_condition={orientation_condition} room_display_list={room_display_list}/>
</section>
{:else}
<section style="display: flex; flex-direction: column; width:max-content">
    <RoomCard bind:orientation_condition={orientation_condition} room_display_list={room_display_list}/>
</section>
{/if}
<div class="footer-fixed">
    <Footer/>
</div>

<a class="whatsapp-floater" href="https://wa.me/919861133360" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp-icon">
</a>


<style>
    section {
        padding: 1%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin: 1%; */
    }
    .footer-fixed{
        bottom:0;
        position: relative;
        width:100%;
    }

    .whatsapp-floater{
        position:fixed;
        width:100px;
        height:100px;
        bottom:40px;
        left :10px;
        /* z-index:100; */
        animation: bounce 2s infinite ease-in-out;
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0); /* Start and end at the original position */
        }
        40% {
            transform: translateY(-20px); /* Move up */
        }
        60% {
            transform: translateY(-10px);/*move a little less up*/
        }
    }


</style>



