import { c as create_ssr_component, e as escape } from "./index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-2o87ba{position:relative;height:5rem;width:22rem;border:var(--pri) 1px solid;border-bottom-width:2px;color:var(--pri);letter-spacing:4px;font-size:1.6rem;cursor:pointer;overflow:hidden}span.svelte-2o87ba{position:relative;z-index:1;transition:color 500ms}.isHovered.svelte-2o87ba{color:#000000}.background.svelte-2o87ba{position:absolute;top:0;left:0;right:0;bottom:0;width:108%;background:linear-gradient(120deg, var(--pri) 90%, transparent 90.1%);transform:translateX(-100%)}.inlet.svelte-2o87ba{position:absolute;right:0;bottom:0;width:0.9rem;height:1.6rem;background-image:linear-gradient(\n      to top left,\n      var(--sec) 50%,\n      #00ff0000 50%\n    );transform:translateY(100%)}.background.animate-in-bg.svelte-2o87ba{animation:svelte-2o87ba-slideInFromLeft 500ms forwards}.background.animate-out-bg.svelte-2o87ba{animation:svelte-2o87ba-slideOutFromRight 500ms forwards}.inlet.animate-in-inlet.svelte-2o87ba{animation:svelte-2o87ba-slideInFromBottom 700ms forwards}.inlet.animate-out-inlet.svelte-2o87ba{animation:svelte-2o87ba-slideOutFromTop 700ms forwards}@keyframes svelte-2o87ba-slideInFromLeft{0%{transform:translateX(-100%)}100%{transform:translateX(0%)}}@keyframes svelte-2o87ba-slideOutFromRight{0%{transform:translateX(0%)}100%{transform:translateX(-100%)}}@keyframes svelte-2o87ba-slideInFromBottom{0%{transform:translateY(100%)}100%{transform:translateY(0%)}}@keyframes svelte-2o87ba-slideOutFromTop{0%{transform:translateY(0%)}100%{transform:translateY(100%)}}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Contact me!" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="button center-parent svelte-2o87ba"><span class="${["svelte-2o87ba", ""].join(" ").trim()}">${escape(text)}</span>
  <div class="${[
    "background svelte-2o87ba",
    " "
  ].join(" ").trim()}"></div>
  <div class="${[
    "inlet svelte-2o87ba",
    " "
  ].join(" ").trim()}"></div>
</div>`;
});
export {
  Button as B
};
