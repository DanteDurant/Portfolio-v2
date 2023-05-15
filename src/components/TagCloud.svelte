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
    "Python",
    "git",
    "AJAX",
    "Node.js",
    "Svelte",
    "jQuery",
    "Axios",
    "REST",
    "SQL",
    "MongoDB",
    "BEM",
    "JSON",
  ];

  const colors = ["#08fdd8", "#FD2055"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  onMount(() => {
    const script = document.createElement("script");
    script.src = CDN_URL;
    script.onload = initializeTagCloud;
    document.body.appendChild(script);
  });

  function initializeTagCloud() {
    tagCloud = TagCloud(".content", myTags, {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "slow",
      direction: 235,
      keep: false,
    });

    randomColor = colors[Math.floor(Math.random() * colors.length)];
  }
</script>

<span class="container">
  <div class="content tagcloud" style="color: {randomColor}" />
</span>

<style>
  .container {
    /* margin: 10rem 0 0 40rem; */
  }

  .tagcloud {
    /* font-family: "coolvetica"; */
    font-size: 2rem;
    font-weight: 400;
    margin-left: 30%;
  }

  .tagcloud--item {
    color: #36454f;
  }
</style>
