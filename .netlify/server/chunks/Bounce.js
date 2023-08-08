import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "./index2.js";
const PopUpText_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-1uz8lw9{width:100rem;height:100%}",
  map: null
};
const PopUpText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  let { delay = 0 } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  $$result.css.add(css$1);
  return `${``}`;
});
const Bounce_svelte_svelte_type_style_lang = "";
const css = {
  code: '.rubberBand.svelte-1szofb7{display:inline-block;width:max-content}.animate.svelte-1szofb7{animation:rubberBand 1s ease}h1.svelte-1szofb7{font-family:"coolvetica", sans-serif;font-weight:500;transition:all 250ms;margin:0}h1.svelte-1szofb7:hover{color:var(--pri)}',
  map: null
};
const Bounce = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { styleParent = "" } = $$props;
  let { styleText = "" } = $$props;
  let { delay = 0 } = $$props;
  let { size = "9.3rem" } = $$props;
  let { spacing = "-0.3rem" } = $$props;
  let { height = "8.6rem" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.styleParent === void 0 && $$bindings.styleParent && styleParent !== void 0)
    $$bindings.styleParent(styleParent);
  if ($$props.styleText === void 0 && $$bindings.styleText && styleText !== void 0)
    $$bindings.styleText(styleText);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  return `<span class="${"rubberBand " + escape("", true) + " svelte-1szofb7"}"${add_attribute("style", `${styleParent}`, 0)}><h1${add_attribute(
    "style",
    `
      font-size: ${size}; ${styleText}; 
      letter-spacing: ${spacing}; line-height: ${height}`,
    0
  )} class="svelte-1szofb7">${validate_component(PopUpText, "PopUpText").$$render($$result, { delay, content: text }, {}, {})}</h1>
</span>`;
});
export {
  Bounce as B
};
