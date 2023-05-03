<script>
  import Bounce from "../components/Bounce.svelte";
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
  <span>&nbsp</span>
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
  <span>&nbsp</span>
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

<style>
  h1 {
    font-size: 10rem;
    line-height: 10rem;
    letter-spacing: -0.16em;
  }

  .logo {
    margin-right: -1.3rem;
  }

  .bounce-root {
    width: 100%;
    color: white;
    margin: 0 0 0 0;
  }
</style>
