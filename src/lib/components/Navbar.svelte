<script lang="ts">
    import logoIcon from "$lib/resources/logo_icon.png";
     let routes = [
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Offers", path: "/offers" },
        { name: "About Us", path: "/about_us" },
    ];
    import { onMount } from 'svelte';

    onMount(() => {
        // Add your mobile-specific logic here, e.g., adjusting font sizes
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            // Apply mobile styles
           let doc = document.querySelector('.navbar') as any;
            if(doc){
                doc.style.fontSize = '14px';
            }
        }
    });
</script>

<a href="/"><img style="width: 100px; height: 100px; position: absolute; left:1px; top: 10px;" src={logoIcon} alt="logoIcon"></a>
<div class="navbar">
    {#each routes as route}
        <a href={route.path}>{route.name}</a>
    {/each}
</div>

    
<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 3px;
        background-color: beige;
        margin-left: auto;
    }

    .navbar a {
        color: black;
        text-decoration: none;
        margin: 10px;
    }

    @media (max-width: 768px) {
        .navbar {
            flex-direction: row;
            align-items: flex-start;
            border-radius: 3px;
            background-color: beige;
        }
        .navbar a {
            margin: 5px 0;
        }
    }
   /* .navbar {
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 1px solid black;
    border-radius: 3px;
    width: 100vw;
    background-color: beige;
    font-size: medium;
    box-sizing: border-box; /* Add this line */
    /* } */ 
</style>