import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, n as null_to_empty, a as subscribe, d as createEventDispatcher } from "./index2.js";
import { m as modalState } from "./store.js";
import { B as Bounce } from "./Bounce.js";
import { B as Button } from "./Button.js";
import { B as BounceText } from "./BounceText.js";
const ModalStyles = "";
const Clipboard_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "main.svelte-1g55r9h{display:flex}p.svelte-1g55r9h{font-size:1.6rem}svg.svelte-1g55r9h{margin-left:1rem;color:var(--pri);cursor:pointer;transition:transform 300ms}svg.svelte-1g55r9h:hover{transform:scale(1.2)}svg.svelte-1g55r9h:active{transform:scale(0.9)}.text.svelte-1g55r9h{width:19rem;background-color:var(--bg-form);padding:0.6rem 1rem}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$5);
  return `<main class="svelte-1g55r9h"><p class="text svelte-1g55r9h">${escape(text)}</p>
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 svelte-1g55r9h" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
</main>`;
});
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { lazySrc } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.lazySrc === void 0 && $$bindings.lazySrc && lazySrc !== void 0)
    $$bindings.lazySrc(lazySrc);
  return `${`<img${add_attribute("src", lazySrc, 0)} alt="Lazy Placeholder" class="lazy-image" style="width: 100%; height: auto; filter: blur(6px);">`}

<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", "image-real hidden", 0)} style="width: 100%; height: auto;">`;
});
const s$4 = "7rem";
const sp$4 = "-0.1rem";
const SanlamDS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { lazy } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  return `<section class="modal-inner"><div class="modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
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
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div><a href="http://sanlam-dsm.mlab.cx/ " target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: img,
      alt: "Sanlam DSM landing page",
      lazySrc: lazy
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank">http://sanlam-dsm.mlab.cx
        </a>
        ${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "sanlam" }, {}, {})}
        <div style="height: 1rem;"></div>
        ${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "q)gdLtP*gt8zpJKD" }, {}, {})}</span></div></div></section>`;
});
const s$3 = "7rem";
const sp$3 = "-0.1rem";
const SanlamStory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { lazy } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  return `<section class="modal-inner"><div class="modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$3,
      spacing: sp$3,
      text: "S"
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
      text: "a"
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
      text: "n"
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
      text: "l"
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
      text: "a"
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
      <p>Working on the Sanlam Storybook, I enhanced this component library with
        a versatile theming feature. This new addition includes a theming token
        system, which automatically updates component styles according to
        predefined themes. Additionally, designers have the flexibility to
        modify and add colors through a custom Figma plugin, enabling seamless
        integration of their preferred color palettes into the components.
        <br>
        <br>
        The project was constructed utilizing React, Storybook, and Typescript. Testing
        was carried out using Cypress and Jest.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div>${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: img,
      alt: "Sanlam Storybook landing page",
      lazySrc: lazy
    },
    {},
    {}
  )}
      <span><p class="link" style="color: #fd2055;">Unfortunately I am unable to provide a link due to the strict
          security.
        </p></span></div></div></section>`;
});
const s$2 = "7rem";
const sp$2 = "-0.1rem";
const RetailRocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { lazy } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  return `<section class="modal-inner"><div class="modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$2,
      spacing: sp$2,
      text: "R"
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
      text: "e"
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
      text: "t"
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
      text: "a"
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
      text: "i"
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
      text: "l"
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
      text: "R"
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
      text: "o"
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
      text: "c"
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
      text: "k"
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
      text: "I"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 330,
      size: s$2,
      spacing: sp$2,
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
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div><a href="https://retailrockit.co.za/" target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: img,
      alt: "retail rocket landing page",
      lazySrc: lazy
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="https://retailrockit.co.za/" target="_blank">https://retailrockit.co.za
        </a></span></div></div></section>`;
});
const Link = "https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US";
const s$1 = "7rem";
const sp$1 = "-0.1rem";
const WineChampion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { lazy } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  return `<section class="modal-inner"><div class="modal-text" style="transform: translateY(-4%);"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
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
      text: "W"
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
      size: s$1,
      spacing: sp$1,
      text: "C"
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
      text: "h"
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
      text: "a"
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
      text: "m"
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
      text: "p"
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
      text: "i"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 270,
      size: s$1,
      spacing: sp$1,
      text: "o"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 300,
      size: s$1,
      spacing: sp$1,
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
        first mobile app, built with meticulous attention to detail. This mobile
        app caters to wine enthusiasts in South Africa, providing a
        user-friendly interface to explore local wine farms. With features like
        a map, opening hours, and proximity tracking, users can effortlessly
        access farm information. The app also offers filters for availability,
        restaurants, accommodations, child-friendliness, bicycle routes, and
        walking trails. Innovative technology and attention to detail ensure a
        seamless and efficient experience for planning vineyard visits with the
        WWF Champion Wine Farm Guide app.
        <br>
        <br>
        React Native, Expo, and TypeScript powers this project, facilitating cross-platform
        development, and optimal code implementation.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div><a${add_attribute("href", Link, 0)} target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: img,
      alt: "wwf wine app pages",
      lazySrc: lazy
    },
    {},
    {}
  )}</a>
      <span><a class="link"${add_attribute("href", Link, 0)} target="_blank">https://play.google.com/wwfconservationchampions.com
        </a></span></div></div></section>`;
});
const s = "6.5rem";
const sp = "-0.1rem";
const Woolies$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { lazy } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  return `<section class="modal-inner"><div class="con modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s,
      spacing: sp,
      text: "W"
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
      text: "O"
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
      text: "O"
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
      text: "L"
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
      text: "W"
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
      text: "O"
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
      text: "T"
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
      text: "H"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 370,
      size: s,
      spacing: sp,
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
        Leveraging the power of Prisma, a modern database toolkit, I embarked on
        a journey to recreate the CMS using a new headless CMS called Payload.
        With meticulous attention to detail, I successfully retrieved, modified,
        and seamlessly re-integrated all of the website&#39;s data into the Payload
        system. The result was a more user-friendly, highly customizable, and
        streamlined experience, empowering the content creators over at
        Woolworths more effectively do their work.
        <br>
        <br>
        During the construction of the CMS, I harnessed the power of innovative technologies
        like React, Payload, Mongoose, and Axios.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="con modal-img"><div><a href="https://mtd.woolworths.co.za" target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: img,
      alt: "Woolworths MTD landing page",
      lazySrc: lazy
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="https://mtd.woolworths.co.za" target="_blank">https://mtd.woolworths.co.za
        </a></span></div></div></section>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".fullscreen.svelte-1tz82l3.svelte-1tz82l3{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.2);backdrop-filter:blur(2px);z-index:999;opacity:0;pointer-events:none;transition:opacity 0.3s ease}.open.svelte-1tz82l3.svelte-1tz82l3{opacity:1;pointer-events:auto}.modal-outer.svelte-1tz82l3.svelte-1tz82l3{position:relative;color:#fff;background-color:var(--bg);height:calc(100vh - 13rem);width:calc(100vw - 26em);margin-left:13rem;box-shadow:1px -2px 31px 2px rgba(0, 0, 0, 0.2);-webkit-box-shadow:1px -2px 31px 2px rgba(0, 0, 0, 0.2);-moz-box-shadow:1px -2px 31px 2px rgba(0, 0, 0, 0.2)}.close-button.svelte-1tz82l3.svelte-1tz82l3{position:absolute;left:5rem;bottom:3.5rem;background-color:transparent;padding:0}@media(max-width: 600px){.modal-outer.svelte-1tz82l3.svelte-1tz82l3{margin:5rem;height:calc(100dvh - 16rem);align-self:end;width:100%;margin:0}.modal-outer.svelte-1tz82l3 .close-button.svelte-1tz82l3{left:53rem;bottom:5rem}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  let { onClose } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$4);
  return `<div class="${escape(null_to_empty(isOpen ? "fullscreen open" : "fullscreen"), true) + " svelte-1tz82l3"}"><div class="modal-outer svelte-1tz82l3">${slots.default ? slots.default({}) : ``}
    <button class="close-button svelte-1tz82l3">${validate_component(Button, "Button").$$render($$result, { text: "Return" }, {}, {})}</button></div>
