<script>
  import Bounce from "../../components/text/Bounce.svelte";
  import Form from "../../components/Form.svelte";
  const s = "8rem";
  const sp = "-0.2rem";
</script>

<div class="fill" />
<main id="Contact" class="main">
  <span class="parent">
    <div>
      <p class="tag" style="margin: 0 0 -1.5rem -1rem;">&lt;h1&gt;</p>
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
      <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h1/&gt;</p>
      <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
      <span class="head_alt">
        I’m interested in working as a front-end developer, especially ambitious
        or large projects. However, if you have other requests or questions,
        please don’t hesitate to use the form.
      </span>
      <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
      <Form />
    </div>
    <p class="tag tag-two">&lt;/html&gt;</p>
    <p class="tag tag-one">&lt;/body&gt;</p>
  </span>

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

  .parent {
    position: relative;
    // display: flex;
    // flex-direction: column;
    // flex-grow: 1;
    // justify-content: space-between;
    width: 45%;
    padding-right: 7.5rem;
    margin-top: 2rem;
  }

  .tag {
    &-one {
      position: absolute;
      left: -3rem;
      bottom: 6rem;
    }
    &-two {
      position: absolute;
      left: -5rem;
      bottom: 3rem;
    }
  }

  .map {
    position: relative;
    height: 100%;
    width: 55%;
    z-index: 1;
  }
</style>
