import { c as create_ssr_component, v as validate_component, a as add_attribute, f as createEventDispatcher } from "./index2.js";
import { B as Button } from "./Button.js";
import { B as Bounce } from "./Bounce.js";
const Sanlam$1 = "/_app/immutable/assets/sanlam.bdd417a7.webp";
const Design = "/_app/immutable/assets/design.77391545.webp";
const Rocket$1 = "/_app/immutable/assets/rocket.eec22de5.webp";
const Wine = "/_app/immutable/assets/wwf-wine.d89c720e.webp";
const Stile = "/_app/immutable/assets/Stile.80f00a87.webp";
const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxOTFCQjg4RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxOTFCQjg5RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDE5MUJCODZGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDE5MUJCODdGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f5KQ1AAAMJklEQVR42uydAYgU1xnH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";
const Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fullscreen.svelte-vfmbqf{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.2);backdrop-filter:blur(2px);z-index:10;opacity:0;pointer-events:none;transition:opacity 0.3s ease}.open.svelte-vfmbqf{opacity:1;pointer-events:auto}.modal-outer.svelte-vfmbqf{position:relative;color:#fff;background-color:var(--bg);height:calc(100vh - 13rem);width:calc(100vw - 26em);margin-left:13rem;box-shadow:1px -2px 31px 2px rgb(0, 0, 0, 0.2);-webkit-box-shadow:1px -2px 31px 2px rgb(00, 0, 0, 0.2);-moz-box-shadow:1px -2px 31px 2px rgb(0, 0, 0, 0.2)}.close-button.svelte-vfmbqf{position:absolute;left:5rem;bottom:3.5rem;background-color:transparent;padding:0}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  let { onClose } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$1);
  return `


<div class="${["fullscreen svelte-vfmbqf", isOpen ? "open" : ""].join(" ").trim()}"><div class="modal-outer svelte-vfmbqf">${slots.default ? slots.default({}) : ``}
    <button class="close-button svelte-vfmbqf">${validate_component(Button, "Button").$$render($$result, { text: "Return" }, {}, {})}</button></div>
</div>`;
});
const styles = "";
const Sanlam = "/_app/immutable/assets/sanlam.7b08b020.webp";
const s$2 = "7rem";
const sp$2 = "-0.1rem";
const SanlamStory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$2,
      spacing: sp$2,
      text: "S"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$2,
      spacing: sp$2,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$2,
      spacing: sp$2,
      text: "n"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$2,
      spacing: sp$2,
      text: "l"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$2,
      spacing: sp$2,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$2,
      spacing: sp$2,
      text: "m"
    },
    {},
    {}
  )}</span>
      <p class="tag" style="margin: -2.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Design System Manager</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>As a key contributor to the Sanlam DSM project, I undertook various
          duties and responsibilities to enhance its functionality and visual
          appeal of the site, including adding documentation, rebuilding the
          landing page interface, replacing images, creating new components and
          the styling of the documentation sections. I focused on enhancing the
          visual appeal and usability of the design system, particularly by
          restructuring the text and improving the user interface of the landing
          page.
          <br>
          <br>
          The project incorporated a diverse set of advanced technologies, including
          Node.js, React, Docusaurus, and Axios.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
    <div class="con con-img"><div><a href="http://sanlam-dsm.mlab.cx/ " target="_blank"><img${add_attribute("src", Sanlam, 0)} alt="Sanlam DSM landing page"></a>
        <span><a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank">http://sanlam-dsm.mlab.cx
          </a></span></div></div></span>
</section>`;
});
const s$1 = "7rem";
const sp$1 = "-0.1rem";
const SanlamDS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$1,
      spacing: sp$1,
      text: "S"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$1,
      spacing: sp$1,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$1,
      spacing: sp$1,
      text: "n"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$1,
      spacing: sp$1,
      text: "l"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$1,
      spacing: sp$1,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$1,
      spacing: sp$1,
      text: "m"
    },
    {},
    {}
  )}</span>
      <p class="tag" style="margin: -2.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Design System Manager</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>As a key contributor to the Sanlam DSM project, I undertook various
          duties and responsibilities to enhance its functionality and visual
          appeal of the site, including adding documentation, rebuilding the
          landing page interface, replacing images, creating new components and
          the styling of the documentation sections. I focused on enhancing the
          visual appeal and usability of the design system, particularly by
          restructuring the text and improving the user interface of the landing
          page.
          <br>
          <br>
          The project incorporated a diverse set of advanced technologies, including
          Node.js, React, Docusaurus, and Axios.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
    <div class="con con-img"><div><a href="http://sanlam-dsm.mlab.cx/ " target="_blank"><img${add_attribute("src", Sanlam, 0)} alt="Sanlam DSM landing page"></a>
        <span><a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank">http://sanlam-dsm.mlab.cx
          </a></span></div></div></span>
</section>`;
});
const Rocket = "/_app/immutable/assets/rocket.b18fd1ee.webp";
const s = "7rem";
const sp = "-0.1rem";
const RetailRocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s,
      spacing: sp,
      text: "R"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s,
      spacing: sp,
      text: "e"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s,
      spacing: sp,
      text: "t"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s,
      spacing: sp,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s,
      spacing: sp,
      text: "i"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s,
      spacing: sp,
      text: "l"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s,
      spacing: sp,
      text: "R"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s,
      spacing: sp,
      text: "o"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s,
      spacing: sp,
      text: "c"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 270,
      size: s,
      spacing: sp,
      text: "k"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 300,
      size: s,
      spacing: sp,
      text: "I"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 330,
      size: s,
      spacing: sp,
      text: "T"
    },
    {},
    {}
  )}</span>
      <p class="tag" style="margin: -2.3rem -6rem 0 39rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Supply Chain Finance Platform</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>In RetailRockIT, I played a key role as a backend developer, working
          with the Takealot API and integrating the CIPCI database via Thisisme
          API. The project focused on assisting businesses in financing bulk
          orders for stock consignment. I developed a system that efficiently
          extracted and verified user details, including full name,
          identification number, and business registry code. By leveraging the
          CIPCI database, I ensured the authenticity of the information and
          incorporated advanced features to compare identification photos.
          Through automation, manual intervention was reduced, leading to
          improved efficiency and productivity for the business.
          <br>
          <br>
          The project leveraged advanced technologies such as Svelte, Tailwind, Prisma,
          and Axios to boost its functionality.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
    <div class="con con-img"><div><a href="http://sanlam-dsm.mlab.cx/ " target="_blank"><img${add_attribute("src", Rocket, 0)} alt="Sanlam DSM landing page"></a>
        <span><a class="link" href="https://retailrockit.co.za/ " target="_blank">https://retailrockit.co.za/
          </a></span></div></div></span>
