<script lang="ts">
      import * as Menubar from "$lib/components/ui/menubar";
      export let menuItems;
</script>
<section>
    <Menubar.Root>
    <Menubar.Menu>
        <Menubar.Trigger>Options</Menubar.Trigger>
        <Menubar.Content>
        {#each menuItems as item}
            <Menubar.Item><a href="/{item.href}">{item.name}</a></Menubar.Item>
            <Menubar.Separator />
        {/each}
        </Menubar.Content>
    </Menubar.Menu>
    </Menubar.Root>
</section>