<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    // import {Button} from '$lib/components/ui/button';
    import Navbar from '$lib/components/Navbar.svelte';
    import logoIcon from "$lib/resources/logo_icon.png";
    import RoomCard from '$lib/components/RoomCard.svelte';
    import {room_display_list} from '../backend/constants.js';
    import Footer from '$lib/components/Footer.svelte';
    import {wp_url_coupon24} from '../backend/constants.js';
    import '$lib/style.css';

    import badathakura1 from '$lib/resources/badathakura1.png';
    import jaijagannath2 from '$lib/resources/jaijagannath2.png';
    import maa3 from '$lib/resources/maa3.png';
    import img2 from '$lib/resources/rooms_images/img2_lq.png';
    import img4 from '$lib/resources/rooms_images/img4_lq.png';
    import img6 from '$lib/resources/rooms_images/img6_lq.png';

    const carouselImages = [
        badathakura1, jaijagannath2, maa3, img2, img4, img6
    ];

    // let importedImages: string[] = [];
    // const loadImagesLisr [] = ;

    // State to track current image index
    let currentImageIndex = 0;

    // Timer to change images
    let carouselInterval: NodeJS.Timeout;

    let isLoading = true;


    //preload images
    // async function loadImages(){
    //     const loadedImages = [];
    //     for(const imagePath of carouselImages){
    //         try{
    //             const imageModule = await import(imagePath);
    //             loadedImages.push(imageModule.default);
    //         }catch(error){
    //             console.error(`Failed to load image: ${imagePath}`, error);
    //         }
    //     }
    //     isLoading = false;
    //     return loadedImages;
    // }

    onMount(async () => {
        // importedImages = await loadImages();
        carouselInterval = setInterval(cycleImages, 2000);

    });

    // Function to cycle through images
    function cycleImages() {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    }

    // Start the carousel when component mounts


    // Clean up interval when component is destroyed
    onDestroy(() => {
        clearInterval(carouselInterval);
    });

    
    let innerWidth = 0
	let innerHeight = 0
    $: orientation_condition = (innerWidth> 1160)? true : false;
    
    let bookNow = () => {
        console.log("Booking Now.");
        window.open(wp_url_coupon24, '_blank');
    }

</script>

<head>
    <title>Home</title>
</head>

<svelte:window bind:innerWidth bind:innerHeight />
<Navbar />
<!-- have to add hero section here, with book now as the first thing that pops up. -->
<div class="hero-section">
    <div class="left-section">
        <h1>Stay near Lord Jagannath!</h1>
        <h5>Book at Hotel Guru Estate and get a chance to experience <b>Ratha Yatra 2025</b> and visit <b>Jagannath Temple</b></h5>
        <br/>
        <p>Click below to proceed.</p>
        <button class="book-now-btn" on:click={ bookNow}>Book Now</button>
    </div>
    <div class="right-section">
        <div class="carousel">
            <!-- {#if isLoading}
                <p>.....Loading images......</p>
            {:else} -->
                {#each carouselImages as src, index (src)}
                    <img 
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        class:active={index === currentImageIndex}
                        class="carousel-image"
                    />
                {/each}
            <!-- {/if} -->
        </div>
    </div>
</div>
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
    .hero-section{
        display:grid;
        justify-content: left;
        width: 100%;
        height: 70vh;
        /* background-image: url('https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); */
        /* background-color: var(--primary-color); */
        background: linear-gradient(135deg, #fef3c8, #ffdab9, #ff8c42);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* grid-template-columns: ; */
        grid-template-columns: repeat(2, 2fr);
        border-radius: 20px;
    }
    .left-section{
        position: absolute;
        display: flex;
        width: 40%;
        height: 70vh;
        align-items: center;
        justify-content: left;
        flex-direction: column;
        padding: 1%;
        margin-top: 10%;
    }
    .left-section h1{
        font-size: 50px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: rgb(74, 45, 111);
    }
    .left-section h5{
        font-size: 20px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: rgb(74, 45, 111);
    }
    .left-section p{
        font-size: 20px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: rgb(74, 45, 111);
    }
    .hero-section .left-section .book-now-btn{
        margin-top: 20px;
        padding: 10px;
        border-radius: 20px;
        border: 2px solid #ffffff;
        background-color: #00D700;
        color: white;
        font-size: 20px;
        cursor: pointer;
        animation: bounce 0.8s infinite ease-in-out;
        z-index: 1;
    }
    .right-section {
        position: relative; 
        /* left: 50%; */
        position: relative;
        right:10px;
        margin-top:20px;
        margin-left: 100%;
        width: 100%;
        min-height:50%;
        overflow: hidden;
        border-radius: 20px;
        border: 2px solid #ffffff;
    }

    .carousel {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .carousel-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .carousel-image.active {
        opacity: 1;
    }
    
    section {
        padding: 1%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    @media(width < 768px){
        .hero-section{
            height: 100vh;
            width:100%;
            display: grid;
            grid-template-rows: 1fr 1fr;
            z-index: 1;
        }
        .left-section{
            width: 100%;
            height: 40vh;
            grid-row:1;
            align-items: center;
        }
        .right-section{
            margin-top: -110px;
            display: flex;
            z-index: 2;
            grid-row:2;
            min-width: 360px;
            margin-left: 20px;
            margin-bottom: 10px;
            /* margin-right:-0px; */
            
        }
        .left-section h1{
            font-size: 30px;
        }
        .left-section h4{
            font-size: 15px;
        }
    }


</style>



