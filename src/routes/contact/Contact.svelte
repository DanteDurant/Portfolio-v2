<script>
  import Bounce from "../../components/text/Bounce.svelte";
  import Form from "../../components/text/Form.svelte";
  const s = "8rem";
  const sp = "-0.2rem";
</script>

<main id="Contact" class="main contact">
  <span class="aside-back" />
  <span class="container-text center-parent">
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

  <div class="container-map">
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
  .main {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    width: 100%;
    background-color: var(--bg);
    z-index: 1;
  }
  .aside-back {
    min-width: 13rem;
    z-index: 900;
    height: 100vh;
  }

  .container-text {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 150rem;
    height: 100vh;
    padding-right: 6rem;
    padding-left: 9rem;
    background-color: var(--bg);
    transform: translateY(0);
    div {
      margin-top: -5rem;
    }
  }

  .fill_alt {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2.5rem;
    width: 100%;
    background-color: var(--bg);
    z-index: 1;
  }

  .tag {
    &-one {
      position: absolute;
      left: 4.5rem;
      bottom: 4rem;
    }
    &-two {
      position: absolute;
      left: 2.5rem;
      bottom: 1rem;
    }
  }

  .container-map {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .contact {
      flex-direction: column-reverse;
      overflow: hidden;

      .container {
        &-text {
          width: 80%;
          height: 55%;

          .head_alt {
            font-size: 2.2rem;
          }

          input,
          textarea {
            font-size: 2.2rem;
          }
        }

        &-map {
          width: 193vw;
          height: 45%;

          .fill_alt {
            position: absolute;
            bottom: -1.5rem;
            right: 0;
            height: 6.5rem;
            width: 100%;
            background-color: var(--bg);
            z-index: 1;
          }
        }
      }
    }
  }
</style>
