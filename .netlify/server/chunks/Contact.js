import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
import { B as Button } from "./Button.js";
const Form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'form.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5{display:flex;flex-direction:column;margin:auto}input.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5,textarea.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5{background-color:#3c3c3c;color:white;width:100%;font-size:1.8rem;border-radius:0;border:none;padding-left:1rem;resize:none}input.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5:focus-within,textarea.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5:focus-within{outline:none;border:var(--pri) solid 1px}input.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5:invalid,textarea.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5:invalid{border-color:var(--sec)}form.svelte-ssqeb5>div.svelte-ssqeb5.svelte-ssqeb5{display:flex;width:100%;height:6rem;column-gap:1rem}form.svelte-ssqeb5>div.svelte-ssqeb5+.svelte-ssqeb5{margin-top:1rem}.message.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5{height:20rem}.message.svelte-ssqeb5>textarea.svelte-ssqeb5.svelte-ssqeb5{padding-top:1.5rem;font-family:"Open Sans", sans-serif}.button.svelte-ssqeb5.svelte-ssqeb5.svelte-ssqeb5{margin-top:2rem;display:flex;padding:0;width:min-content;width:min-content;background-color:transparent;border:none}',
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main><p class="tag" style="margin: 0 0 1rem -1rem;">&lt;form&gt;</p>
  <span><form action="https://formspree.io/f/xayzkgwq" method="POST" class="svelte-ssqeb5"><div class="svelte-ssqeb5"><input type="text" class="name svelte-ssqeb5" placeholder="Name" name="name" value="" required>
        <input type="email" class="email svelte-ssqeb5" placeholder="Email" name="email" value="" required></div>

      <div class="message svelte-ssqeb5"><textarea placeholder="Message" name="message" autocomplete="off" rows="10" cols="60" required class="svelte-ssqeb5"></textarea></div>

      <button class="button svelte-ssqeb5">${validate_component(Button, "Button").$$render($$result, { text: "Send Message!" }, {}, {})}</button></form></span>
  <p class="tag" style="margin: 1.5rem 0 0 -1rem;">&lt;/form&gt;</p>
</main>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-zqjdoo{padding-left:7.5rem;margin-left:13rem;background-color:var(--bg);z-index:1}.fill.svelte-zqjdoo{width:calc(100vw - 13rem);margin-left:13rem;height:2.5rem;z-index:1;background-color:var(--bg);box-shadow:0px -40px 200px 0px #000}.fill_alt.svelte-zqjdoo{position:absolute;bottom:0;right:0;height:2.5rem;width:100%;background-color:var(--bg);z-index:1}.parent.svelte-zqjdoo{position:relative;width:45%;padding-right:7.5rem;margin-top:2rem}.tag-one.svelte-zqjdoo{position:absolute;left:-3rem;bottom:6rem}.tag-two.svelte-zqjdoo{position:absolute;left:-5rem;bottom:3rem}.map.svelte-zqjdoo{position:relative;height:100%;width:55%;z-index:1}",
  map: null
};
const s = "8rem";
const sp = "-0.2rem";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="fill svelte-zqjdoo"></div>
<main id="Contact" class="main svelte-zqjdoo"><span class="parent svelte-zqjdoo"><div><p class="tag" style="margin: 0 0 -1.5rem -1rem;">&lt;h1&gt;</p>
      <span class="head">${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "C" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "n" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "t" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "a" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "c" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "t" }, {}, {})}
        <span> </span>
        <span> </span>
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "m" }, {}, {})}
        ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "e" }, {}, {})}</span>
      <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h1/&gt;</p>
      <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
      <span class="head_alt">I’m interested in working as a front-end developer, especially ambitious
        or large projects. However, if you have other requests or questions,
        please don’t hesitate to use the form.
      </span>
      <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
      ${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div>
    <p class="tag tag-two svelte-zqjdoo">&lt;/html&gt;</p>
    <p class="tag tag-one svelte-zqjdoo">&lt;/body&gt;</p></span>

  <div class="map svelte-zqjdoo"><iframe title="map" src="https://snazzymaps.com/embed/491438" width="100%" height="100%" style="border:none;"></iframe>
    <div class="fill_alt svelte-zqjdoo"></div></div>
</main>`;
});
export {
  Contact as C
};
