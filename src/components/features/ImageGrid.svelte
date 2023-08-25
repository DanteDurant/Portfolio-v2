<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { modalState } from "./store";
  import type { Writable } from "svelte/store";

  import SanlamDS from "../modals/SanlamDS.svelte";
  import SanlamStory from "../modals/SanlamStory.svelte";
  import RetailRocket from "../modals/RetailRocket.svelte";
  import WineChampion from "../modals/WineChampion.svelte";
  import WooliesMTD from "../modals/Woolies.svelte";

  import Modal from "../modals/Modal.svelte";
  import ImageLoader from "../../utility/ImageLoader.svelte";

  let currentModal:
    | typeof SanlamDS
    | typeof SanlamStory
    | typeof RetailRocket
    | typeof WineChampion
    | typeof WooliesMTD
    | null = null;

  const modalStateWritable: Writable<boolean> = modalState;

  const setModalState = (state: boolean): void => {
    modalStateWritable.set(state);
  };

  const dispatch = createEventDispatcher<{ modalclose: () => void }>();

  const openModal = (modal: typeof currentModal): void => {
    currentModal = modal;
    setModalState(true);
    let scrollPosition: number = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
  };

  const closeModal = (): void => {
    setModalState(false);
    const scrollPosition: number = Math.abs(parseInt(document.body.style.top));
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  };

  const handleModalClose = (): void => {
    closeModal();
  };

  onMount((): void => {
    dispatch("modalclose", handleModalClose);
  });
  import Circle from "../../lib/images/logos/circle.png";
  import Design from "../../lib/images/thumbs/design.webp";
  import Sanlam from "../../lib/images/thumbs/sanlam.webp";
  import Rocket from "../../lib/images/thumbs/rocket.webp";
  import Wine from "../../lib/images/thumbs/wwf-wine.webp";
  import Woolies from "../../lib/images/thumbs/woolies.webp";

  import img1 from "../../lib/images/modals/sanlam.webp";
  import img2 from "../../lib/images/modals/storybook.webp";
  import img3 from "../../lib/images/modals/wwf.webp";
  import img4 from "../../lib/images/modals/rocket.webp";
  import img5 from "../../lib/images/modals/woolies.webp";

  import lazy1 from "../../lib/images/modals/lazy/sanlam-lazy.webp";
  import lazy2 from "../../lib/images/modals/lazy/storybook-lazy.webp";
  import lazy3 from "../../lib/images/modals/lazy/wwf-lazy.webp";
  import lazy4 from "../../lib/images/modals/lazy/rocket-lazy.webp";
  import lazy5 from "../../lib/images/modals/lazy/woolies-lazy.webp";
</script>

<svelte:head>
  <link rel="preload" as="image" href={Design} />
  <link rel="preload" as="image" href={Sanlam} />
  <link rel="preload" as="image" href={Rocket} />
  <link rel="preload" as="image" href={Wine} />
  <link rel="preload" as="image" href={Woolies} />
  <link rel="preload" as="image" href={Circle} />
  <link rel="preload" as="image" href={lazy1} />
  <link rel="preload" as="image" href={lazy2} />
  <link rel="preload" as="image" href={lazy3} />
  <link rel="preload" as="image" href={lazy4} />
  <link rel="preload" as="image" href={lazy5} />
  <link rel="preload" as="image" href={img1} />
  <link rel="preload" as="image" href={img2} />
  <link rel="preload" as="image" href={img3} />
  <link rel="preload" as="image" href={img4} />
  <link rel="preload" as="image" href={img5} />
</svelte:head>

<div class="image-grid">
  <Modal isOpen={$modalState} onClose={closeModal}>
    {#if currentModal === SanlamDS}
      <SanlamDS img={img1} lazy={lazy1} on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === SanlamStory}
      <SanlamStory img={img2} lazy={lazy2} on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === WineChampion}
      <WineChampion img={img3} lazy={lazy3} on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === RetailRocket}
      <RetailRocket img={img4} lazy={lazy4} on:modalclose={handleModalClose} />
    {/if}
    {#if currentModal === WooliesMTD}
      <WooliesMTD img={img5} lazy={lazy5} on:modalclose={handleModalClose} />
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
