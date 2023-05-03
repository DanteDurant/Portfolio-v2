<script>
  import Intro from "../components/Intro.svelte";
  import Button from "../components/Button.svelte";
  import ArrowDown from "$lib/images/ArrowDown.svelte";

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
  <div class="downer">
    <span>scroll down</span>
    <div><ArrowDown /></div>
  </div>
  <section id="section-home" class="section-home">
    <p class="tag tag-one">&lt;/html&gt;</p>
    <p class="tag tag-two">&lt;body&gt;</p>
    <div class="text-zone">
      <p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      <Intro />
      <p class="tag" style="margin: -3rem -6rem 0 auto;">&lt;h1/&gt;</p>
      <div>
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="sub-head">Front End Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p>
      </div>
      <Button />
    </div>
  </section>
</main>

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

  .downer {
    width: 0;
    display: flex;
    flex-direction: column;
    z-index: 0;

    span {
      position: relative;
      top: 86vh;
      left: 1rem;
      writing-mode: vertical-lr;
      font-size: 1.4rem;
      color: white;
      animation: moveUpDown 1s ease-in-out infinite;
    }
    div {
      position: relative;
      top: 87vh;
      left: 1.1rem;
    }
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
    }

    .sub-head {
      font-size: 1.6rem;
      letter-spacing: 4px;
      display: block;
      color: #8d8d8d;
      margin: 0;
    }
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
