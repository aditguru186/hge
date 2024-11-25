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
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 1px solid black;
    border-radius: 3px;
    width: 100%;
    background-color: beige;
    font-size: medium;
    box-sizing: border-box; /* Add this line */
}
</style>