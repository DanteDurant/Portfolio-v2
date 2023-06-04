import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { A as About } from "../../../chunks/About.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1brrg1x_START -->${$$result.title = `<title>About Dante</title>`, ""}<meta name="Me Myself and I" content="Supplementary information"><!-- HEAD_svelte-1brrg1x_END -->`, ""}

${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
