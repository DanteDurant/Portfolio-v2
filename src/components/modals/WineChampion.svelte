<script lang="ts">
  import "./ModalStyles.scss";

  import wwfLazy from "$lib/images/modals/lazy/wwf-lazy.webp";
  import Bounce from "../text/Bounce.svelte";
  import LazyImage from "../../utility/LazyImage.svelte";

  const Link =
    "https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US";

  const s = "7rem";
  const sp = "-0.1rem";

  export let img: String;
</script>

<section class="modal-inner">
  <div class="modal-text" style="transform: translateY(-4%);">
    <p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">
      <Bounce delay={0} size={s} spacing={sp} text="W" />
      <Bounce delay={30} size={s} spacing={sp} text="W" />
      <Bounce delay={60} size={s} spacing={sp} text="F" />
      <span>&nbsp</span>
      <span>&nbsp</span>
      <Bounce delay={90} size={s} spacing={sp} text="C" />
      <Bounce delay={120} size={s} spacing={sp} text="h" />
      <Bounce delay={150} size={s} spacing={sp} text="a" />
      <Bounce delay={180} size={s} spacing={sp} text="m" />
      <Bounce delay={210} size={s} spacing={sp} text="p" />
      <Bounce delay={240} size={s} spacing={sp} text="i" />
      <Bounce delay={270} size={s} spacing={sp} text="o" />
      <Bounce delay={300} size={s} spacing={sp} text="n" />
    </span>
    <p class="tag" style="margin: -2.3rem -6rem 0 48rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Wine Farm Guide</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt">
      <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>
        Developed using React Native and Expo, the WWF Farm Guide app was my
        first mobile app, built with meticulous attention to detail. This mobile
        app caters to wine enthusiasts in South Africa, providing a
        user-friendly interface to explore local wine farms. With features like
        a map, opening hours, and proximity tracking, users can effortlessly
        access farm information. The app also offers filters for availability,
        restaurants, accommodations, child-friendliness, bicycle routes, and
        walking trails. Innovative technology and attention to detail ensure a
        seamless and efficient experience for planning vineyard visits with the
        WWF Champion Wine Farm Guide app.
        <br />
        <br />
        React Native, Expo, and TypeScript powers this project, facilitating cross-platform
        development, and optimal code implementation.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p>
    </span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p>
  </div>
  <div class="modal-img-alt">
    <a href={Link} target="_blank">
      <LazyImage src={img} alt="wwf wine app pages" lazySrc={wwfLazy} />
    </a>
    <span>
      <a class="link" href={Link} target="_blank"
        >https://play.google.com/wwfconservationchampions.com
      </a>
    </span>
  </div>
</section>

<style lang="scss">
  .modal-img-alt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 6rem;
    width: 60%;
    & div {
      display: flex;
      margin-bottom: 0.5rem;
      & div {
        gap: 1.2rem;
        & a {
          border-radius: 2rem;
          overflow: hidden;
          transition: all 300ms ease;
          filter: brightness(0.8);
          width: 100%;
          height: 100%;
          &:hover {
            filter: brightness(1);
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .modal-inner {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }
    .modal-text {
      width: 85%;
      margin-bottom: -10rem;

      .head_alt {
        font-size: 2.2rem;
      }
      .tag-last,
      .tag-first {
        display: none;
      }
    }
    .modal-img-alt {
      padding: 0;
      width: 85%;
      align-self: center;
      margin-bottom: 15rem;
      .link {
        font-size: 3rem;
      }
    }
  }
</style>
