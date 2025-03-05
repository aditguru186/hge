<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import {Button} from '$lib/components/ui/button';
    import BookNow from "./BookNow.svelte";
    import {wp_url_coupon24} from "../../backend/constants.js";
    import { onMount } from 'svelte';
        
    let value: string;
    $: bookNowClicked = false;
    export let orientation_condition;
    export let room_display_list; 
    let bookNow = () => {
        console.log("Booking Now.");
        window.open(wp_url_coupon24, '_blank');
        bookNowClicked = true;
    }
    $: styleForCarousel = orientation_condition ? 'display: flex; width: 100%' : 'width: 100%';    

    let colorIndex = 0;
  let colors = ['#FFC800', '#F9F5E3', '#F8B9AA'];

  onMount(() => {
    //@ts-ignore
    const intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500);

    return () => clearInterval(intervalId);
  });
</script>


{#each room_display_list as room}
<div class="cardStyle" style="flex-direction: row;">
    <div class="carousel-container" style={styleForCarousel}>
        <Carousel.Root class="w-full max-w-xs">
        <Carousel.Content style="width: 100%">
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
            <Button on:click={bookNow} style="background-color: {colors[colorIndex]}; width: 50%; font-size: 80%;">Book Now</Button>

<!--             Adding BookNow Component
            {#if bookNowClicked}
                <BookNow/>
            {/if}
             -->
        </div>
        
    </div>
</div>
{/each}

<style>
    .cardStyle{
        padding: 5%; 
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        height: 50%;
        width: 100%;
        /* background-color: #fef3c8; */
        background: linear-gradient(135deg, #fef3c8, #ffd700, #ffa500);
        margin: 10px;
    }
    .cardStyle > div {
        margin: 0 10px;
    }
    .carousel-description{
        display: flex;
        flex-direction: column;
        justify-content: left;
        /* align-items: center; */
        padding : 7%;
    }    
    @media (width < 768px) {
        .cardStyle{
            max-width: 430px;
        }
    }
   
</style>