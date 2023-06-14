<script>
  import Logo from "$lib/images/logos/Logo.svelte";
  import LinkedIn from "$lib/images/logos/LinkedIn.svelte";
  import Github from "$lib/images/logos/Github.svelte";
  import YouTube from "$lib/images/logos/YouTube.svelte";
</script>

<menu class="main-menu column">
  <div class="main-menu_top center-parent column">
    <a href="#Home" class="logo">
      <Logo />
    </a>
    <span>
      <a href="#Home">
        <span class="name">Dante</span>
      </a>
      <p class="job">Web Developer</p>
    </span>
  </div>

  <nav class="main-menu_nav column">
    <a href="#About">About</a>
    <a href="#Work">Work</a>
    <a href="#Skills">Skills</a>
    <a href="#Contact">Contact</a>
  </nav>

  <ul class="socials">
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
    height: 100%;
    width: 13rem;
    background-color: var(--bg-alt);
    justify-content: space-between;
    align-items: center;
    &_top {
      width: 100%;
      min-height: 21rem;
      background-color: #000;
      .name {
        font-size: 2.7rem;
        font-weight: 900;
        line-height: 2;
        color: #fff;
      }
      .job {
        font-family: serif;
        font-size: 1.2rem;
        padding-top: 1rem;
        color: #a5a5a5;
      }
    }
    &_nav {
      width: 100%;
      border-top: 1px solid #282828;
      a {
        text-align: center;
        justify-self: center;
        border-bottom: 1px solid #282828;
        color: #909090;
        line-height: 5rem;
        transition: all 300ms;
        &:hover {
          color: var(--pri);
        }
        &:last-child {
          color: var(--pri);
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .socials {
    display: flex;
    margin-top: 2rem;
    padding: 0;
    justify-content: space-between;
    height: 20rem;
    width: 56%;
    list-style: none;
    li {
      width: 1.5rem;
      a {
        transition: all 300ms;
        color: #909096;
        &:hover {
          color: var(--pri);
        }
      }
    }
  }

  @media (max-width: 600px) {
    .main-menu {
      min-height: 100%;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;

      &_top {
        width: max-content;
        min-height: 100%;
        display: flex;
        flex-direction: row;

        .logo {
          margin-left: 4rem;

          &-svg {
            scale: 1.2;
          }
        }

        span {
          display: flex;
          flex-direction: column;
          width: 100%;

          a {
            .name {
              font-weight: 600;
              font-size: 4.5rem;
              line-height: 5rem;
              margin: 0;
              margin: 0 4rem 0 3rem;
            }
          }

          .job {
            font-size: 2rem;
            line-height: 1rem;
            align-self: center;
          }
        }
      }

      &_nav {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        gap: 0.7rem;
        height: 13rem;
        width: 1fr;
        justify-content: start;
        align-items: center;
        border-top: none;
        margin-left: 2rem;

        a {
          display: flex;
          width: 12rem;
          height: 5.5rem;
          justify-content: center;
          align-items: center;
          line-height: 4rem;
          font-size: 2rem;
          border: 1px solid #282828;
          border-bottom: 2px solid #282828;
        }
      }

      .socials {
        height: 13rem;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        width: 1fr;
        margin-right: 6rem;

        li {
          width: 3rem;
        }
      }
    }
  }
</style>
