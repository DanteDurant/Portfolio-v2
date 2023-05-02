<script>
  import Bounce from "../components/Bounce.svelte";
  import Button from "../components/Button.svelte";
  import LogoAnimation from "../lib/images/LogoAnimation.svelte";

  function generateNumbers() {
    const numbers = [];
    const start = 30;
    const increment = 50;
    const count = 23;
    for (let i = 0; i < count; i++) {
      numbers.push(start + i * increment);
    }
    return numbers;
  }
  const r = generateNumbers();
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
        <Bounce delay={r[0]} text="i" />
        <Bounce delay={r[1]} text="," />
        <br />
        <Bounce delay={r[2]} text="I" />
        <Bounce
          delay={r[3]}
          customStyles="position: relative; top: -6.7rem;"
          text=","
        />
        <Bounce delay={r[4]} text="m" />
        <span class="space">&nbsp</span>
        <span class="logo">
          <LogoAnimation delay={r[5]} />
        </span>
        <Bounce delay={r[6]} text="a" />
        <Bounce delay={r[7]} text="n" />
        <Bounce delay={r[8]} text="t" />
        <Bounce delay={r[9]} text="e" />
        <Bounce delay={r[10]} text="," />
        <br />
        <Bounce delay={r[11]} text="w" />
        <Bounce delay={r[12]} text="e" />
        <Bounce delay={r[13]} text="b" />
        <span class="space">&nbsp</span>
        <Bounce delay={r[14]} text="d" />
        <Bounce delay={r[15]} text="e" />
        <Bounce delay={r[16]} text="v" />
        <Bounce delay={r[17]} text="e" />
        <Bounce delay={r[18]} text="l" />
        <Bounce delay={r[19]} text="o" />
        <Bounce delay={r[20]} text="p" />
        <Bounce delay={r[21]} text="e" />
        <Bounce delay={r[22]} text="r" />
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
      width: 63rem;

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
