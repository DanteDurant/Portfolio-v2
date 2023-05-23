<!-- Modal.svelte -->
<script>
  import Button from "../Button.svelte";

  export let isOpen;
  export let onClose;
</script>

<div class="fullscreen" class:open={isOpen}>
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2),
      0 0 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);
  }

  .close-button {
    position: absolute;
    right: 5rem;
    bottom: 3.5rem;
    background-color: transparent;
    padding: 0;
  }
</style>
