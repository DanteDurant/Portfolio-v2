<script>
  import Logo from "$lib/images/Logo.svelte";
  import LinkedIn from "$lib/images/LinkedIn.svelte";
  import Github from "$lib/images/Github.svelte";
  import YouTube from "$lib/images/YouTube.svelte";

  let items = [
    { label: "About", link: "/item1" },
    { label: "My Skills", link: "/item2" },
    { label: "Work", link: "/item3" },
    { label: "Contact", link: "/item3" },
  ];
</script>

<menu class="main-menu">
  <div class="main-menu_top">
    <a href="#Home">
      <Logo />
    </a>
    <a href="#Home">
      <span>Dante</span>
    </a>
    <div>Web Developer</div>
  </div>

  <nav class="main-menu_nav">
    <a href="#About">About</a>
    <a href="#Work">Work</a>
    <a href="#Skills">Skills</a>
    <a href="#Contact">Contact</a>
  </nav>

  <ul class="social">
    <li>
      <a href="https://www.linkedin.com/in/dantedurant/" target="_blank">
        <LinkedIn />
      </a>
    </li>
    <li>
      <a href="https://github.com/DanteDurant?tab=repositories" target="_blank">
        <Github />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/@dantedurant3412" target="_blank">
        <YouTube />
      </a>
    </li>
  </ul>
</menu>

<style lang="scss">
  .main-menu {
    display: flex;
    width: 13rem;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    background-color: var(--bg-alt);
    left: 0;
    top: 0;
    right: auto;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    z-index: 999;

    &_top {
      display: flex;
      width: 100%;
      min-height: 21rem;
      background-color: #000;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
      }

      &_logo {
        height: auto;
        width: 7.2rem;
      }

      // name
      span {
        color: #fff;
        font-size: 2.7rem;
        line-height: 2;
        font-weight: 900;
      }

      // job
      div {
        padding-top: 1rem;
        color: #fff;
        font-family: serif;
        color: #a5a5a5;
        font-size: 1.2rem;
      }
    }

    &_nav {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #282828;

      a {
        display: block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #282828;
        justify-self: center;
        color: #909090;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 5rem;
      }

      a:last-child {
        color: #08fdd8;
      }
    }
  }

  .social {
    display: flex;
    margin-top: 2rem;
    list-style: none;
    justify-content: space-between;
    height: 20rem;
    width: 56%;

    li {
      a {
        color: #909096;
        &:hover {
          color: #08fdd8;
        }
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  a:hover {
    color: #08fdd8;
  }
</style>
