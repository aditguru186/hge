<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    import Menubar1 from '$lib/components/Menubar1.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import logoIcon from "$lib/resources/logo_icon.png";
    onMount(async () => {
        console.log("+page.svelte onMount")
    })
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
    <img src={logoIcon} alt="logo">    
</head>
<section>
    <Navbar routes= {routeItems} />
    <div class="cardStyle">
            <Carousel.Root class="w-full max-w-xs">
            <Carousel.Content>
                {#each Array(5) as _, i (i)}
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
            <Button variant="default" on:click={bookNow}>Book Now</Button>
    </div>
</section>

<style>
    section {
        
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cardStyle{
        padding: 3%;
        /* display: inline-block; */
        flex-direction: column;
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

</style>



