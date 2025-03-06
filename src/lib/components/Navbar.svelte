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

<a href="/"><img class="logo_img" src={logoIcon} alt="logoIcon"></a>
<div class="navbar">
    {#each routes as route}
        <a href={route.path}>{route.name}</a>
    {/each}
</div>

    
<style>
    .navbar {
        display: flex;
        justify-content: center;
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

    .logo_img{
        margin-left: -20px;
        width: 100px; height: 100px; position: absolute;;
    }

    @media (width < 768px) {
        .navbar {
            /* flex-direction: column; */
            justify-content: center;
            width:120%;
            /* max-width: 430px; */
        }
    }

</style>