import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { C as Contact } from "../../../chunks/Contact.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1oz8peb_START -->${$$result.title = `<title>Contact</title>`, ""}<meta name="Contact" content="Contact information"><!-- HEAD_svelte-1oz8peb_END -->`, ""}

${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
