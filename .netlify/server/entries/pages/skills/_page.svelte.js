import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { S as Skills } from "../../../chunks/Skills.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1f1dbsc_START -->${$$result.title = `<title>Skills</title>`, ""}<meta name="Skills" content="Skills and experience"><!-- HEAD_svelte-1f1dbsc_END -->`, ""}

${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
