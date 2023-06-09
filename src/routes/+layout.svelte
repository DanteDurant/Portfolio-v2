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

<style lang="scss">
  .app {
    background-color: #1d1d1d;
  }

  aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 13rem;
    z-index: 99;
  }
</style>
