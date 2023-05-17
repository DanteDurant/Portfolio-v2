<script>
  import Bounce from "../../components/Bounce.svelte";
  import Form from "../../components/Form.svelte";
  import TagCloud from "../../components/TagCloud.svelte";
  const s = "6rem";
  const sp = "-0.5rem";
</script>

<div class="space" />
<main id="Contact">
  <div class="container" id="Contact">
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2&gt;</p>
    <span class="text-area">
      <Bounce size={s} spacing={sp} text="C" />
      <Bounce size={s} spacing={sp} text="o" />
      <Bounce size={s} spacing={sp} text="n" />
      <Bounce size={s} spacing={sp} text="t" />
      <Bounce size={s} spacing={sp} text="a" />
      <Bounce size={s} spacing={sp} text="c" />
      <Bounce size={s} spacing={sp} text="t" />
      <span>&nbsp</span>
      <span>&nbsp</span>
      <Bounce size={s} spacing={sp} text="m" />
      <Bounce size={s} spacing={sp} text="e" />
    </span>
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
    <span class="text-area_alt">
      I’m interested in working as a front-end developer, especially ambitious
      or large projects. However, if you have other request or question, don’t
      hesitate to use the form.
    </span>
    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
    <Form />
  </div>
  <div class="map">
    <iframe
      title="map"
      src="https://snazzymaps.com/embed/491438"
      width="100%"
      height="100%"
      style="border:none;"
    />
    <div class="space-alt" />
  </div>
</main>

<style lang="scss">
  .space {
    width: calc(100vw - 20.5rem);
    margin-left: 13rem;
    height: 2.5rem;
    z-index: 1;
    background-color: #1d1d1d;

    &-alt {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2.5rem;
      width: 100%;
      background-color: #1d1d1d;
      z-index: 1;
    }
  }

  main {
    display: flex;
    flex-direction: row;
    width: calc(100vw - 20.5rem);
    height: 100vh;
    padding: 0 0 0 7.5rem;
    margin-left: 13rem;
    background-color: #1d1d1d;
    z-index: 1;
  }

  .container {
    // height: 200rem;
    width: 45%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 2rem;
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

  .map {
    position: relative;
    height: 100%;
    width: 55%;
    z-index: 1;
  }
</style>
