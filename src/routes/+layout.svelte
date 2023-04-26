<script>
  // import './styles.css';
  import Sidebar from "../components/Sidebar.svelte";

  import Tendrils from "../components/Tendrils.svelte";
</script>

<div class="app">
  <Tendrils />
  <aside>
    <Sidebar />
  </aside>

  <main>
    <slot />
  </main>

  <footer />
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
    /* padding: 1rem; */
    width: 100%;
    /* margin: a auto; */
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  /* footer a {
		font-weight: bold;
	} */

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
