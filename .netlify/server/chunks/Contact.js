import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
import { B as Button } from "./Button.js";
const Form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'form.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x{display:flex;flex-direction:column;margin:auto}form.svelte-1ome06x>div.svelte-1ome06x.svelte-1ome06x{display:flex;width:100%;height:6rem;column-gap:1rem}form.svelte-1ome06x>div.svelte-1ome06x+.svelte-1ome06x{margin-top:1rem}input.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x,textarea.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x{width:100%;font-size:1.8rem;padding-left:1rem;resize:none;border:none;background-color:var(--bg-form);color:#fff}input.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x:focus-within,textarea.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x:focus-within{outline:none;border:var(--pri) solid 1px;border-bottom:var(--pri) solid 2px}input.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x:invalid,textarea.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x:invalid{border-color:var(--sec)}.message.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x{height:20rem}.message.svelte-1ome06x textarea.svelte-1ome06x.svelte-1ome06x{padding-top:1.5rem;font-family:"Open Sans", sans-serif}button.svelte-1ome06x.svelte-1ome06x.svelte-1ome06x{margin-top:2rem;display:flex;padding:0;width:min-content;width:min-content;background-color:transparent;border:none}',
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main><p class="tag" style="margin: 0 0 1rem -1rem;">&lt;form&gt;</p>
  <span><form action="https://formspree.io/f/xayzkgwq" method="POST" class="svelte-1ome06x"><div class="svelte-1ome06x"><input type="text" class="name svelte-1ome06x" placeholder="Name" name="name" value="" required>
        <input type="email" class="email svelte-1ome06x" placeholder="Email" name="email" value="" required></div>

      <div class="message svelte-1ome06x"><textarea placeholder="Message" name="message" autocomplete="off" rows="10" cols="60" required class="svelte-1ome06x"></textarea></div>

      <button class="svelte-1ome06x">${validate_component(Button, "Button").$$render($$result, { text: "Send Message!" }, {}, {})}</button></form></span>
  <p class="tag" style="margin: 1.5rem 0 0 -1rem;">&lt;/form&gt;</p>
</main>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-1pp5uan.svelte-1pp5uan{display:flex;flex-direction:row;justify-content:start;align-items:start;width:100%;background-color:var(--bg);z-index:1}.aside-back.svelte-1pp5uan.svelte-1pp5uan{min-width:13rem;z-index:900;height:100vh}.container-text.svelte-1pp5uan.svelte-1pp5uan{position:relative;display:flex;flex-direction:column;width:150rem;height:100vh;padding-right:6rem;padding-left:9rem;background-color:var(--bg);transform:translateY(0)}.container-text.svelte-1pp5uan div.svelte-1pp5uan{margin-top:-5rem}.fill_alt.svelte-1pp5uan.svelte-1pp5uan{position:absolute;bottom:0;right:0;height:2.5rem;width:100%;background-color:var(--bg);z-index:1}.tag-one.svelte-1pp5uan.svelte-1pp5uan{position:absolute;left:4.5rem;bottom:4rem}.tag-two.svelte-1pp5uan.svelte-1pp5uan{position:absolute;left:2.5rem;bottom:1rem}.container-map.svelte-1pp5uan.svelte-1pp5uan{position:relative;height:100%;width:100%;z-index:1}@media(max-width: 600px){.contact.svelte-1pp5uan.svelte-1pp5uan{flex-direction:column-reverse;overflow:hidden}.contact.svelte-1pp5uan .container-text.svelte-1pp5uan{width:80%;height:55%}.contact.svelte-1pp5uan .container-text .head_alt.svelte-1pp5uan{font-size:2.2rem}.contact.svelte-1pp5uan .container-map.svelte-1pp5uan{width:193vw;height:45%}.contact.svelte-1pp5uan .container-map .fill_alt.svelte-1pp5uan{position:absolute;bottom:-1.5rem;right:0;height:6.5rem;width:100%;background-color:var(--bg);z-index:1}}",
  map: null
};
const s = "8rem";
const sp = "-0.2rem";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Contact" class="main contact svelte-1pp5uan"><span class="aside-back svelte-1pp5uan"></span>
  <span class="container-text center-parent svelte-1pp5uan"><div class="svelte-1pp5uan"><p class="tag" style="margin: 0 0 -1.5rem -1rem;">&lt;h1&gt;</p>
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
      <span class="head_alt svelte-1pp5uan">I’m interested in working as a front-end developer, especially ambitious
        or large projects. However, if you have other requests or questions,
        please don’t hesitate to use the form.
      </span>
      <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p>
      ${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div>

    <p class="tag tag-two svelte-1pp5uan">&lt;/html&gt;</p>
    <p class="tag tag-one svelte-1pp5uan">&lt;/body&gt;</p></span>

  <div class="container-map svelte-1pp5uan"><iframe title="map" src="https://snazzymaps.com/embed/491438" width="100%" height="100%" style="border:none;"></iframe>
    <div class="fill_alt svelte-1pp5uan"></div></div>
</main>`;
});
export {
  Contact as C
};
