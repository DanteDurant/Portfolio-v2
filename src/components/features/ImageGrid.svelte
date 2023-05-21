<script>
  import { onMount } from "svelte";

  import Sanlam from "../../lib/images/sanlam.png";
  import Design from "../../lib/images/design.png";
  import Rocket from "../../lib/images/rocket.png";
  import Wine from "../../lib/images/wwf-wine.png";
  import Stile from "../../lib/images/Stile.jpeg";
  import Circle from "../../lib/images/circle.png";
</script>

<div class="image-grid">
  <span>
    <a
      href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page"
      target="_blank"
      class="image-box"
    >
      <img class="image" src={Sanlam} alt="Sanlam storybook" />
      <img src={Circle} class="popup" alt="view project" />
    </a>
  </span>

  <span>
    <a
      href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page"
      class="image-box"
    >
      <img class="image" src={Design} alt="Sanlam design system" />
      <img src={Circle} class="popup" alt="view project" />
    </a>
  </span>

  <span>
    <a href="https://takealot.retailrockit.co.za/" class="image-box">
      <img class="image" src={Rocket} alt="retail rocket logo" />
      <img src={Circle} class="popup" alt="view project" />
    </a>
  </span>

  <span>
    <a
      href="https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US"
      target="_blank"
      class="image-box scale"
    >
      <img class="image" src={Wine} alt="wwf wine logo" />
      <img src={Circle} class="popup" alt="view project" />
    </a>
  </span>

  <span>
    <a
      href="https://stile-aluminium.netlify.app"
      target="_blank"
      class="image-box"
    >
      <img class="image" src={Stile} alt="Stile" />
      <img src={Circle} class="popup" alt="view project" />
    </a>
  </span>
</div>

<style lang="scss">
  span {
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  .image-grid {
    margin: 0 -4rem 0 -7.5rem;
    width: calc(100vw - 13rem);
    // height: min-content;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    grid-auto-rows: 1fr;
  }

  .popup {
    transition: all 200ms ease;
    width: 9rem;
    height: auto;
    opacity: 0;
    scale: 0.3;
    filter: brightness(0.5);
  }

  .image-box {
    position: relative;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    transition: all 300ms ease;
    filter: brightness(0.5);

    &:hover {
      filter: brightness(1);
      transform: scale(1.1);

      .popup {
        z-index: 1;
        opacity: 1;
        scale: 1;
        filter: brightness(1);
      }
    }
  }

  .image-box .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
