<script>
  import "./ModalStyles.scss";
  import Woolies from "$lib/images/modals/woolies.webp";
  import Bounce from "../text/Bounce.svelte";
  import ImageLoader from "$lib/images/ImageLoader.svelte";

  const s = "6.5rem";
  ``;
  const sp = "-0.1rem";
</script>

<section class="modal-inner">
  <span class="modal-inner">
    <div class="con modal-text">
      <p class="tag tag-first" style="margin: 0 0 1rem -3rem;">
        &lt;section&gt;
      </p>
      <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
      <span class="modal-head">
        <Bounce delay={0} size={s} spacing={sp} text="W" />
        <Bounce delay={30} size={s} spacing={sp} text="O" />
        <Bounce delay={60} size={s} spacing={sp} text="O" />
        <Bounce delay={90} size={s} spacing={sp} text="L" />
        <Bounce delay={120} size={s} spacing={sp} text="W" />
        <Bounce delay={150} size={s} spacing={sp} text="O" />
        <Bounce delay={180} size={s} spacing={sp} text="R" />
        <Bounce delay={210} size={s} spacing={sp} text="T" />
        <Bounce delay={240} size={s} spacing={sp} text="H" />
        <Bounce delay={370} size={s} spacing={sp} text="S" />
      </span>
      <p class="tag" style="margin: -3.6rem -6rem 0 45rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Making The Difference</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt">
        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>
          Working on Woolworth's Making the Difference platform (MTD), I was
          entrusted with the task of revamping and enhancing the site's Content
          Management System (CMS) for improved efficiency and customization.
          Leveraging the power of Prisma, a modern database toolkit, I embarked
          on a journey to recreate the CMS using a new headless CMS called
          Payload. With meticulous attention to detail, I successfully
          retrieved, modified, and seamlessly re-integrated all of the website's
          data into the Payload system. The result was a more user-friendly,
          highly customizable, and streamlined experience, empowering the
          content creators over at Woolworths more effectively do their work.
          <br />
          <br />
          During the construction of the CMS, I harnessed the power of innovative
          technologies like React, Payload, Mongoose, and Axios.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p>
      </span>
      <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">
        &lt;section/&gt;
      </p>
    </div>
    <div class="con modal-img">
      <div>
        <a href="https://mtd.woolworths.co.za/ " target="_blank">
          <ImageLoader src={Woolies} alt="Woolworth MTD landing page" />
        </a>
        <span>
          <a class="link" href="https://mtd.woolworths.co.za/" target="_blank"
            >https://mtd.woolworths.co.za/
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
    .modal-text {
      width: 85%;
      margin-bottom: -35rem;

      .head_alt {
        font-size: 2.2rem;
      }
      .tag-last,
      .tag-first {
        display: none;
      }
    }
    .modal-img {
      padding: 0;
      width: 85%;
      align-self: center;
      margin-bottom: -5rem;

      .link {
        font-size: 3rem;
      }
    }
  }
</style>
