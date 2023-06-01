<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Tendrils from "../components/features/Tendrils.svelte";
</script>

<div class="app">
  <Tendrils />

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
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
  }

  @media (min-width: 3840px) {
    main {
      margin-bottom: -10rem;
    }
  }
</style>
