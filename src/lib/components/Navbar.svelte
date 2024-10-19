<script>
     let routes = [
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Offers", path: "/offers" },
        { name: "About Us", path: "/about" },
    ];
</script>

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
        height: 20%;
        width: 100%;
        background-color: beige;
    }
</style>