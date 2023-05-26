<script>
  import { onMount } from "svelte";
  import Button from "../Button.svelte";

  export let isOpen;
  export let onClose;
</script>

<div class={isOpen ? "fullscreen open" : "fullscreen"}>
  <div class="modal-outer">
    <slot />
    <button class="close-button" on:click={onClose}>
      <Button text="Return" />
    </button>
  </div>
</div>

<style>
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
    z-index: 10;
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
</style>