</div>`;
});
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const css$3 = {
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
  $$result.css.add(css$3);
  return `<div class="svelte-1kuj9kb"${add_attribute("this", container, 0)}>${slots.default ? slots.default({ intersecting }) : ``}
</div>`;
});
const Image_svelte_svelte_type_style_lang = "";
const css$2 = {
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
  $$result.css.add(css$2);
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
const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxOTFCQjg4RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxOTFCQjg5RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDE5MUJCODZGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDE5MUJCODdGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f5KQ1AAAMJklEQVR42uydAYgU1xnH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";
const Design = "/_app/immutable/assets/design.77391545.webp";
const Sanlam = "/_app/immutable/assets/sanlam.bdd417a7.webp";
const Rocket = "/_app/immutable/assets/rocket.eec22de5.webp";
const Wine = "/_app/immutable/assets/wwf-wine.d89c720e.webp";
const Woolies = "/_app/immutable/assets/woolies.a2a722a1.webp";
const img1 = "/_app/immutable/assets/sanlam.7b08b020.webp";
const img2 = "/_app/immutable/assets/storybook.77bb849c.webp";
const img3 = "/_app/immutable/assets/wwf.e5e9eb49.webp";
const img4 = "/_app/immutable/assets/rocket.b18fd1ee.webp";
const img5 = "/_app/immutable/assets/woolies.84fd6d53.webp";
const lazy1 = "data:image/webp;base64,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";
const lazy2 = "data:image/webp;base64,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";
const lazy3 = "/_app/immutable/assets/wwf-lazy.3a29f0c3.webp";
const lazy4 = "data:image/webp;base64,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";
const lazy5 = "data:image/webp;base64,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";
const ImageGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-19thqoj.svelte-19thqoj{overflow:hidden}button.svelte-19thqoj.svelte-19thqoj{width:100%;height:100%;cursor:pointer}.tag.svelte-19thqoj.svelte-19thqoj{position:absolute;left:2rem}.image-grid.svelte-19thqoj.svelte-19thqoj{position:relative;margin:0;width:100%;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0;grid-auto-rows:1fr}.popup.svelte-19thqoj.svelte-19thqoj{transition:all 200ms ease;width:11rem;opacity:0;scale:0.3;filter:brightness(0.5)}.image-box.svelte-19thqoj.svelte-19thqoj{display:flex;justify-content:center;align-items:center;aspect-ratio:1/1;transition:all 300ms ease;filter:brightness(0.5)}.image-box.svelte-19thqoj.svelte-19thqoj:hover{filter:brightness(1);transform:scale(1.05)}.image-box.svelte-19thqoj:hover .popup.svelte-19thqoj{z-index:1;opacity:1;scale:1;filter:brightness(1)}.image-box.svelte-19thqoj .image.svelte-19thqoj{position:absolute;width:102%;height:102%;object-fit:cover}@media(max-width: 600px){.image-grid.svelte-19thqoj.svelte-19thqoj{grid-template-columns:1fr 1fr !important;grid-auto-rows:minmax(auto, auto) !important;width:80% !important;align-self:center}.image-grid.svelte-19thqoj.svelte-19thqoj:last-child{margin-bottom:6rem !important}}",
  map: null
};
const ImageGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalState, $$unsubscribe_modalState;
  $$unsubscribe_modalState = subscribe(modalState, (value) => $modalState = value);
  let currentModal = null;
  const modalStateWritable = modalState;
  const setModalState = (state) => {
    modalStateWritable.set(state);
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
  return `${$$result.head += `<!-- HEAD_svelte-nio89o_START --><link rel="preload" as="image"${add_attribute("href", Design, 0)}><link rel="preload" as="image"${add_attribute("href", Sanlam, 0)}><link rel="preload" as="image"${add_attribute("href", Rocket, 0)}><link rel="preload" as="image"${add_attribute("href", Wine, 0)}><link rel="preload" as="image"${add_attribute("href", Woolies, 0)}><link rel="preload" as="image"${add_attribute("href", Circle, 0)}><link rel="preload" as="image"${add_attribute("href", lazy1, 0)}><link rel="preload" as="image"${add_attribute("href", lazy2, 0)}><link rel="preload" as="image"${add_attribute("href", lazy3, 0)}><link rel="preload" as="image"${add_attribute("href", lazy4, 0)}><link rel="preload" as="image"${add_attribute("href", lazy5, 0)}><link rel="preload" as="image"${add_attribute("href", img1, 0)}><link rel="preload" as="image"${add_attribute("href", img2, 0)}><link rel="preload" as="image"${add_attribute("href", img3, 0)}><link rel="preload" as="image"${add_attribute("href", img4, 0)}><link rel="preload" as="image"${add_attribute("href", img5, 0)}><!-- HEAD_svelte-nio89o_END -->`, ""}

