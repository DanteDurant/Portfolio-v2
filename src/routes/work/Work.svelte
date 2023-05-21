<script>
  import sharedStyles from "../../utility/sharedStyles.scss?inline";
  import Bounce from "../../components/text/Bounce.svelte";
  import ImageGrid from "../../components/features/ImageGrid.svelte";
  const s = "6rem";
  const sp = "-0.25rem";
</script>

<main id="Work" class="main">
  <div class="container">
    <p class="bg-text">work</p>
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2&gt;</p>

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

    <span class="head_alt">
      A small gallery of recent projects chosen by me. I've done them all
      together with amazing people from companies <br />
      around the country. the list is a work in progress and there is more to come.<br
      />Interested to see some more? Visit my
      <a href="https://github.com/DanteDurant?tab=repositories" target="_blank"
        >GitHub</a
      > page.
    </span>

    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
    <p class="tag" style="margin: 0 0 1rem -4rem;">&lt;section&gt;</p>

    <ImageGrid />

    <p class="tag" style="margin: 1.5rem 0 0 -4rem;">&lt;section/&gt;</p>
  </div>
</main>

<style>
  .container {
    /* background-color: red; */
    /* overflow: hidden; */
    /* background-color: var(--bg-alt); */
  }

  .bg-text {
    position: absolute;
    right: -5rem;
    top: -25.1rem;
    font-size: 64.3rem;
    font-weight: 900;
    z-index: 1;
    letter-spacing: -4rem;

    /* color: #000; */
    /* color: rgba(0, 0, 0, 0.5); */
    color: rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 2560px) {
    .bg-text {
      right: -5rem;
    }
  }
</style>
