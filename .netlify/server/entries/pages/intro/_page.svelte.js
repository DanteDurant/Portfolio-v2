import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { I as Intro } from "../../../chunks/Intro.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1arbr7y_START -->${$$result.title = `<title>Dante code Durant</title>`, ""}<meta name="Introduction" content="introductory information"><!-- HEAD_svelte-1arbr7y_END -->`, ""}

${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
