<script>
  import BounceText from "../../components/text/BounceText.svelte";
  const height = "5.5rem";
</script>

<main id="Skills" class="main skills">
  <span class="aside-back" />
  <div class="container-text">
    <p class="tag" style="margin: 0 0 1rem -1rem;">&lt;h2&gt;</p>
    <span class="head">
      <BounceText {height} text="Skills &" />
      <BounceText {height} text="Experience" />
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
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p/&gt;</p>
  </div>
</main>

<style lang="scss">
  .container-text {
    width: 55%;
  }
</style>
