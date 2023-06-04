<script>
  import Bounce from "../../components/text/Bounce.svelte";
  import ImageGrid from "../../components/features/ImageGrid.svelte";
  const s = "6rem";
  const sp = "-0.2rem";
</script>

<main id="Work" class="main center-parent">
  <span class="aside-back" />
  <span class="container-outer">
    <div class="container-text">
      <p class="bg-text">Work</p>
      <span class="container-text_inner">
        <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>

        <span class="head">
          <Bounce size={s} spacing={sp} text="M" />
          <Bounce size={s} spacing={sp} text="y" />
          <span>&nbsp</span>
          <span>&nbsp</span>
          <Bounce size={s} spacing={sp} text="P" />
          <Bounce size={s} spacing={sp} text="o" />
          <Bounce size={s} spacing={sp} text="r" />
          <Bounce size={s} spacing={sp} text="t" />
          <Bounce size={s} spacing={sp} text="f" />
          <Bounce size={s} spacing={sp} text="o" />
          <Bounce size={s} spacing={sp} text="l" />
          <Bounce size={s} spacing={sp} text="i" />
          <Bounce size={s} spacing={sp} text="o" />
        </span>

        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;h2/&gt;</p>
        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>

        <p class="head_alt">
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing people from companies <br />
          around the country. the list is a work in progress and there is more to
          come.<br />Interested to see some more? Visit my
          <a
            href="https://github.com/DanteDurant?tab=repositories"
            target="_blank">GitHub</a
          > page.
        </p>

        <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
      </span>
    </div>

    <ImageGrid />
  </span>
</main>

<style lang="scss">
  .aside-back {
    width: 14rem;
    height: 100vh;
  }
  .main {
    width: 100%;
    margin: 0;
  }
  .container-outer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .container-text {
    background-color: transparent;
    width: 100%;
    height: 33rem;
    display: flex;
    flex-direction: column;
    position: relative;
    align-self: center;
    overflow: hidden;
    margin: 0;
    &_inner {
      margin-left: 7.5rem;
    }
  }

  .bg-text {
    position: absolute;
    right: -6rem;
    bottom: 18rem;
    font-size: 50rem;
    font-family: "coolvetica";
    font-weight: 400;
    line-height: 0;
    letter-spacing: -1rem;
    color: rgba(0, 0, 0, 0.25);
    z-index: 0;
  }
</style>
