<script>
  import ImageGrid from "../../components/features/ImageGrid.svelte";
  import BounceText from "../../components/text/BounceText.svelte";
</script>

<main id="Work" class="main work center-parent">
  <span class="aside-back" />
  <span class="container-outer">
    <div class="container-text">
      <p class="bg-text">Work</p>
      <span class="container-text_inner">
        <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>

        <span class="head work">
          <BounceText text="My Portfolio" />
        </span>

        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;h2/&gt;</p>
        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>

        <p class="head_alt">
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing people from companies around the country. the
          list is a work in progress and there is more to come.<br />Interested
          to see some more? Visit my
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
  .container-outer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .container-text {
    width: 100%;
    height: 33rem;
    display: flex;
    position: relative;
    margin: 0;
    &_inner {
      margin-left: 9rem;
    }

    .head {
      &_alt {
        width: 80rem;
      }
    }
  }

  .bg-text {
    position: absolute;
    right: 0;
    bottom: 10rem;
    font-size: 50rem;
    font-family: "coolvetica";
    font-weight: 400;
    line-height: 0;
    letter-spacing: -1rem;
    color: rgba(0, 0, 0, 0.25);
    z-index: 0;
  }

  @media (max-width: 600px) {
    .work {
      height: 100dvh;
      width: 100vw;
      overflow: hidden;
      .container-outer {
        margin-bottom: -20rem;
        .container-text {
          width: 80%;
          overflow: visible;
          .bg-text {
            font-size: 49rem;
            left: -20rem;
            bottom: 18rem;
          }
          &_inner {
            margin: 0;
          }
          .head_alt {
            width: 100%;
          }
        }
      }
    }
  }
</style>
