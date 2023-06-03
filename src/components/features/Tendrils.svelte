<script>
  import { onMount, onDestroy } from "svelte";
  import initOciliator from "./Tendrils";
  import { modalState } from "../../components/features/store";

  $: modalState;

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
  style="top: 0; left: 0; position: fixed;  "
  class={$modalState ? "hide" : "show"}
/>

<style>
  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
  }
</style>
