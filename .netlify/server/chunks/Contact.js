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
  code: ".main.svelte-tb9zy0{margin-left:13rem;width:calc(100vw - 13rem);background-color:var(--bg);z-index:1}.fill.svelte-tb9zy0{width:calc(100vw - 13rem);margin-left:13rem;height:2.5rem;z-index:1;background-color:var(--bg);box-shadow:0px -40px 200px 0px #000}.fill_alt.svelte-tb9zy0{position:absolute;bottom:0;right:0;height:2.5rem;width:100%;background-color:var(--bg);z-index:1}.con-form.svelte-tb9zy0{display:flex;align-items:center;position:relative;width:45%;padding-right:7.5rem;padding-left:7.5rem;margin-top:-5rem;background-color:var(--bg)}.tag-one.svelte-tb9zy0{position:absolute;left:4.5rem;bottom:6rem}.tag-two.svelte-tb9zy0{position:absolute;left:2.5rem;bottom:3rem}.con-map.svelte-tb9zy0{position:relative;height:100%;width:55%;z-index:1}",
  map: null
};
const s = "8rem";
const sp = "-0.2rem";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="fill svelte-tb9zy0"></div>
<main id="Contact" class="main svelte-tb9zy0"><span class="con-form svelte-tb9zy0"><div><p class="tag" style="margin: 0 0 -1.5rem -1rem;">&lt;h1&gt;</p>
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
    <p class="tag tag-two svelte-tb9zy0">&lt;/html&gt;</p>
    <p class="tag tag-one svelte-tb9zy0">&lt;/body&gt;</p></span>

  <div class="con-map svelte-tb9zy0"><iframe title="map" src="https://snazzymaps.com/embed/491438" width="100%" height="100%" style="border:none;"></iframe>
    <div class="fill_alt svelte-tb9zy0"></div></div>
</main>`;
});
export {
  Contact as C
};
