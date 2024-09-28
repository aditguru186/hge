<script>
    export let routes;
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
        border-radius: 10px;
        height: 20%;
    }
</style>