<script>
  import san1 from "$lib/images/modals/sanlam-1.webp";
  import Bounce from "../text/Bounce.svelte";

  const s = "7rem";
  const sp = "-0.1rem";
</script>

<section class="modal-inner">
  <!-- <span>
    <span class="text-con">
      <p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="head">
        <Bounce size={s} spacing={sp} text="S" />
        <Bounce size={s} spacing={sp} text="a" />
        <Bounce size={s} spacing={sp} text="n" />
        <Bounce size={s} spacing={sp} text="l" />
        <Bounce size={s} spacing={sp} text="a" />
        <Bounce size={s} spacing={sp} text="m" />
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
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p>
    </span>
    <span class="img-con">
      <span>
        <a href="http://sanlam-dsm.mlab.cx/ " target="_blank">
          <img class="img-1" src={san1} alt="Sanlam DSM landing page" />
        </a>
        <a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank"
          >http://sanlam-dsm.mlab.cx
        </a>
      </span>
    </span>
  </span> -->
  <span class="modal-inner">
    <div class="con con-text">
      <p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="head">
        <Bounce size={s} spacing={sp} text="S" />
        <Bounce size={s} spacing={sp} text="a" />
        <Bounce size={s} spacing={sp} text="n" />
        <Bounce size={s} spacing={sp} text="l" />
        <Bounce size={s} spacing={sp} text="a" />
        <Bounce size={s} spacing={sp} text="m" />
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
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p>
    </div>
    <div class="con con-img">
      <div>
        <a href="http://sanlam-dsm.mlab.cx/ " target="_blank">
          <img src={san1} alt="Sanlam DSM landing page" />
        </a>
        <a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank"
          >http://sanlam-dsm.mlab.cx
        </a>
      </div>
    </div>
  </span>
</section>

<style lang="scss">
  .modal-inner {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .head {
    color: white;
  }

  .con-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 40%;
    // background-color: rgba(0, 255, 255, 0.164);
    padding: 0 6rem 0 6rem;
    transform: translateY(-6%);
  }
  .con-img {
    height: 100%;
    width: 60%;
    // background-color: rgba(255, 0, 0, 0.201);
    padding-right: 6rem;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      & a {
        width: 100%;
        & img {
          width: 100%;
          transition: all 300ms ease;
          filter: brightness(0.8);
          box-shadow: 1px -2px 31px 2px rgba(0, 0, 0, 0.5);
          -webkit-box-shadow: 1px -2px 31px 2px rgba(0, 0, 0, 0.5);
          -moz-box-shadow: 1px -2px 31px 2px rgba(0, 0, 0, 0.5);
          &:hover {
            filter: brightness(1);
          }
        }
      }
    }
  }

  .link {
    align-self: center;
    font-size: 2rem;
    font-family: "La Belle Aurore";
  }
  // .head {
  //   color: white;

  //   &_alt {
  //     width: 50rem;
  //   }
  // }

  // @media (min-width: 2560px) {
  //   .head_alt {
  //     width: 70rem;
  //   }
  // }

  // .modal-inner {
  //   position: relative;
  //   width: 100%;
  //   height: 100%;
  // }
  // .text-con {
  //   position: absolute;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   margin: -5rem 0 0 7rem;
  //   // background-color: purple;
  //   height: 100%;
  // }

  // h2 {
  //   font-size: 2rem;
  // }
  // a {
  //   margin-left: 1rem;
  //   font-size: 1.6rem;
  // }

  // .img-con {
  //   position: absolute;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: end;
  //   width: 100%;
  //   height: 100%;

  //   & img {
  //     margin-right: 6rem;
  //     margin-top: -2rem;
  //     height: auto;
  //     width: 72rem;
  //     transition: all 300ms ease;
  //     filter: brightness(0.7);
  //     box-shadow: 1px -2px 31px 2px rgba(0, 0, 0, 0.5);
  //     -webkit-box-shadow: 1px -2px 31px 2px rgba(0, 0, 0, 0.5);
  //     -moz-box-shadow: 1px -2px 31px 2px rgba(0, 0, 0, 0.5);

  //     &:hover {
  //       filter: brightness(1);
  //     }
  //   }

  //   @media (min-width: 2560px) {
  //     img {
  //       width: 100rem;
  //     }
  //   }

  //   & span {
  //     display: flex;
  //     flex-direction: column;
  //     & .link {
  //       align-self: center;
  //       font-size: 2rem;
  //       margin: 0 3rem 0 0;
  //       font-family: "La Belle Aurore";
  //     }
  //   }
  // }
</style>
