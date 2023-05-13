<script>
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  import Sanlam from "../lib/images/sanlam.png";
  import Design from "../lib/images/design.png";
  import Rocket from "../lib/images/rocket.svg";
  import Wine from "../lib/images/wwf-wine.png";
  import Stile from "../lib/images/Stile.jpeg";

  window.addEventListener("DOMContentLoaded", () => {
    const imageBoxes = document.querySelectorAll(".image-box");

    imageBoxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.classList.add("brighten");
      });

      box.addEventListener("mouseout", () => {
        box.classList.remove("brighten");
      });
    });
  });
</script>

<div class="image-grid">
  <span>
    <a
      href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page"
      target="_blank"
      class="image-box"
      style="background-color: {getRandomColor()}"
    >
      <img src={Sanlam} alt="Sanlam storybook" />
      <span class="popup center-parent">View<br />Project</span>
    </a>
  </span>

  <span>
    <div class="image-box" style="background-color: {getRandomColor()}">
      <img src={Design} alt="Sanlam design system" />
    </div>
  </span>

  <span>
    <a
      href="https://takealot.retailrockit.co.za/"
      target="_blank"
      class="image-box rocket-box"
      style="background-color: #fff"
    >
      <object
        data={Rocket}
        type="image/svg+xml"
        aria-label="retail rocket logo"
        class="rocket"
      />
    </a>
  </span>

  <span>
    <a
      href="https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US"
      target="_blank"
      class="image-box scale"
      style="background-color: {getRandomColor()}"
    >
      <img src={Wine} alt="wwf wine logo" />
    </a>
  </span>

  <span>
    <a
      href="https://stile-aluminium.netlify.app"
      target="_blank"
      class="image-box"
      style="background-color: {getRandomColor()}"
    >
      <img src={Stile} alt="Stile" />
    </a>
  </span>

  <div class="image-box" style="background-color: {getRandomColor()}">
    <!-- <img src="path_to_image6" alt="Image 6" /> -->
  </div>
  <div class="image-box" style="background-color: {getRandomColor()}">
    <!-- <img src="path_to_image7" alt="Image 7" /> -->
  </div>
  <div class="image-box" style="background-color: {getRandomColor()}">
    <!-- <img src="path_to_image8" alt="Image 8" /> -->
  </div>
  <div class="image-box" style="background-color: {getRandomColor()}">
    <!-- <img src="path_to_image9" alt="Image 9" /> -->
  </div>
  <div class="image-box" style="background-color: {getRandomColor()}">
    <!-- <img src="path_to_image10" alt="Image 10" /> -->
  </div>
</div>

<style lang="scss">
  span {
    overflow: hidden;
  }

  .image-grid {
    margin: 0 -4rem 0 -7.5rem;
    height: min-content;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    grid-auto-rows: 1fr;
  }

  .image-box {
    position: relative;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    aspect-ratio: 1/1;
    transition: all 300ms ease;
    filter: brightness(0.5);

    &:hover {
      filter: brightness(1);
      transform: scale(1.1);

      & .popup {
        // visibility: visible;
        // opacity: 1;
        width: 7rem;
        height: 7rem;
        border-radius: 5rem;
        // text-decoration: none;
        z-index: 1;
        background-color: var(--primary);
        text-align: center;
        color: #000;
      }
    }
  }

  .popup::after {
    content: "";
    position: absolute;
    top: -30px; /* Adjust this value to position the popup correctly */
    left: 50%; /* Adjust this value to position the popup correctly */
    transform: translateX(-50%);
    border-radius: 50%;
    padding: 10px;
    font-size: 14px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s;
  }

  .rocket-box {
    width: 100%;
    height: 100%;

    & object {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .image-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
