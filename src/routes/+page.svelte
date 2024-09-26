<script lang="ts">
    import { onMount } from 'svelte';
    import {Button} from '$lib/components/ui/button';
    // import BaseService  from '../backend/base_service.tsx'; // some error in importing tsx in svelte kit
      import * as Alert from "$lib/components/ui/alert";

    onMount(async () => {
        console.log("+page.svelte onMount")
    })

    let loadData = async () => {
        console.log("loadData");
    }

</script>

<section>
    <a href="/load_data">Load Data into DB, perform only once.</a>
    <Button >Load Data</Button>
     <Alert.Root>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>
            You can add components to your app using the cli.
        </Alert.Description>
    </Alert.Root>
</section>