<div class="image-grid svelte-19thqoj">${validate_component(Modal, "Modal").$$render($$result, { isOpen: $modalState, onClose: closeModal }, {}, {
    default: () => {
      return `${currentModal === SanlamDS ? `${validate_component(SanlamDS, "SanlamDS").$$render($$result, { img: img1, lazy: lazy1 }, {}, {})}` : ``}
    ${currentModal === SanlamStory ? `${validate_component(SanlamStory, "SanlamStory").$$render($$result, { img: img2, lazy: lazy2 }, {}, {})}` : ``}
    ${currentModal === WineChampion ? `${validate_component(WineChampion, "WineChampion").$$render($$result, { img: img3, lazy: lazy3 }, {}, {})}` : ``}
    ${currentModal === RetailRocket ? `${validate_component(RetailRocket, "RetailRocket").$$render($$result, { img: img4, lazy: lazy4 }, {}, {})}` : ``}
    ${currentModal === Woolies$1 ? `${validate_component(Woolies$1, "WooliesMTD").$$render($$result, { img: img5, lazy: lazy5 }, {}, {})}` : ``}`;
    }
  })}

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Design, alt: "Sanlam design system" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Sanlam, alt: "Sanlam storybook" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Wine, alt: "wwf wine logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Rocket, alt: "Retail Rocket logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Woolies, alt: "Woolworths MTD logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <p class="tag svelte-19thqoj" style="top: -4rem">&lt;section&gt;</p>
  <p class="tag svelte-19thqoj" style="bottom: -4.5rem">&lt;section/&gt;</p>
