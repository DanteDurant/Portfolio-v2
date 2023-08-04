<script>
  let loaded = false;

  function handleImageLoad() {
    loaded = true;
  }

  export let src;
  export let alt;
  export let lazySrc;
</script>

{#if !loaded}
  <img
    src={lazySrc}
    alt="Lazy Placeholder"
    class="lazy-image"
    style="width: 100%; height: auto; filter:blur(6px)"
  />
{/if}

<img
  {src}
  {alt}
  class={loaded ? "image-real" : "image-real hidden"}
  on:load={handleImageLoad}
  style=" width: 100%; height: auto;"
/>
