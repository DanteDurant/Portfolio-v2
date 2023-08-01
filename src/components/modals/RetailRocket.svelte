<script>
  import "./ModalStyles.scss";
  import Rocket from "$lib/images/modals/rocket.webp";
  import Bounce from "../text/Bounce.svelte";
  import ImageLoader from "$lib/images/ImageLoader.svelte";

  const s = "7rem";
  const sp = "-0.1rem";
</script>

<section class="modal-inner">
  <div class="modal-text">
    <p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">
      <Bounce delay={0} size={s} spacing={sp} text="R" />
      <Bounce delay={30} size={s} spacing={sp} text="e" />
      <Bounce delay={60} size={s} spacing={sp} text="t" />
      <Bounce delay={90} size={s} spacing={sp} text="a" />
      <Bounce delay={120} size={s} spacing={sp} text="i" />
      <Bounce delay={150} size={s} spacing={sp} text="l" />
      <Bounce delay={180} size={s} spacing={sp} text="R" />
      <Bounce delay={210} size={s} spacing={sp} text="o" />
      <Bounce delay={240} size={s} spacing={sp} text="c" />
      <Bounce delay={270} size={s} spacing={sp} text="k" />
      <Bounce delay={300} size={s} spacing={sp} text="I" />
      <Bounce delay={330} size={s} spacing={sp} text="T" />
    </span>
    <p class="tag" style="margin: -3.3rem -6rem 0 39rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Supply Chain Finance Platform</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt">
      <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>
        In RetailRockIT, I played a key role as a backend developer, working
        with the Takealot API and integrating the CIPCI database via Thisisme
        API. The project focused on assisting businesses in financing bulk
        orders for stock consignment. I developed a system that efficiently
        extracted and verified user details, including full name, identification
        number, and business registry code. By leveraging the CIPCI database, I
        ensured the authenticity of the information and incorporated advanced
        features to compare identification photos. Through automation, manual
        intervention was reduced, leading to improved efficiency and
        productivity for the business.
        <br />
        <br />
        The project leveraged advanced technologies such as Svelte, Tailwind, Prisma,
        and Axios to boost its functionality.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p>
    </span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p>
  </div>
  <div class="modal-img">
    <div>
      <a href="https://retailrockit.co.za/" target="_blank">
        <!-- <ImageLoader src={Rocket} alt="Retail rocket landing page" /> -->
        <img src={Rocket} alt="Retail rocket landing page" />
      </a>
      <span>
        <a class="link" href="https://retailrockit.co.za/" target="_blank"
          >https://retailrockit.co.za/
        </a>
      </span>
    </div>
  </div>
</section>
