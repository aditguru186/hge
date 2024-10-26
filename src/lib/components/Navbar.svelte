<script>
    import logoIcon from "$lib/resources/logo_icon.png";
     let routes = [
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Offers", path: "/offers" },
        { name: "About Us", path: "/about_us" },
    ];
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
        flex-direction: row;
        justify-content: space-around;
        border: 1px solid black;
        border-radius: 3px;
        height: 100%;
        width: 100%;
        background-color: beige;
    }
</style>