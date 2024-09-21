<script>
    import { setUpDB } from "./+server";
</script>

<section>
    <h1>Load Data</h1>
    <button on:click={() => setUpDB()}>Load Data</button>
</section>