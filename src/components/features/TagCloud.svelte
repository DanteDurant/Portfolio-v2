<script>
  import { onMount, afterUpdate } from "svelte";
  import { onDestroy } from "svelte";

  const CDN_URL =
    "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";

  let tagCloud;
  let radius = 350;
  let screenWidth;

  const myTags = [
    "JavaScript",
    "CSS",
    "Sass",
    "HTML",
    "C#",
    "C++",
    "React",
    "React Native",
    "Expo",
    "Python",
    "Git",
    "AJAX",
    "Node.js",
    "Svelte",
    "jQuery",
    "Axios",
    "REST",
    "BEM",
    "JSON",
    "Tailwind",
  ];

  onMount(() => {
    screenWidth = window.innerWidth;
    window.addEventListener("resize", handleResize);

    const script = document.createElement("script");
    script.src = CDN_URL;
    script.onload = initializeTagCloud;
    document.body.appendChild(script);
  });

  afterUpdate(() => {
    const screenWidth = window.innerWidth;
    radius = screenWidth <= 2500 ? 380 : screenWidth <= 3800 ? 550 : 800;
  });

  function handleResize() {
    screenWidth = window.innerWidth;
  }

  function initializeTagCloud() {
    tagCloud = TagCloud(".content", myTags, {
      radius,
      maxSpeed: "normal",
      initSpeed: "slow",
      direction: 235,
      keep: true,
    });
  }
</script>

<div class="content tagcloud" />

<style>
  .tagcloud {
    color: var(--pri);
    font-size: 2rem;
    font-weight: 400;
  }

  @media (min-width: 2560px) {
    .tagcloud {
      font-size: 2.5rem;
    }
  }
</style>
