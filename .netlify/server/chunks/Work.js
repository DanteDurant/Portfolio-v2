import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
import { I as ImageGrid } from "./ImageGrid.js";
const Work_svelte_svelte_type_style_lang = "";
const css = {
  code: '.head_alt.svelte-1s8svix{z-index:1}.bg-text.svelte-1s8svix{position:absolute;right:-8rem;top:-15rem;font-size:50rem;font-family:"coolvetica";font-weight:400;letter-spacing:-1rem;color:rgba(0, 0, 0, 0.25)}@media(min-width: 2560px){.bg-text.svelte-1s8svix{right:-5rem}}',
  map: null
};
const s = "6rem";
const sp = "-0.2rem";
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Work" class="main"><div class="container"><p class="bg-text svelte-1s8svix">Work</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>

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

    <p class="head_alt svelte-1s8svix">A small gallery of recent projects chosen by me. I&#39;ve done them all
      together with amazing people from companies <br>
      around the country. the list is a work in progress and there is more to come.<br>Interested to see some more? Visit my
      <a href="https://github.com/DanteDurant?tab=repositories" target="_blank">GitHub</a> page.
    </p>

    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
    <p class="tag" style="margin: 0 0 1rem -4rem;">&lt;section&gt;</p>

    ${validate_component(ImageGrid, "ImageGrid").$$render($$result, {}, {}, {})}

    <p class="tag" style="margin: 1.5rem 0 0 -4rem;">&lt;section/&gt;</p></div>
</main>`;
});
export {
  Work as W
};
