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
    background-color: #1d1d1d;
  }

  aside {
    position: sticky;
  }

  @media (min-width: 3840px) {
    main {
      margin-bottom: -10rem;
    }
  }
</style>
