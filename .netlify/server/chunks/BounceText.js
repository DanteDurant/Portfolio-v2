import { c as create_ssr_component, i as each, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
const BounceText_svelte_svelte_type_style_lang = "";
const css = {
  code: ".space-letter.svelte-18csqzh{margin-right:0.3rem}",
  map: null
};
const BounceText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { size = "6rem" } = $$props;
  let { spacing = "0.2rem" } = $$props;
  let { delay = 0 } = $$props;
  let { height = "8.6rem" } = $$props;
  let { styleParent = "" } = $$props;
  let { styleText = "" } = $$props;
  let letters = text.split("");
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.styleParent === void 0 && $$bindings.styleParent && styleParent !== void 0)
    $$bindings.styleParent(styleParent);
  if ($$props.styleText === void 0 && $$bindings.styleText && styleText !== void 0)
    $$bindings.styleText(styleText);
  $$result.css.add(css);
  return `<span class="bounce-text"><div class="letters-container">${each(letters, (letter, i) => {
    return `${letter === " " ? `<span class="space-letter svelte-18csqzh"> </span>` : `${validate_component(Bounce, "Bounce").$$render(
      $$result,
      {
        size,
        spacing,
        height,
        delay,
        styleParent,
        styleText,
        text: letter
      },
      {},
      {}
    )}`}`;
  })}</div>
</span>`;
});
export {
  BounceText as B
};
