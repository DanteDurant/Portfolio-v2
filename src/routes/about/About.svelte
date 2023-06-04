<script>
  import Bounce from "../../components/text/Bounce.svelte";
  import TagCloud from "../../components/features/TagCloud.svelte";
  const s = "6rem";
  const sp = "-0.2rem";
</script>

<main id="About" class="main about">
  <span class="aside-back" />
  <div class="container-text">
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
    <span class="head">
      <Bounce size={s} spacing={sp} text="M" />
      <Bounce size={s} spacing={sp} text="e" />
      <Bounce size={s} spacing={sp} text="," />
      <span>&nbsp</span>
      <span>&nbsp</span>
      <Bounce size={s} spacing={sp} text="M" />
      <Bounce size={s} spacing={sp} text="y" />
      <Bounce size={s} spacing={sp} text="s" />
      <Bounce size={s} spacing={sp} text="e" />
      <Bounce size={s} spacing={sp} text="l" />
      <Bounce size={s} spacing={sp} text="f" />
      <span>&nbsp</span>
      <span>&nbsp</span>
      <Bounce size={s} spacing={sp} text="a" />
      <Bounce size={s} spacing={sp} text="n" />
      <Bounce size={s} spacing={sp} text="d" />
      <span>&nbsp</span>
      <span>&nbsp</span>
      <Bounce size={s} spacing={sp} text="I" />
    </span>
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
    <span class="head_alt">
      Dedicated, disciplined, and dependable professional with an unwavering
      commitment to excellence. I possess a diplomatic and solution-oriented
      mindset, always going above and beyond to achieve remarkable results. As a
      natural team player, I embrace collaboration and possess inherent
      leadership qualities that contribute to the success of any project.
      <br /><br />
      A critical thinker and passionate problem solver, I continuously strive to
      enhance my abilities, skills, and knowledge. My insatiable curiosity drives
      me to delve into computer science textbooks, exploring various languages and
      frameworks, as well as staying updated on the latest technology-related innovations.
      Beyond the realm of web development, I find great interest in psychology, philosophy
      and neuroscience.
      <br /><br />
      One of my key strengths lies in my exceptional communication skills, enabling
      me to foster transparency and maintain consistency within the work environment.
      I firmly believe that an environment built on integrity and trust is crucial
      for fostering growth and achieving positive outcomes.
    </span>
    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
  </div>
  <span class="tagcloud center-parent">
    <TagCloud />
  </span>
</main>

<style lang="scss">
  .main {
    width: 100%;
    margin: 0;
  }
  .aside-back {
    width: 13rem;
    height: 100vh;
  }
  .container-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 40%;
    margin-left: 9rem;
  }
  .aside-back {
    width: 13rem;
    height: 100vh;
  }

  .tagcloud {
    width: 60%;
  }
</style>