</section>`;
});
const WineChampion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal"><h1>WWF Champion Wine Farm Guide</h1>
  <p>This is the content of the modal.</p>
  <a href="https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US" target="_blank">wwf-wine
  </a></section>`;
});
const StileAlu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal"><h1>STILE Aluminium</h1>
  <p>This is the content of the modal.</p>
  <a href="https://stile-aluminium.netlify.app" target="_blank">Stile </a></section>`;
});
const ImageGrid_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-vyqm8e.svelte-vyqm8e{overflow:hidden}button.svelte-vyqm8e.svelte-vyqm8e{width:100%;height:100%;cursor:pointer}.image-grid.svelte-vyqm8e.svelte-vyqm8e{margin:0 -4rem 0 -7.5rem;width:calc(100vw - 13rem);z-index:1;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0;grid-auto-rows:1fr}.popup.svelte-vyqm8e.svelte-vyqm8e{transition:all 200ms ease;width:11rem;opacity:0;scale:0.3;filter:brightness(0.5)}.image-box.svelte-vyqm8e.svelte-vyqm8e{display:flex;justify-content:center;align-items:center;aspect-ratio:1/1;transition:all 300ms ease;filter:brightness(0.5)}.image-box.svelte-vyqm8e.svelte-vyqm8e:hover{filter:brightness(1);transform:scale(1.1)}.image-box.svelte-vyqm8e:hover .popup.svelte-vyqm8e{z-index:1;opacity:1;scale:1;filter:brightness(1)}.image-box.svelte-vyqm8e .image.svelte-vyqm8e{position:absolute;width:102%;height:102%;object-fit:cover}",
  map: null
};
const ImageGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isModalOpen = false } = $$props;
  let currentModal = null;
  createEventDispatcher();
  const closeModal = () => {
    isModalOpen = false;
    document.body.style.overflow = "auto";
  };
  if ($$props.isModalOpen === void 0 && $$bindings.isModalOpen && isModalOpen !== void 0)
    $$bindings.isModalOpen(isModalOpen);
  $$result.css.add(css);
  return `<div class="image-grid svelte-vyqm8e">${validate_component(Modal, "Modal").$$render($$result, { isOpen: isModalOpen, onClose: closeModal }, {}, {
    default: () => {
      return `${currentModal === SanlamStory ? `${validate_component(SanlamStory, "SanlamStory").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === SanlamDS ? `${validate_component(SanlamDS, "SanlamDS").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === RetailRocket ? `${validate_component(RetailRocket, "RetailRocket").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === WineChampion ? `${validate_component(WineChampion, "WineChampion").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === StileAlu ? `${validate_component(StileAlu, "StileAlu").$$render($$result, {}, {}, {})}` : ``}`;
    }
  })}

  <span class="svelte-vyqm8e"><button class="image-box svelte-vyqm8e"><img class="image svelte-vyqm8e"${add_attribute("src", Sanlam$1, 0)} alt="Sanlam storybook">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-vyqm8e" alt="view project"></button></span>

  <span class="svelte-vyqm8e"><button class="image-box svelte-vyqm8e"><img class="image svelte-vyqm8e"${add_attribute("src", Design, 0)} alt="Sanlam design system">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-vyqm8e" alt="view project"></button></span>

  <span class="svelte-vyqm8e"><button class="image-box svelte-vyqm8e"><img class="image svelte-vyqm8e"${add_attribute("src", Rocket$1, 0)} alt="Retail Rocket logo">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-vyqm8e" alt="view project"></button></span>

  <span class="svelte-vyqm8e"><button class="image-box svelte-vyqm8e"><img class="image svelte-vyqm8e"${add_attribute("src", Wine, 0)} alt="wwf wine logo">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-vyqm8e" alt="view project"></button></span>

  <span class="svelte-vyqm8e"><button class="image-box svelte-vyqm8e"><img class="image svelte-vyqm8e"${add_attribute("src", Stile, 0)} alt="Stile Aluminium logo ">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-vyqm8e" alt="view project"></button></span></div>
x`;
});
export {
  ImageGrid as I
};
