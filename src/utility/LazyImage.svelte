<script>
  import { onMount } from "svelte";

  let loaded = false;

  function handleImageLoad() {
    loaded = true;
  }

  export let src;
  export let alt;
  export let lazySrc;

  // Preload the main image when the component mounts
  onMount(() => {
    const img = new Image();
    img.src = src;
    img.onload = handleImageLoad;
  });
</script>

{#if !loaded}
  <img
    src={lazySrc}
    alt="Lazy Placeholder"
    class="lazy-image"
    style="width: 100%; height: auto; filter: blur(6px);"
  />
{/if}

<img
  {src}
  {alt}
  class={loaded ? "image-real" : "image-real hidden"}
  style="width: 100%; height: auto;"
/>
