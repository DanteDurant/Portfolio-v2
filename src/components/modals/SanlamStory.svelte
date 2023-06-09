<script>
  import "./ModalStyles.scss";
  import Sanlam from "$lib/images/modals/sanlam.webp";
  import Bounce from "../text/Bounce.svelte";
  import ImageLoader from "$lib/images/ImageLoader.svelte";

  const s = "7rem";
  const sp = "-0.1rem";
</script>

<section class="modal-inner">
  <span class="modal-inner">
    <div class="modal-text">
      <p class="tag tag-first" style="margin: 0 0 1rem -3rem;">
        &lt;section&gt;
      </p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          distinctio, ipsam corrupti fugiat nam voluptatem optio porro, soluta
          fugit odio accusamus deleniti pariatur vero laudantium velit.
          Corporis, suscipit soluta. Voluptatem, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse aliquam nobis expedita! Quis, nihil
          tenetur fuga sunt praesentium quaerat nostrum aliquid eius iste
          architecto animi dolorum ullam voluptatum atque voluptates.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus
          velit ab, itaque ipsum voluptatem aliquam quis nihil.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p>
      </span>
      <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">
        &lt;section/&gt;
      </p>
    </div>
    <div class="modal-img">
      <div>
        <!-- <a href="http://sanlam-dsm.mlab.cx/ " target="_blank">
          <ImageLoader src={Sanlam} alt="Sanlam storybook landing page" />
        </a> -->
        <span>
          <a
            style="font-size: 5rem; text-align:center; line-height:5rem;"
            class="link center-parent"
            href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page"
            target="_blank"
          >
            website is down<br /> temporarily
          </a>
        </span>
      </div>
    </div>
  </span>
</section>

<style lang="scss">
  @media (max-width: 600px) {
    .modal-inner {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }
    .container-text {
      width: 85%;
      margin-bottom: -15rem;

      .head_alt {
        font-size: 2.2rem;
      }
      .tag-last,
      .tag-first {
        display: none;
      }
    }
    .container-img {
      padding: 0;
      width: 85%;
      align-self: center;
    }
  }
</style>
