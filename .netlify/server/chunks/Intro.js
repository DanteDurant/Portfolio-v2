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
const IntroHeading_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".logo.svelte-t4z5ha{margin-right:-0.3rem;margin-left:0.25rem}.bounce-root.svelte-t4z5ha{width:60.8rem;height:27rem;color:white}",
  map: null
};
function generateNumbers() {
  const numbers = [];
  const start = 30;
  const increment = 40;
  const count = 41;
  for (let i = 0; i < count; i++) {
    numbers.push(start + i * increment);
  }
  return numbers;
}
const IntroHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const d = generateNumbers();
  $$result.css.add(css$1);
  return `<div aria-label="Hi, I'm Dante, web developer" class="bounce-root svelte-t4z5ha"><span style="position: relative; left: -0.1rem; bottom: 0.05rem;">${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[3], text: "H" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[4], text: "i" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[5], text: "," }, {}, {})}</span>
  <br>
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[9], text: "I" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[10],
      customStyles: "position: relative; top: -5.7rem;",
      text: ","
    },
    {},
    {}
  )}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[12],
      customStyles: "position: relative; left: -0.3rem;",
      text: "m"
    },
    {},
    {}
  )}
  <span> </span>
  <span> </span>
  <span class="logo svelte-t4z5ha">${validate_component(LogoAnimation, "LogoAnimation").$$render($$result, { delay: d[14] }, {}, {})}</span>
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[15], text: "a" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[16], text: "n" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[17], text: "t" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[18], text: "e" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[19],
      customStyles: "position: relative; top: -0.06rem; left: -0.2rem;",
      text: ","
    },
    {},
    {}
  )}
  <br>

  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[22], text: "w" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[23], text: "e" }, {}, {})}
  ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[24], text: "b" }, {}, {})}
  <span> </span>
  <span> </span>
  <span> </span>
  <span style="position: relative; left: 0.13rem;">${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[26], text: "d" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[27], text: "e" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[28], text: "v" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[29], text: "e" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[30], text: "l" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[31], text: "o" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[32], text: "p" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[33], text: "e" }, {}, {})}
    ${validate_component(Bounce, "Bounce").$$render($$result, { delay: d[34], text: "r" }, {}, {})}</span>
</div>`;
});
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<span><svg width="1rem" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="#fff" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg></span>`;
});
const global = ':root{--pri: #08fdd8;--sec: #fd2055;--bg: #1d1d1d;--bg-alt: #181818;--bg-form: #3c3c3c;--text: #d9d9d9;--text-alt: #8d8d8d;--tag: #515151}@font-face{font-family:coolvetica;src:url(%sveltekit.assets%/coolvetica-rg.woff2) format("woff2")}.main{scroll-snap-align:start;scroll-snap-stop:always;display:flex;width:calc(100vw - 20.5rem);margin-left:20.5rem;height:100vh}.container{width:100%;height:min-content;display:flex;flex-direction:column;position:relative;align-self:center}.tag{color:var(--tag);font-size:1.8rem;font-style:italic;font-family:La Belle Aurore}.head{margin:-1.5rem 0 -1rem;color:var(--pri);width:max-content;z-index:0}.head_alt{color:var(--text);font-size:1.6rem;line-height:1.5}.center-parent{display:flex;justify-content:center;align-items:center}.center-child{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.column{display:flex;flex-direction:column}html{font-size:62.5%;scroll-behavior:smooth}.snap-scroll{scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;overflow-y:scroll}p{margin:0}a{text-decoration:none;color:var(--pri);font-size:1.6rem}h1{font-family:coolvetica,sans-serif}body{font-family:Open Sans,sans-serif}menu{margin-block-start:0em;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:0px}body{background-color:#1d1d1d;margin-block-start:0em;margin-block-end:0em;margin-inline-start:0rem;margin-inline-end:0px;padding-inline-start:0px}@media (max-width: 1000px){html{font-size:27.3%}}@media (max-width: 600px){.about{display:flex;flex-direction:column;justify-content:center}.about .container{width:100%!important}.about .tagcloud{width:100%;margin-left:-2rem}}@media (min-width: 1000px){html{font-size:27.3%}}@media (min-width: 1000px){html{font-size:57.5%}}@media (min-width: 1400px){html{font-size:62.5%}}@media (min-width: 1800px){html{font-size:65%}}@media (min-width: 2200px){html{font-size:67.7%}}@media (min-width: 2560px){html{font-size:70%}.skills .container{width:40%!important}.tagcloud{font-size:2.5rem}}@media (min-width: 3000px){html{font-size:77.5%}}@media (min-width: 3400px){html{font-size:87.5%}}@media (min-width: 3840px){html{font-size:97.5%}}\n';
const keyFrames = "@keyframes moveUpDown{0%{transform:translateY(0)}50%{transform:translateY(-1rem)}to{transform:translateY(0)}}@keyframes rubberBand{0%{transform:scale(1)}30%{transform:scaleY(1.25) scaleX(.75)}40%{transform:scaleY(.75) scaleX(1.25)}50%{transform:scaleY(1.15) scaleX(.85)}65%{transform:scaleY(.95) scaleX(1.05)}75%{transform:scaleY(1.05) scaleX(.95)}to{transform:scaleY(1) scaleX(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideInFromBottomText{0%{transform:translateY(20%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slideInFromLeft{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes slideOutFromRight{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes slideInFromBottom{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slideOutFromTop{0%{transform:translateY(0)}to{transform:translateY(100%)}}\n";
const Intro_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1jmfhbv.svelte-1jmfhbv{margin-left:13rem;width:calc(100vw - 20.5rem - 13rem)}.container.svelte-1jmfhbv.svelte-1jmfhbv{justify-content:center;height:100vh;left:6rem;margin:1rem 0 0 0}.down.svelte-1jmfhbv.svelte-1jmfhbv{width:2.7rem;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;z-index:0}.down.svelte-1jmfhbv span.svelte-1jmfhbv{writing-mode:vertical-lr;font-size:1.4rem;color:white;animation:moveUpDown 1s ease-in-out infinite}.down.svelte-1jmfhbv div.svelte-1jmfhbv{padding:0.7rem 0.5rem 2rem 0}.tag-one.svelte-1jmfhbv.svelte-1jmfhbv{position:absolute;left:-5rem;top:1rem}.tag-two.svelte-1jmfhbv.svelte-1jmfhbv{position:absolute;left:-3rem;top:4rem}.sub.svelte-1jmfhbv.svelte-1jmfhbv{opacity:0}.sub.svelte-1jmfhbv.svelte-1jmfhbv.fadeIn{opacity:1}.sub-head.svelte-1jmfhbv.svelte-1jmfhbv{font-size:1.6rem;letter-spacing:4px;color:var(--text-alt)}.button-con.svelte-1jmfhbv.svelte-1jmfhbv{opacity:0}.button-con.svelte-1jmfhbv.svelte-1jmfhbv.fadeIn{opacity:1}.fadeIn.svelte-1jmfhbv.svelte-1jmfhbv{animation:fadeIn 0.5s ease-in-out forwards}.slideInFromBottomText.svelte-1jmfhbv.svelte-1jmfhbv{animation:slideInFromBottomText 0.5s ease-in-out forwards}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Home" class="main svelte-1jmfhbv"><div class="down svelte-1jmfhbv"><span class="svelte-1jmfhbv">scroll down</span>
    <div class="svelte-1jmfhbv">${validate_component(ArrowDown, "ArrowDown").$$render($$result, {}, {}, {})}</div></div>
  <section class="container svelte-1jmfhbv"><p class="tag tag-one svelte-1jmfhbv">&lt;/html&gt;</p>
    <p class="tag tag-two svelte-1jmfhbv">&lt;body&gt;</p>
    <div class="head"><p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      ${validate_component(IntroHeading, "IntroText").$$render($$result, {}, {}, {})}
      <p class="tag" style="margin: -3.7rem -6rem 0 56.5rem;">&lt;h1/&gt;</p>
      <div class="${[
    "sub svelte-1jmfhbv",
    " "
  ].join(" ").trim()}"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="sub-head svelte-1jmfhbv">Front End Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p></div>
      <div class="${[
    "button-con svelte-1jmfhbv",
    " "
  ].join(" ").trim()}"><a href="#Contact">${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</a></div></div></section>
  <section class="work"><div></div></section>
</main>`;
});
export {
  Intro as I
};
