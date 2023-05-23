<script>
  import san1 from "$lib/images/modals/sanlam-1.webp";
  import san2 from "$lib/images/modals/sanlam-2.webp";
  import Button from "../Button.svelte";
</script>

<section class="modal-inner">
  <span>
    <span class="text-con">
      <h1>Sanlam</h1>
      <h2>Design System Manager</h2>
    </span>
    <span class="img-con">
      <img class="img-1" src={san1} alt="Sanlam DSM landing page" />
    </span>
    <!-- <a class="button-con" href="http://sanlam-dsm.mlab.cx/" target="_blank">
      <Button text="Website" />
    </a> -->
  </span>
</section>

<style lang="scss">
  .modal-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .text-con {
    position: absolute;
    display: flex;
    align-items: center;
    // margin-right: 22rem;
    margin-left: 2.5rem;
    margin-top: 2rem;
    // right: 0;
    // max-width: max-content;
    // background-color: red;
  }

  h1 {
    font-size: 5rem;
    // line-height: 1rem;
  }
  a {
    margin-left: 1rem;
    font-size: 1.6rem;
  }

  .img-con {
    position: absolute;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 100%;

    & img {
      margin-right: 5rem;
      // margin-top: -2rem;
      height: auto;
      width: 72rem;
    }
  }

  // .button-con {
  //   position: absolute;
  //   right: 55rem;
  //   bottom: 3.5rem;
  // }

  .img-1 {
    height: 50rem;
  }
</style>
