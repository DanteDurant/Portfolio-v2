<script lang="ts">
  export let src: string;
  export let alt: string;

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage: HTMLElement;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />

<style>
  img {
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>
