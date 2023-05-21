import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
import { B as Button } from "./Button.js";
const LogoAnimation_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-nlr4i4{width:7.2rem}",
  map: null
};
const LogoAnimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { delay = 0 } = $$props;
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  $$result.css.add(css$2);
  return `${``}`;
});
const IntroText_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".logo.svelte-t4z5ha{margin-right:-0.3rem;margin-left:0.25rem}.bounce-root.svelte-t4z5ha{width:60.8rem;height:27rem;color:white}",
  map: null
};
function generateNumbers() {
  const numbers = [];
  const start = 30;
  const increment = 50;
  const count = 23;
  for (let i = 0; i < count; i++) {
    numbers.push(start + i * increment);
  }
  return numbers;
}
const IntroText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const d = generateNumbers();
  $$result.css.add(css$1);
  return `<div aria-label="Hi, I'm Dante, web developer" class="bounce-root svelte-t4z5ha"><span style="position: relative; left: -0.1rem; bottom: 0.05rem;">${validate_component(Bounce, "Bounce").$$render($$result, { text: "H" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[0],
      customStyles: "position: relative; left: -0.4rem;",
      text: "i"
    },
    {},
    {}
  )}
    ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[1],
      customStyles: "position: relative; left: -0.8rem;",
      text: ","
    },
    {},
    {}
  )}</span>
  <br>
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[2], text: "I" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[3],
      customStyles: "position: relative; left: -0.3rem; top: -5.7rem;",
      text: ","
    },
    {},
    {}
  )}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[4],
      customStyles: "position: relative; left: -0.9rem;",
      text: "m"
    },
    {},
    {}
  )}
  <span> </span>
  <span> </span>
  <span class="logo svelte-t4z5ha">${validate_component(LogoAnimation, "LogoAnimation").$$render($$result, { delay: d[5] }, {}, {})}</span>
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[6], text: "a" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[7], text: "n" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[8], text: "t" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[9], text: "e" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[10],
      customStyles: "position: relative; top: -0.06rem; left: -0.05rem;",
      text: ","
    },
    {},
    {}
  )}
  <br>
  <span style="position: relative; right: -0.5rem; ">${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[11], text: "w" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[12], text: "e" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[13], text: "b" }, {}, {})}</span>
  <span> </span>
  <span> </span>
  <span> </span>
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[14], text: "d" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[15], text: "e" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[16], text: "v" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[17], text: "e" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[18], text: "l" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[19], text: "o" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[20], text: "p" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[21], text: "e" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[22], text: "r" }, {}, {})}
</div>`;
});
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<span><svg width="1rem" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="#fff" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg></span>`;
});
const sharedStyles = ":root{--pri: #08fdd8;--sec: #fd2055;--bg: #1d1d1d;--bg-alt: #181818;--text: #d9d9d9;--text-alt: #8d8d8d;--tag: #515151}.main{display:flex;width:calc(100vw - 20.5rem);margin-left:20.5rem;height:100vh}.container{width:100%;height:min-content;display:flex;flex-direction:column;position:relative;align-self:center}.tag{color:var(--tag);font-size:1.8rem;font-style:italic;font-family:La Belle Aurore}.head{margin:-1.5rem 0 -1rem;color:var(--pri);z-index:2}.head_alt{color:var(--text);font-size:1.6rem;line-height:1.5;z-index:2}.center-parent{display:flex;justify-content:center;align-items:center}.center-child{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}p{margin:0}a{text-decoration:none;color:var(--pri)}\n";
const keyFrames = "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideInFromBottom{0%{transform:translateY(20%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes moveUpDown{0%{transform:translateY(0)}50%{transform:translateY(-1rem)}to{transform:translateY(0)}}@keyframes rubberBand{0%{transform:scale(1)}30%{transform:scaleY(1.25) scaleX(.75)}40%{transform:scaleY(.75) scaleX(1.25)}50%{transform:scaleY(1.15) scaleX(.85)}65%{transform:scaleY(.95) scaleX(1.05)}75%{transform:scaleY(1.05) scaleX(.95)}to{transform:scaleY(1) scaleX(1)}}\n";
const Intro_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-87ajao.svelte-87ajao{margin-left:13rem}.container.svelte-87ajao.svelte-87ajao{justify-content:center;height:100vh;left:6rem;margin:1rem 0 0 0}.down.svelte-87ajao.svelte-87ajao{width:2.7rem;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;z-index:0}.down.svelte-87ajao span.svelte-87ajao{writing-mode:vertical-lr;font-size:1.4rem;color:white;animation:moveUpDown 1s ease-in-out infinite}.down.svelte-87ajao div.svelte-87ajao{padding:0.7rem 0.5rem 2rem 0}.tag-one.svelte-87ajao.svelte-87ajao{position:absolute;left:-5rem;top:1rem}.tag-two.svelte-87ajao.svelte-87ajao{position:absolute;left:-3rem;top:4rem}.sub.svelte-87ajao.svelte-87ajao{opacity:0}.sub.svelte-87ajao.svelte-87ajao.fadeIn{opacity:1}.sub-head.svelte-87ajao.svelte-87ajao{font-size:1.6rem;letter-spacing:4px;color:var(--text-alt)}.button-con.svelte-87ajao.svelte-87ajao{opacity:0}.button-con.svelte-87ajao.svelte-87ajao.fadeIn{opacity:1}.fadeIn.svelte-87ajao.svelte-87ajao{animation:fadeIn 0.5s ease-in-out forwards}.slideInFromBottom.svelte-87ajao.svelte-87ajao{animation:slideInFromBottom 0.5s ease-in-out forwards}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Home" class="main svelte-87ajao"><div class="down svelte-87ajao"><span class="svelte-87ajao">scroll down</span>
    <div class="svelte-87ajao">${validate_component(ArrowDown, "ArrowDown").$$render($$result, {}, {}, {})}</div></div>
  <section class="container svelte-87ajao"><p class="tag tag-one svelte-87ajao">&lt;/html&gt;</p>
    <p class="tag tag-two svelte-87ajao">&lt;body&gt;</p>
    <div class="head"><p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      ${validate_component(IntroText, "IntroText").$$render($$result, {}, {}, {})}
      <p class="tag" style="margin: -3.7rem -6rem 0 62rem;">&lt;h1/&gt;</p>
      <div class="${[
    "sub svelte-87ajao",
    " "
  ].join(" ").trim()}"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="sub-head svelte-87ajao">Front End Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p></div>
      <div class="${[
    "button-con svelte-87ajao",
    " "
  ].join(" ").trim()}"><a href="#Contact">${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</a></div></div></section>
  <section class="work"><div></div></section>
</main>`;
});
export {
  Intro as I
};
