<script>
  import sharedStyles from "../../utility/sharedStyles.scss?inline";
  import Bounce from "../../components/text/Bounce.svelte";
  import ImageGrid from "../../components/features/ImageGrid.svelte";
  const s = "6rem";
  const sp = "-0.2rem";
</script>

<main id="Work" class="main">
  <div class="container">
    <p class="bg-text">Work</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>

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

    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>

    <p class="head_alt">
      A small gallery of recent projects chosen by me. I've done them all
      together with amazing people from companies <br />
      around the country. the list is a work in progress and there is more to come.<br
      />Interested to see some more? Visit my
      <a href="https://github.com/DanteDurant?tab=repositories" target="_blank"
        >GitHub</a
      > page.
    </p>

    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
    <p class="tag" style="margin: 0 0 1rem -4rem;">&lt;section&gt;</p>

    <ImageGrid />

    <p class="tag" style="margin: 1.5rem 0 0 -4rem;">&lt;section/&gt;</p>
  </div>
</main>

<style>
  .main {
    width: calc(100vw - 20.5rem - 13rem);
  }

  .head_alt {
    z-index: 1;
  }
  .bg-text {
    position: absolute;
    right: -8rem;
    top: -15rem;
    font-size: 50rem;
    font-family: "coolvetica";
    font-weight: 400;
    letter-spacing: -1rem;
    color: rgba(0, 0, 0, 0.25);
  }
</style>
