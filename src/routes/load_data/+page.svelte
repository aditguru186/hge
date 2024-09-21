<script>
    import {_setUpDB } from "./+server.js";
</script>

<section>
    <h1>Load Data</h1>
    <button on:click={() => _setUpDB()}>Load Data</button>
</section>