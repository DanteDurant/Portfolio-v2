<script>
  import { onMount, onDestroy } from "svelte";
  import initOciliator from "./Tendrils";

  let canvas;

  onMount(() => {
    initOciliator(false, canvas);
    return () => {
      initOciliator(true, canvas);
    };
  });
</script>

<canvas
  bind:this={canvas}
  id="canvas"
  style="position: fixed; top: 0; left: 0;"
/>
