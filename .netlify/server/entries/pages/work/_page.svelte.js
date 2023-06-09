import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { W as Work } from "../../../chunks/Work.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-4zz4d9_START -->${$$result.title = `<title>Work</title>`, ""}<meta name="Work section" content="A portfolio of my work"><!-- HEAD_svelte-4zz4d9_END -->`, ""}

${validate_component(Work, "Work").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
