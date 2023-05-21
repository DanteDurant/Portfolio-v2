import { c as create_ssr_component, a as add_attribute, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
const Sanlam = "/_app/immutable/assets/sanlam.ac2f68e6.png";
const Design = "/_app/immutable/assets/design.3f3e385f.png";
const Rocket = "/_app/immutable/assets/rocket.6563bbcc.png";
const Wine = "/_app/immutable/assets/wwf-wine.88667d42.png";
const Stile = "/_app/immutable/assets/Stile.c7278dfb.jpeg";
const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxOTFCQjg4RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxOTFCQjg5RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDE5MUJCODZGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDE5MUJCODdGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f5KQ1AAAMJklEQVR42uydAYgU1xnH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";
const ImageGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-js79e8.svelte-js79e8{overflow:hidden}a.svelte-js79e8.svelte-js79e8{text-decoration:none}.image-grid.svelte-js79e8.svelte-js79e8{margin:0 -4rem 0 -7.5rem;width:calc(100vw - 13rem);z-index:1;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0;grid-auto-rows:1fr}.popup.svelte-js79e8.svelte-js79e8{transition:all 200ms ease;width:9rem;height:auto;opacity:0;scale:0.3;filter:brightness(0.5)}.image-box.svelte-js79e8.svelte-js79e8{position:relative;display:inline-block;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1;transition:all 300ms ease;filter:brightness(0.5)}.image-box.svelte-js79e8.svelte-js79e8:hover{filter:brightness(1);transform:scale(1.1)}.image-box.svelte-js79e8:hover .popup.svelte-js79e8{z-index:1;opacity:1;scale:1;filter:brightness(1)}.image-box.svelte-js79e8 .image.svelte-js79e8{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}",
  map: null
};
const ImageGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="image-grid svelte-js79e8"><span class="svelte-js79e8"><a href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page" target="_blank" class="image-box svelte-js79e8"><img class="image svelte-js79e8"${add_attribute("src", Sanlam, 0)} alt="Sanlam storybook">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-js79e8" alt="view project"></a></span>

  <span class="svelte-js79e8"><a href="https://storybook.sanlam.design/react-ui-next/index.html?path=/story/docs-introduction--page" class="image-box svelte-js79e8"><img class="image svelte-js79e8"${add_attribute("src", Design, 0)} alt="Sanlam design system">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-js79e8" alt="view project"></a></span>

  <span class="svelte-js79e8"><a href="https://takealot.retailrockit.co.za/" class="image-box svelte-js79e8"><img class="image svelte-js79e8"${add_attribute("src", Rocket, 0)} alt="retail rocket logo">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-js79e8" alt="view project"></a></span>

  <span class="svelte-js79e8"><a href="https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US" target="_blank" class="image-box scale svelte-js79e8"><img class="image svelte-js79e8"${add_attribute("src", Wine, 0)} alt="wwf wine logo">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-js79e8" alt="view project"></a></span>

  <span class="svelte-js79e8"><a href="https://stile-aluminium.netlify.app" target="_blank" class="image-box svelte-js79e8"><img class="image svelte-js79e8"${add_attribute("src", Stile, 0)} alt="Stile">
      <img${add_attribute("src", Circle, 0)} class="popup svelte-js79e8" alt="view project"></a></span>
</div>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"coolvetica";src:local("./../../static/coolvetica condensed.otf") format("truetype")}@import url("https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap");.bg-text.svelte-154sdtg{font-family:"coolvetica";position:absolute;right:-5rem;top:-25.1rem;font-size:64.3rem;font-weight:900;z-index:1;letter-spacing:-4rem;color:rgba(0, 0, 0, 0.25)}@media(min-width: 2560px){.bg-text.svelte-154sdtg{right:-5rem}}',
  map: null
};
const s = "6rem";
const sp = "-0.25rem";
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Work" class="main"><div class="container"><p class="bg-text svelte-154sdtg">work</p>
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2&gt;</p>

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

    <span class="head_alt">A small gallery of recent projects chosen by me. I&#39;ve done them all
      together with amazing people from companies <br>
      around the country. the list is a work in progress and there is more to come.<br>Interested to see some more? Visit my
      <a href="https://github.com/DanteDurant?tab=repositories" target="_blank">GitHub</a> page.
    </span>

    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
    <p class="tag" style="margin: 0 0 1rem -4rem;">&lt;section&gt;</p>

    ${validate_component(ImageGrid, "ImageGrid").$$render($$result, {}, {}, {})}

    <p class="tag" style="margin: 1.5rem 0 0 -4rem;">&lt;section/&gt;</p></div>
</main>`;
});
export {
  Work as W
};
