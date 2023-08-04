<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { modalState } from "./store";

  import Circle from "../../lib/images/logos/circle.png";
  import Design from "../../lib/images/thumbs/design.webp";
  import Sanlam from "../../lib/images/thumbs/sanlam.webp";
  import Rocket from "../../lib/images/thumbs/rocket.webp";
  import Wine from "../../lib/images/thumbs/wwf-wine.webp";
  import Woolies from "../../lib/images/thumbs/woolies.webp";

  import SanlamDS from "../modals/SanlamDS.svelte";
  import SanlamStory from "../modals/SanlamStory.svelte";
  import RetailRocket from "../modals/RetailRocket.svelte";
  import WineChampion from "../modals/WineChampion.svelte";
  import WooliesMTD from "../modals/Woolies.svelte";

  import Modal from "../modals/Modal.svelte";
  import ImageLoader from "../../utility/ImageLoader.svelte";

  let currentModal = null;

  const setModalState = (state) => {
    modalState.set(state);
  };

  const dispatch = createEventDispatcher();

  const openModal = (modal) => {
    currentModal = modal;
    setModalState(true);
    let scrollPosition = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
  };

  const closeModal = () => {
    setModalState(false);
    const scrollPosition = Math.abs(parseInt(document.body.style.top));
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  };

  const handleModalClose = () => {
    closeModal();
  };

  onMount(() => {
    dispatch("modalclose", handleModalClose);
  });
</script>

<div class="image-grid">
  <Modal isOpen={$modalState} onClose={closeModal}>
    {#if currentModal === SanlamDS}
      <SanlamDS on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === SanlamStory}
      <SanlamStory on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === WineChampion}
      <WineChampion on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === RetailRocket}
      <RetailRocket on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === WooliesMTD}
      <WooliesMTD on:modalclose={handleModalClose} />
    {/if}
  </Modal>

  <span>
    <button on:click={() => openModal(SanlamDS)} class="image-box">
      <span class="image">
        <ImageLoader src={Design} alt="Sanlam design system" />
      </span>
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(SanlamStory)} class="image-box">
      <span class="image">
        <ImageLoader src={Sanlam} alt="Sanlam storybook" />
      </span>
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(WineChampion)} class="image-box">
      <span class="image">
        <ImageLoader src={Wine} alt="wwf wine logo" />
      </span>
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(RetailRocket)} class="image-box">
      <span class="image">
        <ImageLoader src={Rocket} alt="Retail Rocket logo" />
      </span>
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(WooliesMTD)} class="image-box">
      <span class="image">
        <ImageLoader src={Woolies} alt="Woolworths MTD logo" />
      </span>
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <p class="tag" style="top: -4rem">&lt;section&gt;</p>
  <p class="tag" style="bottom: -4.5rem">&lt;section/&gt;</p>
</div>

<style lang="scss">
  span {
    overflow: hidden;
  }

  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .tag {
    position: absolute;
    left: 2rem;
  }

  .image-grid {
    position: relative;
    margin: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    grid-auto-rows: 1fr;
  }

  .popup {
    transition: all 200ms ease;
    width: 11rem;
    opacity: 0;
    scale: 0.3;
    filter: brightness(0.5);
  }

  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    transition: all 300ms ease;
    filter: brightness(0.5);

    &:hover {
      filter: brightness(1);
      transform: scale(1.05);

      .popup {
        z-index: 1;
        opacity: 1;
        scale: 1;
        filter: brightness(1);
      }
    }
  }

  .image-box .image {
    position: absolute;
    width: 102%;
    height: 102%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    .image-grid {
      grid-template-columns: 1fr 1fr !important;
      grid-auto-rows: minmax(auto, auto) !important;
      width: 80% !important;
      align-self: center;
      &:last-child {
        margin-bottom: 6rem !important;
      }
    }
  }
</style>
