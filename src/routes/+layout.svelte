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
  @import "../utility/SharedStyles.scss";
  @import "../utility/KeyFrames.css";
  @import "../utility/MediaQueries.scss";
  .app {
    background-color: #1d1d1d;
  }

  aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 13rem;
    overflow: auto;
  }
</style>
