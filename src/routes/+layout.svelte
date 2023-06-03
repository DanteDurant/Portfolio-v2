<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Tendrils from "../components/features/Tendrils.svelte";
  import SharedStyles from "../utility/SharedStyles.scss";
  import KeyFrames from "../utility/KeyFrames.css";
  import MediaQueries from "../utility/MediaQueries.scss";
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
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 13rem;
    overflow: auto;
  }
</style>
