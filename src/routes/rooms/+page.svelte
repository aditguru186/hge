<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import RoomTypes  from "../../backend/constants.js";  
    import { room_display_list } from "../../backend/constants.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { writable } from 'svelte/store';

    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    interface RoomDisplay {
        name: string;
        initial_price: number;
        updated_price: number;
        description: string;
        images: string[];
    }
 
    let showRoomName = RoomTypes.SUPER_DELUXE_DOUBLE_BED;

    // @ts-ignore
    const roomOnDisplay: Writeable<RoomDisplay> = writable({
        name: RoomTypes.SUPER_DELUXE_DOUBLE_BED,
        initial_price: 4000,
        updated_price: 3000,
        description: "Experience luxury at our Super Deluxe Double Bed Room, featuring king-size bed, marble bathroom, AC, Wi-Fi, LED TV",
        images: ["img1_lq.png", "img2_lq.png", "img3_lq.png"]
    });

    function getRoomOnDisplay(showRoomName:any):{} {
        console.log(showRoomName);
         console.log(room_display_list);
         let x= room_display_list.find(room => room.name === showRoomName);
        console.log(x);
        if(x) return x
        else return {};
    }

    let onSelect = (event: any) => {
    showRoomName = event.target.innerText;
    console.log(event.target.innerText);
    roomOnDisplay.set(getRoomOnDisplay(showRoomName));

    };

</script>

<Navbar/>

<div class="selector"> 
     <h1>Select type of rooms:</h1>

    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <Button variant="outline" class="w-full">{showRoomName}</Button>
        </DropdownMenu.Trigger>
        
        <DropdownMenu.Content>
           {#each Object.values(RoomTypes) as roomType}
            <DropdownMenu.Item>
                <Button variant="outline" class="w-full" on:click={onSelect}>{roomType}</Button>
            </DropdownMenu.Item>
        {/each}
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</div>
<div class="container">
   <Carousel.Root class="rootContainer">
        <Carousel.Content>
            {#if $roomOnDisplay && $roomOnDisplay.images instanceof Array}
                {#each $roomOnDisplay.images as room_image, i (i)}
                    <Carousel.Item>
                        <div class="p-1">
                        <Card.Root>
                            <Card.Content  class="flex aspect-square items-center justify-center p-6">
                                {#await import(`$lib/resources/rooms_images/${room_image.split('.')[0]}.${room_image.split('.')[1]}`) then {default: src}}
                                    <img {src} alt="room_image{i}">
                                {/await}  
                            </Card.Content>
                        </Card.Root>
                        </div>
                    </Carousel.Item>
                {/each}
            {/if}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
        </Carousel.Root>
</div>


<div class="footer-fixed">
    <Footer/>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 2%;
        padding-bottom: 2%;
        width: 100%;
        height: 100%;
        background-color: rgb(254, 243, 200);
        border-radius: 20px;
        margin: auto;
    }
    .rootContainer{
        width: 50%;
        height: 50%;
        justify-content: center;
        align-items: center;
        padding: 2%;
        border-radius: 20px;

    }
    .footer-fixed{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .selector{
        text-align: center;
    }
    
</style>