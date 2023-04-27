<script>
  let isHovered = false;
  import { fade } from "svelte/transition";
</script>

<!-- <div class="button-container">
  <button>Contact me!</button>
  <div class="slide-in" />
</div> -->

<!-- <div
  class="button-container"
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <button>Contact me!</button>
  <div
    class="slide-in"
    style={`transform: translateX(${isHovered ? "0" : "-100%"});`}
  />
</div>

<style>
  .button-container {
    display: inline-block;
    position: relative;
    overflow: hidden;
  }

  button {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: 1px solid #08fdd8;
    color: #fff;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
  }

  .slide-in {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #08fdd8;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    z-index: -1;
  }

  .button-container:hover .slide-in {
    transform: translateX(0);
  }
</!-->

<button class="btn btn-5">Contact me!</button>

<style>
  .btn {
    width: 220px;
    height: 50px;
    background: none;
    border: 2px solid;
    border-color: var(--color);
    border-bottom-width: 4px;
    font: inherit;
    letter-spacing: inherit;
    /* margin: 1rem; */
    /* padding: 1rem 2rem; */
    text-transform: inherit;
    transition: color 1s;
  }

  :root {
    --color: #08fdd8;
    --color2: #08fdd8;
  }

  .btn-5 {
    color: var(--color);
  }

  .btn-5:hover {
    animation: blinds 0.75s linear forwards;
    background: linear-gradient(0deg, var(--color) 25%, transparent 25%) 0 0 /
        0.5rem 0.5rem,
      linear-gradient(0deg, var(--color2) 50%, transparent 50%) 0 0 / 1rem 1rem;
    color: #000;
  }

  @keyframes blinds {
    100% {
      background-position: 0 0, 0 -4.5rem;
      background-size: 0 0, 1rem 9rem;
    }
  }

  .button-container {
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: transparent;
  }

  button {
    display: inline-block;
    position: relative;
    background-color: #000;
    border: 1px solid #08fdd8;
    color: #fff;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
  }

  .slide-in {
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background-color: #08fdd8;
    transition: right 0.5s ease;
    z-index: -1;
  }

  .button-container:hover .slide-in {
    right: 0;
  }
</style>
