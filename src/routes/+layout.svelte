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
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }
</style>
