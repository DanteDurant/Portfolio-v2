<script>
  export let text = "";

  function copyText() {
    navigator.clipboard.writeText(text);
  }
</script>

<main>
  <p class="text">{text}</p>
  <svg
    on:click={copyText}
    on:keydown
    stroke="currentColor"
    fill="none"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="h-4 w-4"
    height="3rem"
    width="3rem"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg
  >
</main>

<style lang="scss">
  main {
    display: flex;
  }
  p {
    font-size: 1.6rem;
  }
  svg {
    margin-left: 1rem;
    color: var(--pri);
    cursor: pointer;
    transition: transform 300ms;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .text {
    width: 19rem;
    background-color: var(--bg-form);
    padding: 0.6rem 1rem;
  }
</style>
