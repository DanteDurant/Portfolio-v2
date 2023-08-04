<script lang="ts">
  import Bounce from "./Bounce.svelte";

  export let text = "";
  export let size = "6rem";
  export let spacing = "0.2rem";
  export let delay = 0;
  export let height = "8.6rem";
  export let styleParent = "";
  export let styleText = "";

  let letters = text.split("");

  let isHovered = false;

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    setTimeout(() => {
      isHovered = false;
    }, 1000);
  }
</script>

<span class="bounce-text">
  <div class="letters-container">
    {#each letters as letter, i}
      {#if letter === " "}
        <span class="space-letter">&nbsp;</span>
      {:else}
        <Bounce
          {size}
          {spacing}
          {height}
          {delay}
          {styleParent}
          {styleText}
          text={letter}
        />
      {/if}
    {/each}
  </div>
</span>

<style lang="scss">
  .space-letter {
    margin-right: 0.3rem;
  }
</style>
