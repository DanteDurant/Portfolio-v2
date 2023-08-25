<script lang="ts">
  import "./ModalStyles.scss";
  // import Storybook from "$lib/images/modals/storybook.webp";
  import StorybookLazy from "$lib/images/modals/lazy/storybook-lazy.jpeg";
  import Bounce from "../text/Bounce.svelte";
  import LazyImage from "../../utility/LazyImage.svelte";

  const s = "7rem";
  const sp = "-0.1rem";

  export let img: String;
</script>

<section class="modal-inner">
  <div class="modal-text">
    <p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">
      <Bounce delay={0} size={s} spacing={sp} text="S" />
      <Bounce delay={30} size={s} spacing={sp} text="a" />
      <Bounce delay={60} size={s} spacing={sp} text="n" />
      <Bounce delay={90} size={s} spacing={sp} text="l" />
      <Bounce delay={120} size={s} spacing={sp} text="a" />
      <Bounce delay={150} size={s} spacing={sp} text="m" />
    </span>
    <p class="tag" style="margin: -3.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Storybook</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt">
      <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>
        Working on the Sanlam Storybook, I enhanced this component library with
        a versatile theming feature. This new addition includes a theming token
        system, which automatically updates component styles according to
        predefined themes. Additionally, designers have the flexibility to
        modify and add colors through a custom Figma plugin, enabling seamless
        integration of their preferred color palettes into the components.
        <br />
        <br />
        The project was constructed utilizing React, Storybook, and Typescript. Testing
        was carried out using Cypress and Jest.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p>
    </span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p>
  </div>
  <div class="modal-img">
    <div>
      <LazyImage
        src={img}
        alt="Sanlam Storybook landing page"
        lazySrc={StorybookLazy}
      />
      <span>
        <p class="link" style="color: #fd2055;">
          Unfortunately I am unable to provide a link due to the strict
          security.
        </p>
      </span>
    </div>
  </div>
</section>
