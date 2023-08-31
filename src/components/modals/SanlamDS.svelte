<script lang="ts">
  import "./ModalStyles.scss";
  import Bounce from "../text/Bounce.svelte";
  import Clipboard from "../text/Clipboard.svelte";
  import LazyImage from "../../utility/LazyImage.svelte";

  const s = "7rem";
  const sp = "-0.1rem";

  export let img: string;
  export let lazy: string;
</script>

<section class="modal-inner">
  <div class="modal-text">
    <p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">
      <Bounce delay={0} size={s} spacing={sp} text="S" />
      <Bounce delay={30} size={s} spacing={sp} text="a" />
      <Bounce delay={60} size={s} spacing={sp} text="n" />
      <Bounce delay={90} size={s} spacing={sp} text="l" />
      <Bounce delay={120} size={s} spacing={sp} text="a" />
      <Bounce delay={150} size={s} spacing={sp} text="m" />
    </span>
    <p class="tag" style="margin: -2.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Design System Manager</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt">
      <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>
        As a key contributor to the Sanlam DSM project, I undertook various
        duties and responsibilities to enhance its functionality and visual
        appeal of the site, including adding documentation, rebuilding the
        landing page interface, replacing images, creating new components and
        the styling of the documentation sections. I focused on enhancing the
        visual appeal and usability of the design system, particularly by
        restructuring the text and improving the user interface of the landing
        page.
        <br />
        <br />
        The project incorporated a diverse set of advanced technologies, including
        Node.js, React, Docusaurus, and Axios.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p>
    </span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p>
  </div>
  <div class="modal-img">
    <div>
      <a href="http://sanlam-dsm.mlab.cx/ " target="_blank">
        <LazyImage src={img} alt="Sanlam DSM landing page" lazySrc={lazy} />
      </a>
      <span>
        <a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank"
          >http://sanlam-dsm.mlab.cx
        </a>
        <Clipboard text="sanlam" />
        <div style="height: 1rem;" />
        <Clipboard text="q)gdLtP*gt8zpJKD" />
      </span>
    </div>
  </div>
</section>
