<script>
  export let text = "Bouncing Text";

  let isHovered = false;

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    setTimeout(() => {
      isHovered = false;
    }, 1000); // Animation duration (1s)
  }
</script>

<span
  class="rubberBand {isHovered ? 'animate' : ''}"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <h1>
    {text}
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
    transition: color 250ms;

    margin: 0;
    font-size: 10rem;
    line-height: 10rem;
    letter-spacing: -0.16em;

    &:hover {
      color: #08fdd8;
    }
  }

  @keyframes rubberBand {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scaleY(1.25) scaleX(0.75);
    }
    40% {
      transform: scaleY(0.75) scaleX(1.25);
    }
    50% {
      transform: scaleY(1.15) scaleX(0.85);
    }
    65% {
      transform: scaleY(0.95) scaleX(1.05);
    }
    75% {
      transform: scaleY(1.05) scaleX(0.95);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }
</style>