</div>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container-outer.svelte-a5tjwi.svelte-a5tjwi{display:flex;flex-direction:column;width:100%}.container-text.svelte-a5tjwi.svelte-a5tjwi{width:100%;height:33rem;display:flex;position:relative;margin:0}.container-text_inner.svelte-a5tjwi.svelte-a5tjwi{margin-left:9rem}.container-text.svelte-a5tjwi .head_alt.svelte-a5tjwi{width:80rem}.bg-text.svelte-a5tjwi.svelte-a5tjwi{position:absolute;right:0;bottom:10rem;font-size:50rem;font-family:"coolvetica";font-weight:400;line-height:0;letter-spacing:-1rem;color:rgba(0, 0, 0, 0.25);z-index:0}@media(max-width: 600px){.work.svelte-a5tjwi.svelte-a5tjwi{height:100dvh;width:100vw;overflow:hidden}.work.svelte-a5tjwi .container-outer.svelte-a5tjwi{margin-bottom:-20rem}.work.svelte-a5tjwi .container-outer .container-text.svelte-a5tjwi{width:80%;overflow:visible}.work.svelte-a5tjwi .container-outer .container-text .bg-text.svelte-a5tjwi{font-size:49rem;left:-20rem;bottom:18rem}.work.svelte-a5tjwi .container-outer .container-text_inner.svelte-a5tjwi{margin:0}.work.svelte-a5tjwi .container-outer .container-text .head_alt.svelte-a5tjwi{width:100%}}',
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Work" class="main work center-parent svelte-a5tjwi"><span class="aside-back"></span>
  <span class="container-outer svelte-a5tjwi"><div class="container-text svelte-a5tjwi"><p class="bg-text svelte-a5tjwi">Work</p>
      <span class="container-text_inner svelte-a5tjwi"><p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>

        <span class="head work svelte-a5tjwi">${validate_component(BounceText, "BounceText").$$render($$result, { text: "My Portfolio" }, {}, {})}</span>

        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;h2/&gt;</p>
        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>

        <p class="head_alt svelte-a5tjwi">A small gallery of recent projects chosen by me. I&#39;ve done them all
          together with amazing people from companies around the country. the
          list is a work in progress and there is more to come.<br>Interested
          to see some more? Visit my
          <a href="https://github.com/DanteDurant?tab=repositories" target="_blank">GitHub</a> page.
        </p>

        <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p></span></div>

    ${validate_component(ImageGrid, "ImageGrid").$$render($$result, {}, {}, {})}</span>
</main>`;
});
export {
  Work as W
};
