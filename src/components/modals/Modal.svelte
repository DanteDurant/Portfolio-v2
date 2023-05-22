<!-- Modal.svelte -->
<script>
  export let isOpen;
  export let onClose;
</script>

<div class="modal" class:open={isOpen}>
  <div class="modal-content center-parent">
    <slot />
    <button class="close-button" on:click={onClose}>Close</button>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: rgba(0, 0, 0, 0.7);
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

  .modal-content {
    color: #fff;
    background-color: var(--bg);
    /* padding: 20px; */
    height: calc(100vh - 26rem);
    width: calc(100vw - 26rem);
    margin-left: calc(13rem + (13rem * 0.618));
    /* box-shadow: 40px 40px 40px 40px rgba(0, 0, 0, 0.5); */
  }

  .close-button {
    margin-top: 10px;
  }
</style>
