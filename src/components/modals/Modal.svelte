<script lang="ts">
  import { onMount } from "svelte";
  import Button from "../Button.svelte";

  export let isOpen: boolean;
  export let onClose: () => void;
</script>

<div
  class={isOpen ? "fullscreen open" : "fullscreen"}
  on:click|preventDefault|stopPropagation={() => {
    if (isOpen) onClose();
  }}
  on:keydown={(event) => {}}
>
  <div
    class="modal-outer"
    on:click|stopPropagation={() => {}}
    on:keydown={(event) => {}}
  >
    <slot />
    <button class="close-button" on:click={onClose}>
      <Button text="Return" />
    </button>
  </div>
</div>

<style lang="scss">
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .open {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-outer {
    position: relative;
    color: #fff;
    background-color: var(--bg);
    height: calc(100vh - 13rem);
    width: calc(100vw - 26em);
    margin-left: 13rem;
    box-shadow: 1px -2px 31px 2px rgb(0, 0, 0, 0.2);
    -webkit-box-shadow: 1px -2px 31px 2px rgb(00, 0, 0, 0.2);
    -moz-box-shadow: 1px -2px 31px 2px rgb(0, 0, 0, 0.2);
  }

  .close-button {
    position: absolute;
    left: 5rem;
    bottom: 3.5rem;
    background-color: transparent;
    padding: 0;
  }

  @media (max-width: 600px) {
    .modal-outer {
      margin: 5rem;
      height: calc(100dvh - 16rem);
      align-self: end;
      width: 100%;
      margin: 0;
      .close-button {
        left: 53rem;
        bottom: 5rem;
      }
    }
  }
</style>
