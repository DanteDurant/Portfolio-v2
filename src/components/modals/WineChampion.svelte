<script lang="ts">
  import "./ModalStyles.scss";
  import Bounce from "../text/Bounce.svelte";
  import LazyImage from "../../utility/LazyImage.svelte";

  const Link =
    "https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US";

  const s = "7rem";
  const sp = "-0.1rem";

  export let img: String;
  export let lazy: String;
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
  <div class="modal-img">
    <div>
      <a href={Link} target="_blank">
        <LazyImage src={img} alt="wwf wine app pages" lazySrc={lazy} />
      </a>
      <span>
        <a class="link" href={Link} target="_blank"
          >https://play.google.com/wwfconservationchampions.com
        </a>
      </span>
    </div>
  </div>
</section>
