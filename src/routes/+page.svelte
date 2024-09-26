<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    import Menubar1 from '$lib/components/Menubar1.svelte';

    onMount(async () => {
        console.log("+page.svelte onMount")
    })
    let menuItems = [
        { name: "Home", href: "/" },
        { name: "Rooms", href: "/rooms" },
        { name: "Offers", href: "/offers" },
        { name: "About Us", href: "/about" },
    ];

    let loadData = async () => {
        console.log("loadData");
    }

</script>

<section>
    <!-- <Button on:click={loadData}>Load Data</Button> -->
    <Menubar1 menuItems={menuItems}/>
    
</section>



