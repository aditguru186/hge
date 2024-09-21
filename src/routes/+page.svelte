<script >
    import { onMount } from 'svelte';
    // import BaseService  from '../backend/base_service.tsx'; // some error in importing tsx in svelte kit

    onMount(async () => {
        console.log("+page.svelte onMount")
    })

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/load_data">Load Data into DB, perform only once.</a>

