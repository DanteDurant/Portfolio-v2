<script>
  import { onMount } from "svelte";
  import IntroText from "../../components/text/IntroHeading.svelte";
  import Button from "../../components/Button.svelte";
  import ArrowDown from "$lib/images/logos/ArrowDown.svelte";
  import global from "../../utility/global.scss";
  import keyFrames from "../../utility/keyFrames.css";

  let subVisible = false;
  let buttonVisible = false;

  onMount(() => {
    setTimeout(() => {
      subVisible = true;
    }, 3000);
    setTimeout(() => {
      buttonVisible = true;
    }, 3500);
  });
</script>

<main id="Home" class="main intro">
  <span class="aside-back" />
  <div class="arrow-down">
    <span>scroll down</span>
    <div><ArrowDown /></div>
  </div>
  <p class="tag tag-one">&lt;/html&gt;</p>
  <p class="tag tag-two">&lt;body&gt;</p>
  <section class="container-text">
    <div class="head">
      <p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      <IntroText />
      <p class="tag" style="margin: -3.7rem -6rem 0 56.5rem;">&lt;h1/&gt;</p>
      <div
        class="sub"
        class:fadeIn={subVisible}
        class:slideInFromBottomText={subVisible}
      >
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="sub-head">Full Stack Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p>
      </div>
      <div
        class="button-con"
        class:fadeIn={buttonVisible}
        class:slideInFromBottomText={buttonVisible}
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
  .container-text {
    align-self: center;
    margin-left: 6rem;
  }

  .arrow-down {
    width: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
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

  .tag {
    &-one {
      position: absolute;
      left: 15rem;
      top: 1rem;
    }
    &-two {
      position: absolute;
      left: 17rem;
      top: 4rem;
    }
  }

  .sub {
    opacity: 0;
    &:global(.fadeIn) {
      opacity: 1;
    }

    &-head {
      font-size: 1.6rem;
      letter-spacing: 4px;
      color: var(--text-alt);
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

  .slideInFromBottomText {
    animation: slideInFromBottomText 0.5s ease-in-out forwards;
  }
</style>
