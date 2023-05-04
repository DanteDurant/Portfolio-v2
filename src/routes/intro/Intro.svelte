<script>
  import { onMount } from "svelte";
  import IntroText from "../../components/IntroText.svelte";
  import Button from "../../components/Button.svelte";
  import ArrowDown from "$lib/images/ArrowDown.svelte";

  let subVisible = false;
  let buttonVisible = false;

  onMount(() => {
    setTimeout(() => {
      subVisible = true;
    }, 400);
    setTimeout(() => {
      buttonVisible = true;
    }, 1000);
  });
</script>

<svelte:head>
  <title>Intro</title>
  <meta name="my introduction" content="introdictory information" />
</svelte:head>

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
      <IntroText />
      <p class="tag" style="margin: -3rem -6rem 0 auto;">&lt;h1/&gt;</p>
      <div
        class="sub"
        class:fadeIn={subVisible}
        class:slideInFromBottom={subVisible}
      >
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="sub-head">Front End Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p>
      </div>
      <div
        class="button-con"
        class:fadeIn={buttonVisible}
        class:slideInFromBottom={buttonVisible}
      >
        <Button />
      </div>
    </div>
  </section>
  <section class="work">
    <div />
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
    margin-bottom: 10rem;

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

  .sub {
    opacity: 0;
    &:global(.fadeIn) {
      opacity: 1;
    }
  }

  .button-con {
    opacity: 0;
    &:global(.fadeIn) {
      opacity: 1;
    }
  }

  .fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  .slideInFromBottom {
    animation: slideInFromBottom 0.5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(20%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
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
