import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component, b as add_attribute, a as subscribe, d as createEventDispatcher } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
import { m as modalState } from "./store.js";
import { B as Button } from "./Button.js";
const Sanlam$1 = "/_app/immutable/assets/sanlam.bdd417a7.webp";
const Design = "/_app/immutable/assets/design.77391545.webp";
const Rocket$1 = "/_app/immutable/assets/rocket.eec22de5.webp";
const Wine = "/_app/immutable/assets/wwf-wine.d89c720e.webp";
const Woolies$1 = "/_app/immutable/assets/woolies.a2a722a1.webp";
const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxOTFCQjg4RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxOTFCQjg5RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDE5MUJCODZGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDE5MUJCODdGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f5KQ1AAAMJklEQVR42uydAYgU1xnH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";
const Modal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".fullscreen.svelte-1uud8n4{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.2);backdrop-filter:blur(2px);z-index:99;opacity:0;pointer-events:none;transition:opacity 0.3s ease}.open.svelte-1uud8n4{opacity:1;pointer-events:auto}.modal-outer.svelte-1uud8n4{position:relative;color:#fff;background-color:var(--bg);height:calc(100vh - 13rem);width:calc(100vw - 26em);margin-left:13rem;box-shadow:1px -2px 31px 2px rgb(0, 0, 0, 0.2);-webkit-box-shadow:1px -2px 31px 2px rgb(00, 0, 0, 0.2);-moz-box-shadow:1px -2px 31px 2px rgb(0, 0, 0, 0.2)}.close-button.svelte-1uud8n4{position:absolute;left:5rem;bottom:3.5rem;background-color:transparent;padding:0}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  let { onClose } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$5);
  return `<div class="${escape(null_to_empty(isOpen ? "fullscreen open" : "fullscreen"), true) + " svelte-1uud8n4"}"><div class="modal-outer svelte-1uud8n4">${slots.default ? slots.default({}) : ``}
    <button class="close-button svelte-1uud8n4">${validate_component(Button, "Button").$$render($$result, { text: "Return" }, {}, {})}</button></div>
</div>`;
});
const ModalStyles = "";
const Sanlam = "/_app/immutable/assets/sanlam.7b08b020.webp";
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-1kuj9kb{width:100%;height:100%}",
  map: null
};
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { left = 0 } = $$props;
  let { right = 0 } = $$props;
  let intersecting = false;
  let container;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  $$result.css.add(css$4);
  return `<div class="svelte-1kuj9kb"${add_attribute("this", container, 0)}>${slots.default ? slots.default({ intersecting }) : ``}
</div>`;
});
const Image_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "img.svelte-oos5x1{height:100%;width:100%;opacity:0;transition:opacity 1200ms ease-out}img.loaded.svelte-oos5x1{opacity:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let thisImage;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$3);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" class="${["svelte-oos5x1", ""].join(" ").trim()}"${add_attribute("this", thisImage, 0)}>`;
});
const ImageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let nativeLoading = false;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true }, {}, {
    default: ({ intersecting }) => {
      return `${intersecting || nativeLoading ? `${validate_component(Image, "Image").$$render($$result, { alt, src }, {}, {})}` : ``}`;
    }
  })}`;
});
const s$5 = "7rem";
const sp$5 = "-0.1rem";
const SanlamStory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
      <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$5,
      spacing: sp$5,
      text: "S"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$5,
      spacing: sp$5,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$5,
      spacing: sp$5,
      text: "n"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$5,
      spacing: sp$5,
      text: "l"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$5,
      spacing: sp$5,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$5,
      spacing: sp$5,
      text: "m"
    },
    {},
    {}
  )}</span>
      <p class="tag" style="margin: -3.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Storybook</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          distinctio, ipsam corrupti fugiat nam voluptatem optio porro, soluta
          fugit odio accusamus deleniti pariatur vero laudantium velit.
          Corporis, suscipit soluta. Voluptatem, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse aliquam nobis expedita! Quis, nihil
          tenetur fuga sunt praesentium quaerat nostrum aliquid eius iste
          architecto animi dolorum ullam voluptatum atque voluptates.
          <br>
          <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus
          velit ab, itaque ipsum voluptatem aliquam quis nihil.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
    <div class="con con-img"><div>
        <span><a style="font-size: 5rem; text-align:center; line-height:5rem;" class="link center-parent" href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page" target="_blank">website is down<br> temporarily
          </a></span></div></div></span>
