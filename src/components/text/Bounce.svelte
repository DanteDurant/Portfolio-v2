<script>
  import sharedStyles from "../../utility/sharedStyles.scss?inline";
  import keyFrames from "../../utility/keyFrames.css?inline";
  import PopUpText from "./PopUpText.svelte";

  export let text = "Bouncing Text";
  export let customStyles = "";
  export let delay = 0;
  export let size = "9.3rem";
  export let spacing = "-0.5rem";
  export let height = "8.6rem";

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

<span
  class="rubberBand {isHovered ? 'animate' : ''}"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <h1
    style={`
      font-size: ${size}; ${customStyles}; 
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
    transition: all 250ms;
    margin: 0;
    // line-height: 8.6rem;

    &:hover {
      color: var(--pri);
    }
  }
</style>
