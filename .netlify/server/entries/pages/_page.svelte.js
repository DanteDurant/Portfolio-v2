import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { I as Intro } from "../../chunks/Intro.js";
import { A as About } from "../../chunks/About.js";
import "../../chunks/Bounce.js";
import "../../chunks/store.js";
import "../../chunks/Button.js";
/* empty css                                               */import { S as Skills } from "../../chunks/Skills.js";
import { C as Contact } from "../../chunks/Contact.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}

${validate_component(About, "About").$$render($$result, {}, {}, {})}



${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}

${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
