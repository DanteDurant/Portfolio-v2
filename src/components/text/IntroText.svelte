<script>
  import Bounce from "./Bounce.svelte";
  import LogoAnimation from "./LogoAnimation.svelte";

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
  const d = generateNumbers();
</script>

<div aria-label="Hi, I'm Dante, web developer" class="bounce-root">
  <span style="position: relative; left: -0.1rem; bottom: 0.05rem;">
    <Bounce text="H" />
    <Bounce delay={d[0]} text="i" />
    <Bounce delay={d[1]} text="," />
  </span>
  <br />
  <Bounce delay={d[2]} text="I" />
  <Bounce
    delay={d[3]}
    customStyles="position: relative; top: -5.7rem;"
    text=","
  />
  <Bounce
    delay={d[4]}
    customStyles="position: relative; left: -0.3rem;"
    text="m"
  />
  <span>&nbsp</span>
  <span>&nbsp</span>
  <span class="logo">
    <LogoAnimation delay={d[5]} />
  </span>
  <Bounce delay={d[6]} text="a" />
  <Bounce delay={d[7]} text="n" />
  <Bounce delay={d[8]} text="t" />
  <Bounce delay={d[9]} text="e" />
  <Bounce
    delay={d[10]}
    customStyles="position: relative; top: -0.06rem; left: -0.2rem;"
    text=","
  />
  <br />

  <Bounce delay={d[11]} text="w" />
  <Bounce delay={d[12]} text="e" />
  <Bounce delay={d[13]} text="b" />
  <span>&nbsp</span>
  <span>&nbsp</span>
  <span>&nbsp</span>
  <span style="position: relative; left: 0.13rem;">
    <Bounce delay={d[14]} text="d" />
    <Bounce delay={d[15]} text="e" />
    <Bounce delay={d[16]} text="v" />
    <Bounce delay={d[17]} text="e" />
    <Bounce delay={d[18]} text="l" />
    <Bounce delay={d[19]} text="o" />
    <Bounce delay={d[20]} text="p" />
    <Bounce delay={d[21]} text="e" />
    <Bounce delay={d[22]} text="r" />
  </span>
</div>

<style>
  .logo {
    margin-right: -0.3rem;
    margin-left: 0.25rem;
  }

  .bounce-root {
    width: 60.8rem;
    height: 27rem;
    color: white;
  }
</style>
