<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Tendrils from "../components/features/Tendrils.svelte";
  import { modalState } from "../components/features/store";
</script>

<div class="app">
  {#if !$modalState}
    <Tendrils />
  {/if}

  <aside>
    <Sidebar />
  </aside>

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    min-height: 100vh;
    background-color: #1d1d1d;
  }

  aside {
    position: sticky;
  }

  main {
    /* flex: 1; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  @media (min-width: 3840px) {
    main {
      margin-bottom: -10rem;
    }
  }
</style>
