<script>
  import Bounce from "../components/Bounce.svelte";
  import Button from "../components/Button.svelte";
  import PopUpText from "../components/PopUpText.svelte";
  import LogoAnimation from "../lib/images/LogoAnimation.svelte";
  let src = "../../static/logo.png";
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
        <Bounce delay={30} text="i" />
        <Bounce delay={60} text="," />
        <br />
        <Bounce delay={90} text="I" />
        <Bounce
          delay={120}
          customStyles="position: relative; top: -6.7rem;"
          text=","
        />
        <Bounce delay={150} text="m" />
        <span class="space">&nbsp</span>
        <span class="logo">
          <LogoAnimation delay={180} />
        </span>
        <!-- <img {src} alt="logo" /> -->
        <Bounce delay={210} text="a" />
        <Bounce delay={240} text="n" />
        <Bounce delay={270} text="t" />
        <Bounce delay={300} text="e" />
        <Bounce delay={330} text="," />
        <br />
        <Bounce delay={360} text="w" />
        <Bounce delay={390} text="e" />
        <Bounce delay={420} text="b" />
        <span class="space">&nbsp</span>
        <Bounce delay={450} text="d" />
        <Bounce delay={470} text="e" />
        <Bounce delay={600} text="v" />
        <Bounce delay={630} text="e" />
        <Bounce delay={660} text="l" />
        <Bounce delay={690} text="o" />
        <Bounce delay={720} text="p" />
        <Bounce delay={750} text="e" />
        <Bounce delay={780} text="r" />
      </h1>
      <p class="tag" style="margin: -3rem -6rem 0 auto;">&lt;h1/&gt;</p>
      <div>
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="text-zone_sub">Front End Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p>
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
