<script>
  import { onMount } from "svelte";

  const CDN_URL =
    "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";

  let tagCloud;

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
    const script = document.createElement("script");
    script.src = CDN_URL;
    script.onload = initializeTagCloud;
    document.body.appendChild(script);
  });

  function initializeTagCloud() {
    tagCloud = TagCloud(".content", myTags, {
      radius: 350,
      maxSpeed: "fast",
      initSpeed: "slow",
      direction: 235,
      keep: false,
    });

    randomColor = colors[Math.floor(Math.random() * colors.length)];
  }
</script>

<div class="content tagcloud" />

<style>
  .tagcloud {
    /* font-family: "coolvetica"; */
    color: #08fdd8;
    font-size: 2rem;
    font-weight: 400;
  }
</style>
