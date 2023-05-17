<script>
  import { onMount } from "svelte";
  import IntroText from "../../components/IntroText.svelte";
  import Button from "../../components/Button.svelte";
  import ArrowDown from "$lib/images/ArrowDown.svelte";
  import sharedStyles from "../../utility/sharedStyles.css";

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

<main id="Home">
  <span class="sidebar-back" />
  <div class="downer">
    <span>scroll down</span>
    <div><ArrowDown /></div>
  </div>
  <section id="section-intro" class="section-intro">
    <p class="tag tag-one">&lt;/html&gt;</p>
    <p class="tag tag-two">&lt;body&gt;</p>
    <div class="text-zone">
      <p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      <IntroText />
      <p class="tag" style="margin: -3.7rem -6rem 0 62rem;">&lt;h1/&gt;</p>
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
        <a href="#Contact">
          <Button />
        </a>
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

  a {
    text-decoration: none;
  }

  .downer {
    width: 2.7rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    // background-color: darkgreen;
    z-index: 0;

    span {
      writing-mode: vertical-lr;
      font-size: 1.4rem;
      color: white;
      animation: moveUpDown 1s ease-in-out infinite;
    }
    div {
      padding: 0.7rem 0.5rem 2rem 0;
    }
  }

  .section-intro {
    display: flex;
    align-items: center;
    position: relative;
    left: 6rem;
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
