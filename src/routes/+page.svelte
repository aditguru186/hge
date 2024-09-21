<script lang="ts">
    import { onMount } from 'svelte';
    // import BaseService  from '../backend/base_service.tsx'; // some error in importing tsx in svelte kit

    onMount(async () => {
        console.log("+page.svelte onMount")
    })

</script>

<section>
    <a href="/load_data">Load Data into DB, perform only once.</a>
</section>



