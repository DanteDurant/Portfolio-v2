<script lang="ts">
  import type { TransitionConfig } from "svelte/types/runtime/transition";
  import { onMount } from "svelte";
  import Logo from "../lib/images/logo.png";

  function popUp(
    node: HTMLElement,
    { duration = 1000, delay = 0 }: Partial<TransitionConfig> = {}
  ) {
    return {
      duration,
      delay,
      css: (t: number) => `
        opacity: ${t < 0.2 ? t / 0.2 : 1};
        transform: ${
          t < 0.3
            ? `scaleY(${1 + (0.25 * t) / 0.3}) scaleX(${1 - (0.25 * t) / 0.3})`
            : t < 0.4
            ? `scaleY(${1.25 - (0.5 * (t - 0.3)) / 0.1}) scaleX(${
                0.75 + (0.5 * (t - 0.3)) / 0.1
              })`
            : t < 0.5
            ? `scaleY(${0.75 + (0.4 * (t - 0.4)) / 0.1}) scaleX(${
                1.25 - (0.4 * (t - 0.4)) / 0.1
              })`
            : t < 0.65
            ? `scaleY(${1.15 - (0.2 * (t - 0.5)) / 0.15}) scaleX(${
                0.85 + (0.2 * (t - 0.5)) / 0.15
              })`
            : t < 0.75
            ? `scaleY(${0.95 + (0.1 * (t - 0.65)) / 0.1}) scaleX(${
                1.05 - (0.1 * (t - 0.65)) / 0.1
              })`
            : `scaleY(${1.05 - (0.05 * (t - 0.75)) / 0.25}) scaleX(${
                0.95 + (0.05 * (t - 0.75)) / 0.25
              })`
        };
      `,
    };
  }

  let showSvg = false;

  export let delay: number = 0;

  onMount(() => {
    setTimeout(() => {
      showSvg = true;
    }, delay);
  });
</script>

{#if showSvg}
  <img in:popUp={{ delay }} src={Logo} alt="Dante's logo" />
{/if}

<style>
  img {
    width: 7.2rem;
  }
</style>
