<script>
  let isHovered = false;
  let firstLoad = true;

  function handleMouseEnter() {
    isHovered = true;
    firstLoad = false;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  export let text = "Contact me!";
</script>

<div
  class="button center-parent"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <span class:isHovered>{text}</span>
  <div
    class:animate-in-bg={isHovered && !firstLoad}
    class:animate-out-bg={!isHovered && !firstLoad}
    class="background"
  />
  <div
    class:animate-in-inlet={isHovered && !firstLoad}
    class:animate-out-inlet={!isHovered && !firstLoad}
    class="inlet"
  />
</div>

<style>
  .button {
    position: relative;
    height: 5rem;
    width: 22rem;
    font-size: 1.6rem;
    letter-spacing: 4px;
    cursor: pointer;
    overflow: hidden;
    border: var(--pri) 1px solid;
    border-bottom-width: 2px;
    color: var(--pri);
  }

  span {
    z-index: 1;
    transition: color 500ms;
  }

  .isHovered {
    color: #000;
  }

  .background {
    position: absolute;
    width: 108%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%);
    background: linear-gradient(120deg, var(--pri) 90%, transparent 90.1%);
  }

  .inlet {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.9rem;
    height: 1.6rem;
    transform: translateY(100%);
    background-image: linear-gradient(
      to top left,
      var(--sec) 50%,
      #00ff0000 50%
    );
  }

  .background.animate-in-bg {
    animation: slideInFromLeft 500ms forwards;
  }
  .background.animate-out-bg {
    animation: slideOutFromRight 500ms forwards;
  }
  .inlet.animate-in-inlet {
    animation: slideInFromBottom 700ms forwards;
  }
  .inlet.animate-out-inlet {
    animation: slideOutFromTop 700ms forwards;
  }
</style>