</section>`;
});
const Clipboard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "main.svelte-1g55r9h{display:flex}p.svelte-1g55r9h{font-size:1.6rem}svg.svelte-1g55r9h{margin-left:1rem;color:var(--pri);cursor:pointer;transition:transform 300ms}svg.svelte-1g55r9h:hover{transform:scale(1.2)}svg.svelte-1g55r9h:active{transform:scale(0.9)}.text.svelte-1g55r9h{width:19rem;background-color:var(--bg-form);padding:0.6rem 1rem}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<main class="svelte-1g55r9h"><p class="text svelte-1g55r9h">${escape(text)}</p>
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 svelte-1g55r9h" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
</main>`;
});
const s$4 = "7rem";
const sp$4 = "-0.1rem";
const SanlamDS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$4,
      spacing: sp$4,
      text: "S"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$4,
      spacing: sp$4,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$4,
      spacing: sp$4,
      text: "n"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$4,
      spacing: sp$4,
      text: "l"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$4,
      spacing: sp$4,
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$4,
      spacing: sp$4,
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
    <div class="con-img"><div><a href="http://sanlam-dsm.mlab.cx/ " target="_blank">${validate_component(ImageLoader, "ImageLoader").$$render(
    $$result,
    {
      src: Sanlam,
      alt: "Sanlam DSM landing page"
    },
    {},
    {}
  )}</a>
        <span><a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank">http://sanlam-dsm.mlab.cx
          </a>
          ${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "sanlam" }, {}, {})}
          <div style="height: 1rem;"></div>
          ${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "q)gdLtP*gt8zpJKD" }, {}, {})}</span></div></div></span></section>`;
});
const Rocket = "/_app/immutable/assets/rocket.b18fd1ee.webp";
const s$3 = "7rem";
const sp$3 = "-0.1rem";
const RetailRocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><div class="con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$3,
      spacing: sp$3,
      text: "R"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$3,
      spacing: sp$3,
      text: "e"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$3,
      spacing: sp$3,
      text: "t"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$3,
      spacing: sp$3,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$3,
      spacing: sp$3,
      text: "i"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$3,
      spacing: sp$3,
      text: "l"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s$3,
      spacing: sp$3,
      text: "R"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s$3,
      spacing: sp$3,
      text: "o"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s$3,
      spacing: sp$3,
      text: "c"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 270,
      size: s$3,
      spacing: sp$3,
      text: "k"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 300,
      size: s$3,
      spacing: sp$3,
      text: "I"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 330,
      size: s$3,
      spacing: sp$3,
      text: "T"
    },
    {},
    {}
  )}</span>
    <p class="tag" style="margin: -3.3rem -6rem 0 39rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Supply Chain Finance Platform</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>In RetailRockIT, I played a key role as a backend developer, working
        with the Takealot API and integrating the CIPCI database via Thisisme
        API. The project focused on assisting businesses in financing bulk
        orders for stock consignment. I developed a system that efficiently
        extracted and verified user details, including full name, identification
        number, and business registry code. By leveraging the CIPCI database, I
        ensured the authenticity of the information and incorporated advanced
        features to compare identification photos. Through automation, manual
        intervention was reduced, leading to improved efficiency and
        productivity for the business.
        <br>
        <br>
        The project leveraged advanced technologies such as Svelte, Tailwind, Prisma,
        and Axios to boost its functionality.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="con-img"><div><a href="https://retailrockit.co.za/" target="_blank">${validate_component(ImageLoader, "ImageLoader").$$render(
    $$result,
    {
      src: Rocket,
      alt: "Retail rocket landing page"
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="https://retailrockit.co.za/" target="_blank">https://retailrockit.co.za/
        </a></span></div></div>
</section>`;
});
const Guide = "/_app/immutable/assets/wwf-guide.5080f0cb.webp";
const Farm = "/_app/immutable/assets/wwf-farm.539cf687.webp";
const Map = "/_app/immutable/assets/wwf-map.d71301bd.webp";
const Link = "https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US";
const s$2 = "7rem";
const sp$2 = "-0.1rem";
const WineChampion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con-text" style="transform: translateY(-4%);"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
      <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$2,
      spacing: sp$2,
      text: "W"
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
      text: "W"
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
      text: "F"
    },
    {},
    {}
  )}
        <span> </span>
        <span> </span>
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$2,
      spacing: sp$2,
      text: "C"
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
      text: "h"
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
      text: "a"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s$2,
      spacing: sp$2,
      text: "m"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s$2,
      spacing: sp$2,
      text: "p"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s$2,
      spacing: sp$2,
      text: "i"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 270,
      size: s$2,
      spacing: sp$2,
      text: "o"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 300,
      size: s$2,
      spacing: sp$2,
      text: "n"
    },
    {},
    {}
  )}</span>
      <p class="tag" style="margin: -2.3rem -6rem 0 48rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Wine Farm Guide</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>Developed using React Native and Expo, the WWF Farm Guide app was my
          first mobile app, built with meticulous attention to detail. This
          mobile app caters to wine enthusiasts in South Africa, providing a
          user-friendly interface to explore local wine farms. With features
          like a map, opening hours, and proximity tracking, users can
          effortlessly access farm information. The app also offers filters for
          availability, restaurants, accommodations, child-friendliness, bicycle
          routes, and walking trails. Innovative technology and attention to
          detail ensure a seamless and efficient experience for planning
          vineyard visits with the WWF Champion Wine Farm Guide app.
          <br>
          <br>
          React Native, Expo, and TypeScript powers this project, facilitating cross-platform
          development, and optimal code implementation.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
    <div class="con-img-alt"><div><div><a${add_attribute("href", Link, 0)} target="_blank">${validate_component(ImageLoader, "ImageLoader").$$render(
    $$result,
    {
      src: Guide,
      alt: "Guide screen of mobile app"
    },
    {},
    {}
  )}</a>
          <a${add_attribute("href", Link, 0)} target="_blank">${validate_component(ImageLoader, "ImageLoader").$$render(
    $$result,
    {
      src: Farm,
      alt: "Farm modal screen of mobile app"
    },
    {},
    {}
  )}</a>
          <a class="map"${add_attribute("href", Link, 0)} target="_blank">${validate_component(ImageLoader, "ImageLoader").$$render(
    $$result,
    {
      src: Map,
      alt: "Map screen of mobile app"
    },
    {},
    {}
  )}</a></div></div>
      <span><a class="link"${add_attribute("href", Link, 0)} target="_blank">https://play.google.com/wwfconservationchampions.com
        </a></span></div></span></section>`;
});
const Woolies = "/_app/immutable/assets/woolies.84fd6d53.webp";
const s$1 = "6.5rem";
const sp$1 = "-0.1rem";
const Woolies_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><span class="modal-inner"><div class="con con-text"><p class="tag" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
      <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
      <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$1,
      spacing: sp$1,
      text: "W"
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
      text: "O"
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
      text: "O"
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
      text: "L"
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
      text: "W"
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
      text: "O"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s$1,
      spacing: sp$1,
      text: "R"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s$1,
      spacing: sp$1,
      text: "T"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s$1,
      spacing: sp$1,
      text: "H"
    },
    {},
    {}
  )}
        ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 370,
      size: s$1,
      spacing: sp$1,
      text: "S"
    },
    {},
    {}
  )}</span>
      <p class="tag" style="margin: -3.6rem -6rem 0 45rem;">&lt;h2/&gt;</p>
      <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
      <h2>Making The Difference</h2>
      <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

      <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p>Working on Woolworth&#39;s Making the Difference platform (MTD), I was
          entrusted with the task of revamping and enhancing the site&#39;s Content
          Management System (CMS) for improved efficiency and customization.
          Leveraging the power of Prisma, a modern database toolkit, I embarked
          on a journey to recreate the CMS using a new headless CMS called
          Payload. With meticulous attention to detail, I successfully
          retrieved, modified, and seamlessly re-integrated all of the website&#39;s
          data into the Payload system. The result was a more user-friendly,
          highly customizable, and streamlined experience, empowering the
          content creators over at Woolworths more effectively do their work.
          <br>
          <br>
          During the construction of the CMS, I harnessed the power of innovative
          technologies like React, Payload, Mongoose, and Axios.
        </p>
        <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
      <p class="tag" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
    <div class="con con-img"><div><a href="https://mtd.woolworths.co.za/ " target="_blank">${validate_component(ImageLoader, "ImageLoader").$$render(
    $$result,
    {
      src: Woolies,
      alt: "Woolworth MTD landing page"
    },
    {},
    {}
  )}</a>
        <span><a class="link" href="https://mtd.woolworths.co.za/" target="_blank">https://mtd.woolworths.co.za/
          </a></span></div></div></span></section>`;
});
const ImageGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-1hh6ziy.svelte-1hh6ziy{overflow:hidden}button.svelte-1hh6ziy.svelte-1hh6ziy{width:100%;height:100%;cursor:pointer}.tag.svelte-1hh6ziy.svelte-1hh6ziy{position:absolute;left:2rem}.image-grid.svelte-1hh6ziy.svelte-1hh6ziy{position:relative;margin:0;width:100%;z-index:1;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0;grid-auto-rows:1fr}.popup.svelte-1hh6ziy.svelte-1hh6ziy{transition:all 200ms ease;width:11rem;opacity:0;scale:0.3;filter:brightness(0.5)}.image-box.svelte-1hh6ziy.svelte-1hh6ziy{display:flex;justify-content:center;align-items:center;aspect-ratio:1/1;transition:all 300ms ease;filter:brightness(0.5)}.image-box.svelte-1hh6ziy.svelte-1hh6ziy:hover{filter:brightness(1);transform:scale(1.05)}.image-box.svelte-1hh6ziy:hover .popup.svelte-1hh6ziy{z-index:1;opacity:1;scale:1;filter:brightness(1)}.image-box.svelte-1hh6ziy .image.svelte-1hh6ziy{position:absolute;width:102%;height:102%;object-fit:cover}",
  map: null
};
const ImageGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalState, $$unsubscribe_modalState;
  $$unsubscribe_modalState = subscribe(modalState, (value) => $modalState = value);
  let currentModal = null;
  const setModalState = (state) => {
    modalState.set(state);
  };
  createEventDispatcher();
  const closeModal = () => {
    setModalState(false);
    const scrollPosition = Math.abs(parseInt(document.body.style.top));
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  };
  $$result.css.add(css$1);
  $$unsubscribe_modalState();
  return `<div class="image-grid svelte-1hh6ziy">${validate_component(Modal, "Modal").$$render($$result, { isOpen: $modalState, onClose: closeModal }, {}, {
    default: () => {
      return `${currentModal === SanlamStory ? `${validate_component(SanlamStory, "SanlamStory").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === SanlamDS ? `${validate_component(SanlamDS, "SanlamDS").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === RetailRocket ? `${validate_component(RetailRocket, "RetailRocket").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === WineChampion ? `${validate_component(WineChampion, "WineChampion").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === Woolies_1 ? `${validate_component(Woolies_1, "WooliesMTD").$$render($$result, {}, {}, {})}` : ``}`;
    }
  })}

  <span class="svelte-1hh6ziy"><button class="image-box svelte-1hh6ziy"><span class="image svelte-1hh6ziy">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Design, alt: "Sanlam design system" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-1hh6ziy" alt="view project"></button></span>

  <span class="svelte-1hh6ziy"><button class="image-box svelte-1hh6ziy"><span class="image svelte-1hh6ziy">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Sanlam$1, alt: "Sanlam storybook" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-1hh6ziy" alt="view project"></button></span>

  <span class="svelte-1hh6ziy"><button class="image-box svelte-1hh6ziy"><span class="image svelte-1hh6ziy">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Wine, alt: "wwf wine logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-1hh6ziy" alt="view project"></button></span>

  <span class="svelte-1hh6ziy"><button class="image-box svelte-1hh6ziy"><span class="image svelte-1hh6ziy">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Rocket$1, alt: "Retail Rocket logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-1hh6ziy" alt="view project"></button></span>

  <span class="svelte-1hh6ziy"><button class="image-box svelte-1hh6ziy"><span class="image svelte-1hh6ziy">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Woolies$1, alt: "Woolworths MTD logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-1hh6ziy" alt="view project"></button></span>

  <p class="tag svelte-1hh6ziy" style="top: -4rem">&lt;section&gt;</p>
  <p class="tag svelte-1hh6ziy" style="bottom: -4.5rem">&lt;section/&gt;</p>
</div>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css = {
  code: '.aside-back.svelte-1njl8am{width:14rem;height:100vh;margin:0}.main.svelte-1njl8am{margin-left:0;width:100%;margin:0}.container-outer.svelte-1njl8am{display:flex;flex-direction:column;width:100%}.container-text.svelte-1njl8am{background-color:transparent;width:100%;height:33rem;display:flex;flex-direction:column;position:relative;align-self:center;overflow:hidden;margin:0}.container-text_inner.svelte-1njl8am{margin-left:5rem}.head_alt.svelte-1njl8am{z-index:1}.bg-text.svelte-1njl8am{position:absolute;right:-6rem;bottom:18rem;font-size:50rem;font-family:"coolvetica";font-weight:400;line-height:0;letter-spacing:-1rem;color:rgba(0, 0, 0, 0.25)}',
  map: null
};
const s = "6rem";
const sp = "-0.2rem";
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Work" class="main center-parent svelte-1njl8am"><span class="aside-back svelte-1njl8am"></span>
  <span class="container-outer svelte-1njl8am"><div class="container-text svelte-1njl8am"><p class="bg-text svelte-1njl8am">Work</p>
      <span class="container-text_inner svelte-1njl8am"><p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>

        <span class="head">${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "M" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "y" }, {}, {})}
          <span> </span>
          <span> </span>
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "P" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "r" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "t" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "f" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "l" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "i" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}</span>

        <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2/&gt;</p>
        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>

        <p class="head_alt svelte-1njl8am">A small gallery of recent projects chosen by me. I&#39;ve done them all
          together with amazing people from companies <br>
          around the country. the list is a work in progress and there is more to
          come.<br>Interested to see some more? Visit my
          <a href="https://github.com/DanteDurant?tab=repositories" target="_blank">GitHub</a> page.
        </p>

        <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p></span></div>

    ${validate_component(ImageGrid, "ImageGrid").$$render($$result, {}, {}, {})}</span>
</main>`;
});
export {
  Work as W
};
