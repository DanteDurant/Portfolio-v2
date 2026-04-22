<!-- TextBounce.svelte -->

<script>
    import Bounce from "./Bounce.svelte";

    export let text;
    export let delay;
</script>

<Bounce {delay}>
    {text}
</Bounce>
