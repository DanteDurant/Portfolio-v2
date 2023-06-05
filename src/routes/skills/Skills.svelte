<script>
  import Bounce from "../../components/text/Bounce.svelte";
  const s = "6rem";
  const sp = "-0.2rem";
  const h = "5.5rem";
</script>

<main id="Skills" class="main skills">
  <div class="container-text">
    <p class="tag" style="margin: 0 0 1rem -1rem;">&lt;h2&gt;</p>
    <span class="head">
      <Bounce size={s} spacing={sp} height={h} text="S" />
      <Bounce size={s} spacing={sp} height={h} text="k" />
      <Bounce size={s} spacing={sp} height={h} text="i" />
      <Bounce size={s} spacing={sp} height={h} text="l" />
      <Bounce size={s} spacing={sp} height={h} text="l" />
      <Bounce size={s} spacing={sp} height={h} text="s" />
      <span>&nbsp</span>
      <span>&nbsp</span>
      <Bounce size={s} spacing={sp} height={h} text="&" />
      <br />
      <span style="margin: -10rem 0 0 0;">
        <Bounce size={s} spacing={sp} height={h} text="E" />
        <Bounce size={s} spacing={sp} height={h} text="x" />
        <Bounce size={s} spacing={sp} height={h} text="p" />
        <Bounce size={s} spacing={sp} height={h} text="e" />
        <Bounce size={s} spacing={sp} height={h} text="r" />
        <Bounce size={s} spacing={sp} height={h} text="i" />
        <Bounce size={s} spacing={sp} height={h} text="e" />
        <Bounce size={s} spacing={sp} height={h} text="n" />
        <Bounce size={s} spacing={sp} height={h} text="c" />
        <Bounce size={s} spacing={sp} height={h} text="e" />
      </span>
    </span>
    <p class="tag" style="margin: 1.5rem 0 0 -1rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
    <span class="head_alt">
      With expertise in modern programming languages and technologies like
      JavaScript, HTML5, CSS3, Sass, Axios, jQuery, AJAX, REST, React, React
      Native, Svelte, Tailwind, Python, C#, C++, and Git, I am able to develop
      professional web and mobile applications.
      <br />
      <br />
      In mobile app development, I created the WWF Wine Farm Guide app using React
      Native and Expo, delivering an intuitive user experience. I also contributed
      to large-scale projects, updating and maintaining design systems and component
      libraries for Sanlam. Additionally, I excelled in backend development and API
      integration, streamlining processes and enhancing user experience for a Takealot
      service website, RetailRockit.
      <br />
      <br />
      With a blend of artistic and technical skills, I consistently deliver visually
      stunning and functional solutions, staying updated with industry trends to
      remain at the forefront of technology. Passionate about programming, I am eager
      to contribute my expertise to your projects and create remarkable digital solutions.
    </span>
    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
  </div>
</main>

<style lang="scss">
  .container-text {
    width: 55%;
    height: min-content;
    display: flex;
    flex-direction: column;
    position: relative;
    align-self: center;
  }
</style>
