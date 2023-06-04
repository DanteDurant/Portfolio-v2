import { c as create_ssr_component, e as escape } from "./index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-17qddc7{position:relative;height:5rem;width:22rem;font-size:1.6rem;letter-spacing:4px;cursor:pointer;overflow:hidden;border:var(--pri) 1px solid;border-bottom-width:2px;color:var(--pri)}span.svelte-17qddc7{z-index:1;transition:color 500ms}.isHovered.svelte-17qddc7{color:#000}.background.svelte-17qddc7{position:absolute;width:108%;top:0;left:0;right:0;bottom:0;transform:translateX(-100%);background:linear-gradient(120deg, var(--pri) 90%, transparent 90.1%)}.inlet.svelte-17qddc7{position:absolute;right:0;bottom:0;width:0.9rem;height:1.6rem;transform:translateY(100%);background-image:linear-gradient(\n      to top left,\n      var(--sec) 50%,\n      #00ff0000 50%\n    )}.background.animate-in-bg.svelte-17qddc7{animation:slideInFromLeft 500ms forwards}.background.animate-out-bg.svelte-17qddc7{animation:slideOutFromRight 500ms forwards}.inlet.animate-in-inlet.svelte-17qddc7{animation:slideInFromBottom 700ms forwards}.inlet.animate-out-inlet.svelte-17qddc7{animation:slideOutFromTop 700ms forwards}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Contact me!" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="button center-parent svelte-17qddc7"><span class="${["svelte-17qddc7", ""].join(" ").trim()}">${escape(text)}</span>
  <div class="${[
    "background svelte-17qddc7",
    " "
  ].join(" ").trim()}"></div>
  <div class="${[
    "inlet svelte-17qddc7",
    " "
  ].join(" ").trim()}"></div>
</div>`;
});
export {
  Button as B
};
