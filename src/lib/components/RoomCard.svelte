<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import logoIcon from "$lib/resources/logo_icon.png";
    import {Button} from '$lib/components/ui/button';
    import * as HoverCard from "$lib/components/ui/hover-card";
    import BookNow from "./BookNow.svelte";
    import SvelteOtp from "@k4ung/svelte-otp";
	import { Modal, Content, Trigger}  from "sv-popup";
        let value: string;
    $: bookNowClicked = false;
    export let orientation_condition;
    export let room_display_list; 
    let bookNow = () => {
        console.log("Booking Now.");
        bookNowClicked = true;
    }
    $: styleForCarousel = orientation_condition ? 'display: flex; width: 100%' : 'width: 100%';    
</script>


{#each room_display_list as room}
<div class="cardStyle" style="flex-direction: row;">
    <div class="carousel-container" style={styleForCarousel}>
        <Carousel.Root class="w-full max-w-xs">
        <Carousel.Content>
            {#each room.images as room_image, i (i)}
            <Carousel.Item>
                <div class="p-1">
                <Card.Root>
                    <Card.Content  class="flex aspect-square items-center justify-center p-6">
                        {#await import(`$lib/resources/rooms_images/${room_image.split('.')[0]}.png`) then {default: src}}
                            <img {src} alt="room_image{i}">
                        {/await}  
                    </Card.Content>
                </Card.Root>
                </div>
            </Carousel.Item>
            {/each}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
        </Carousel.Root>
        <div class="carousel-description">
            <h1 style="font-size: 20px; word-wrap: break-word;"> {room.name}</h1>
            <br>
            <p style="font-size: 10px;"> {room.description}</p>
            <br>
            <div style="display: flex; align-items: center;">
                <h2 style="font-size: 15px; text-decoration: line-through;">₹{room.initial_price}  </h2>
                <h2 style="font-size: 20px; color: red;"> ₹{room.updated_price}  </h2>
            </div>
            <Button on:click={bookNow} style="width: 50%; font-size: 80%;">Book Now</Button>
            {#if bookNowClicked}
                <BookNow/>
            {/if}
            
        </div>
        
    </div>
</div>
{/each}

<style>
    .cardStyle{
        padding: 1%;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        height: 50%;
        width: 80%;
        background-color: hsl(48, 96%, 89%);
        margin: auto;
    }
    .cardStyle > div {
        margin: 0 10px;
    }
    .carousel-description{
        display: flex;
        flex-direction: column;
        /* justify-content: left; */
        /* align-items: center; */
        padding : 7%;
    }    
</style>