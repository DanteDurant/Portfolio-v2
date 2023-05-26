import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "./index2.js";
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
  code: ".rubberBand.svelte-fdw9v6{display:inline-block;width:max-content}.animate.svelte-fdw9v6{animation:rubberBand 1s ease}h1.svelte-fdw9v6{font-weight:500;transition:all 250ms;margin:0}h1.svelte-fdw9v6:hover{color:var(--pri)}",
  map: null
};
const Bounce = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Bouncing Text" } = $$props;
  let { customStyles = "" } = $$props;
  let { delay = 0 } = $$props;
  let { size = "9.3rem" } = $$props;
  let { spacing = "-0.3rem" } = $$props;
  let { height = "8.6rem" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.customStyles === void 0 && $$bindings.customStyles && customStyles !== void 0)
    $$bindings.customStyles(customStyles);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  return `<span class="${"rubberBand " + escape("", true) + " svelte-fdw9v6"}"><h1${add_attribute(
    "style",
    `
      font-size: ${size}; ${customStyles}; 
      letter-spacing: ${spacing}; line-height: ${height}`,
    0
  )} class="svelte-fdw9v6">${validate_component(PopUpText, "PopUpText").$$render($$result, { delay, content: text }, {}, {})}</h1>
</span>`;
});
export {
  Bounce as B
};
