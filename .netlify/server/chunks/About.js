import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
const TagCloud_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tagcloud.svelte-6wrla0{color:var(--pri);font-size:2rem;font-weight:400}",
  map: null
};
const TagCloud_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="content tagcloud svelte-6wrla0"></div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-pkk03x{width:40%}.tagcloud.svelte-pkk03x{width:60%}",
  map: null
};
const s = "6rem";
const sp = "-0.2rem";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="About" class="main about"><div class="container svelte-pkk03x"><p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
    <span class="head">${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "M" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "e" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "," }, {}, {})}
      <span> </span>
      <span> </span>
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "M" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "y" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "s" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "e" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "l" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "f" }, {}, {})}
      <span> </span>
      <span> </span>
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "a" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "n" }, {}, {})}
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "d" }, {}, {})}
      <span> </span>
      <span> </span>
      ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "I" }, {}, {})}</span>
    <p class="tag" style="margin: 0 0 0 -1rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>
    <span class="head_alt">Dedicated, disciplined, and dependable professional with an unwavering
      commitment to excellence. I possess a diplomatic and solution-oriented
      mindset, always going above and beyond to achieve remarkable results. As a
      natural team player, I embrace collaboration and possess inherent
      leadership qualities that contribute to the success of any project.
      <br><br>
      A critical thinker and passionate problem solver, I continuously strive to
      enhance my abilities, skills, and knowledge. My insatiable curiosity drives
      me to delve into computer science textbooks, exploring various languages and
      frameworks, as well as staying updated on the latest technology-related innovations.
      Beyond the realm of web development, I find great interest in psychology, philosophy
      and neuroscience.
      <br><br>
      One of my key strengths lies in my exceptional communication skills, enabling
      me to foster transparency and maintain consistency within the work environment.
      I firmly believe that an environment built on integrity and trust is crucial
      for fostering growth and achieving positive outcomes.
    </span>
    <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p></div>
  <span class="tagcloud center-parent svelte-pkk03x">${validate_component(TagCloud_1, "TagCloud").$$render($$result, {}, {}, {})}</span>
</main>`;
});
export {
  About as A
};