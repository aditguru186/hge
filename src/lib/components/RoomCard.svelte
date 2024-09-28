<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import logoIcon from "$lib/resources/logo_icon.png";
    import {Button} from '$lib/components/ui/button';

        $:styleForCarousel = "display : flex; width:100%";
    export let orientation_condition;
    let bookNow = () => {

        console.log("Booking Now.");
    }
    if(!orientation_condition){
        console.log(orientation_condition);
        styleForCarousel="width:100%;";
    }
</script>

<div class="cardStyle" style="flex-direction: row;">
    <div class="carousel-container" style={styleForCarousel}>
        <Carousel.Root class="w-full max-w-xs">
        <Carousel.Content>
            {#each Array(3) as _, i (i)}
            <Carousel.Item>
                <div class="p-1">
                <Card.Root>
                    <Card.Content  class="flex aspect-square items-center justify-center p-6">
                        <img src={logoIcon} alt="log">
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
            <h1 style="font-size: 20px;"> Super Deluxe Double Bed</h1>
            <br>
            <p> Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV</p>
            <Button on:click={bookNow}>Book Now</Button>
        </div>
        
    </div>
</div>

<style>
    .cardStyle{
        padding: 3%;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        height: 50%;
        width: 50%;
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