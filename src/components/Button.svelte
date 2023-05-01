<script>
  import sharedStyles from "../utility/sharedStyles.css";

  let isHovered = false;
  let firstLoad = true;

  function handleMouseEnter() {
    isHovered = true;
    firstLoad = false;
  }

  function handleMouseLeave() {
    isHovered = false;
  }
</script>

<div
  class="button center-parent"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <span class:isHovered>Contact me!</span>
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
    border: var(--primary) 1px solid;
    border-bottom-width: 2px;
    color: var(--primary);
    letter-spacing: 4px;
    font-size: 16px;
    cursor: pointer;
    overflow: hidden;
  }

  span {
    position: relative;
    z-index: 1;
    transition: color 500ms;
  }

  .isHovered {
    color: #000000;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 108%;
    background: linear-gradient(120deg, var(--primary) 90%, transparent 90.1%);
    transform: translateX(-100%);
  }

  .inlet {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.9rem;
    height: 1.6rem;
    background-image: linear-gradient(
      to top left,
      var(--secondary) 50%,
      #00ff0000 50%
    );
    transform: translateY(100%);
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

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes slideOutFromRight {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideOutFromTop {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
</style>
