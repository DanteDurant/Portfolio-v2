<script>
  import Bounce from "../../components/text/Bounce.svelte";
  import Form from "../../components/Form.svelte";
  const s = "6rem";
  const sp = "-0.5rem";
</script>

<div class="fill" />
<main id="Contact" class="main">
  <div class="container" id="Contact">
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2&gt;</p>
    <span class="head">
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
    <span class="head_alt">
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
    <div class="fill_alt" />
  </div>
</main>

<style lang="scss">
  main {
    padding-left: 7.5rem;
    margin-left: 13rem;
    background-color: var(--bg);
    z-index: 1;
  }

  .fill {
    width: calc(100vw - 13rem);
    margin-left: 13rem;
    height: 2.5rem;
    z-index: 1;
    background-color: var(--bg);
    box-shadow: 0px -40px 200px 0px #000;
    // box-shadow: 0px -40px 200px 0px rgba(255, 255, 255, 0.157);

    &_alt {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2.5rem;
      width: 100%;
      background-color: var(--bg);
      z-index: 1;
    }
  }

  .container {
    width: 45%;
    margin-top: 2rem;
    padding-right: 7.5rem;
  }

  .map {
    position: relative;
    height: 100%;
    width: 55%;
    z-index: 1;
  }
</style>
