<script>
  import PopUpText from "./PopUpText.svelte";
  export let text = "";
  export let styleParent = "";
  export let styleText = "";
  export let delay = 0;
  export let size = "9.3rem";
  export let spacing = "-0.3rem";
  export let height = "8.6rem";

  import coolvetica from "../../public/fonts/coolvetica-rg.woff2";

  let isHovered = false;

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    setTimeout(() => {
      isHovered = false;
    }, 1000);
  }
</script>

<svelte:head>
  <link rel="preload" href={coolvetica} as="font" type="font/woff2" />
</svelte:head>

<span
  class="rubberBand {isHovered ? 'animate' : ''}"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  style={`${styleParent}`}
>
  <h1
    style={`
      font-size: ${size}; ${styleText}; 
      letter-spacing: ${spacing}; line-height: ${height}`}
  >
    <PopUpText {delay} content={text} />
  </h1>
</span>

<style lang="scss">
  .rubberBand {
    display: inline-block;
    width: max-content;
  }

  .animate {
    animation: rubberBand 1s ease;
  }

  h1 {
    font-family: "coolvetica", sans-serif;
    font-weight: 500;
    transition: all 250ms;
    margin: 0;

    &:hover {
      color: var(--pri);
    }
  }
</style>
