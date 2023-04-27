<script>
  import Bounce from "../components/Bounce.svelte";
  import Button from "../components/Button.svelte";
</script>

<main>
  <span class="sidebar-back" />
  <section id="section-home" class="section-home">
    <p class="tag tag-one">&lt;/html&gt;</p>
    <p class="tag tag-two">&lt;body&gt;</p>

    <div class="text-zone">
      <p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      <h1 aria-label="Hi, I'm Dante, web developer" class="bounce-root">
        <Bounce text="H" />
        <Bounce text="i" />
        <Bounce text="," />
        <br />
        <Bounce text="I" />
        <Bounce customStyles="position: relative; top: -6.7rem;" text="," />
        <Bounce text="m" />
        <span class="space">&nbsp</span>
        <span class="bounce logo">
          <svg
            width="72"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.6562 22.7188C38.6562 27.8646 37.6667 32.1667 35.6875 35.625C33.7292 39.0625 30.8854 41.6562 27.1562 43.4062C23.4271 45.1354 18.9375 46 13.6875 46H0.75V0.3125H15.0938C19.8854 0.3125 24.0417 1.16667 27.5625 2.875C31.0833 4.5625 33.8125 7.07292 35.75 10.4062C37.6875 13.7188 38.6562 17.8229 38.6562 22.7188ZM28.5938 22.9688C28.5938 19.5938 28.0938 16.8229 27.0938 14.6562C26.1146 12.4688 24.6562 10.8542 22.7188 9.8125C20.8021 8.77083 18.4271 8.25 15.5938 8.25H10.4375V38H14.5938C19.3229 38 22.8333 36.7396 25.125 34.2188C27.4375 31.6979 28.5938 27.9479 28.5938 22.9688Z"
              fill="#08FDD8"
            />
            <path
              d="M44.6562 22.7188C44.6562 27.8646 43.6667 32.1667 41.6875 35.625C39.7292 39.0625 36.8854 41.6562 33.1562 43.4062C29.4271 45.1354 24.9375 46 19.6875 46H6.75V0.3125H21.0938C25.8854 0.3125 30.0417 1.16667 33.5625 2.875C37.0833 4.5625 39.8125 7.07292 41.75 10.4062C43.6875 13.7188 44.6562 17.8229 44.6562 22.7188ZM34.5938 22.9688C34.5938 19.5938 34.0938 16.8229 33.0938 14.6562C32.1146 12.4688 30.6562 10.8542 28.7188 9.8125C26.8021 8.77083 24.4271 8.25 21.5938 8.25H16.4375V38H20.5938C25.3229 38 28.8333 36.7396 31.125 34.2188C33.4375 31.6979 34.5938 27.9479 34.5938 22.9688Z"
              fill="#FD2055"
            />
          </svg>
        </span>
        <Bounce text="a" />
        <Bounce text="n" />
        <Bounce text="t" />
        <Bounce text="e" />
        <Bounce text="," />
        <br />
        <Bounce text="w" />
        <Bounce text="e" />
        <Bounce text="b" />
        <span class="space">&nbsp</span>
        <Bounce text="d" />
        <Bounce text="e" />
        <Bounce text="v" />
        <Bounce text="e" />
        <Bounce text="l" />
        <Bounce text="o" />
        <Bounce text="p" />
        <Bounce text="e" />
        <Bounce text="r" />
      </h1>
      <p class="tag" style="margin: -3rem -6rem 0 auto;">&lt;h1/&gt;</p>
      <div>
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="text-zone_sub">Front End Developer / Designer</p>
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p/&gt;</p>
      </div>
      <Button />
    </div>
  </section>
</main>

<!--  -->

<style lang="scss">
  main {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  .sidebar-back {
    height: 100vh;
    width: 13rem;
    background-color: #1d1d1d;
  }

  .section-home {
    display: flex;
    align-items: center;
    position: relative;
    left: 8rem;

    .tag {
      color: #515152;
      font-size: 1.8rem;
      font-style: italic;
      font-family: "La Belle Aurore";
      &-one {
        position: absolute;
        left: -5rem;
        top: 0;
      }
      &-two {
        position: absolute;
        left: -3rem;
        top: 3rem;
      }
    }

    .text-zone {
      margin-top: 7.8rem;
      display: flex;
      flex-direction: column;

      // height: 100vh;
      h1 {
        font-size: 10rem;
        line-height: 10rem;
        letter-spacing: -0.16em;
      }

      &_sub {
        font-size: 1.6rem;
        letter-spacing: 4px;
        display: block;
        color: #8d8d8d;
        margin: 0;
      }
    }
  }

  .logo {
    margin-right: -1.3rem;
  }

  .bounce-root {
    width: 100%;
    color: white;
    margin: 0 0 0 0;
  }

  .bounce:hover {
    color: #08fdd8;
  }
</style>
