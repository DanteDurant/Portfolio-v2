<script>
  import sharedStyles from "../../utility/sharedStyles.css?inline";
  import Bounce from "../../components/Bounce.svelte";
  import ImageGrid from "../../components/ImageGrid.svelte";
  const s = "6rem";
  const sp = "-0.25rem";
</script>

<main id="Work">
  <div class="container">
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2&gt;</p>
    <span class="text-area">
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

    <!-- <TagCloud /> -->

    <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
    <span class="text-area_alt">
      A small gallery of recent projects chosen by me. I've done them all
      together with amazing people from companies <br />
      around the country. the list is a work in progress and there is more to come.<br
      />Interested to see some more? Visit my
      <a href="https://github.com/DanteDurant?tab=repositories">GitHub</a> page.
    </span>
    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
    <p class="tag" style="margin: 0 0 1rem -4rem;">&lt;section&gt;</p>
    <ImageGrid />
    <p class="tag" style="margin: 1.5rem 0 0 -4rem;">&lt;section/&gt;</p>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: row;
    width: calc(100vw - 20.5rem); //offset to accommodate side bar
    // margin-left: 20.5rem;
    margin: 0 0 10rem 20.5rem; // compensation for offset
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 8rem;
  }

  .text-area {
    margin: -1.5rem 0 -1rem 0;
    color: var(--primary);
    background-color: transparent;

    &_alt {
      color: white;
      font-size: 1.6rem;
      line-height: 1.5;

      a {
        text-decoration: none;
        color: var(--primary);
      }
    }
  }
  p {
    margin: 0;
  }
</style>
