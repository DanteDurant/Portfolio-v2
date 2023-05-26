<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { modalState } from "./store";

  import Sanlam from "../../lib/images/sanlam.webp";
  import Design from "../../lib/images/design.webp";
  import Rocket from "../../lib/images/rocket.webp";
  import Wine from "../../lib/images/wwf-wine.webp";
  import Stile from "../../lib/images/Stile.webp";
  import Circle from "../../lib/images/circle.png";

  import Modal from "../modals/Modal.svelte";
  import SanlamStory from "../modals/SanlamStory.svelte";
  import SanlamDS from "../modals/SanlamDS.svelte";
  import RetailRocket from "../modals/RetailRocket.svelte";
  import WineChampion from "../modals/WineChampion.svelte";
  import StileAlu from "../modals/StileAlu.svelte";

  let currentModal = null;

  const setModalState = (state) => {
    modalState.set(state);
  };

  const dispatch = createEventDispatcher();

  const openModal = (modal) => {
    currentModal = modal;
    setModalState(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalState(false);
    document.body.style.overflow = "auto";
    console.log("Close modal function called");
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
    {#if currentModal === SanlamStory}
      <SanlamStory on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === SanlamDS}
      <SanlamDS on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === RetailRocket}
      <RetailRocket on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === WineChampion}
      <WineChampion on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === StileAlu}
      <StileAlu on:modalclose={handleModalClose} />
    {/if}
  </Modal>

  <span>
    <button on:click={() => openModal(SanlamStory)} class="image-box">
      <img class="image" src={Sanlam} alt="Sanlam storybook" />
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(SanlamDS)} class="image-box">
      <img class="image" src={Design} alt="Sanlam design system" />
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(RetailRocket)} class="image-box">
      <img class="image" src={Rocket} alt="Retail Rocket logo" />
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(WineChampion)} class="image-box">
      <img class="image" src={Wine} alt="wwf wine logo" />
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>

  <span>
    <button on:click={() => openModal(StileAlu)} class="image-box">
      <img class="image" src={Stile} alt="Stile Aluminium logo " />
      <img src={Circle} class="popup" alt="view project" />
    </button>
  </span>
</div>
x

<style lang="scss">
  span {
    overflow: hidden;
  }

  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .image-grid {
    margin: 0 -4rem 0 -7.5rem;
    width: calc(100vw - 13rem);
    z-index: 1;
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
      transform: scale(1.1);

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
</style>
