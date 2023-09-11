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
      styleText: "position: relative; top: -5.7rem;",
      text: ","
    },
    {},
    {}
  )}
  ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: d[12],
      styleText: "position: relative; left: -0.3rem;",
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
      styleText: "position: relative; top: -0.06rem; left: -0.2rem;",
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
const global = ':root{--pri: #08fdd8;--sec: #fd2055;--bg: #1d1d1d;--bg-alt: #181818;--bg-form: #3c3c3c;--text: #d9d9d9;--text-alt: #8d8d8d;--tag: #515151}@font-face{font-family:coolvetica;src:url(/_app/immutable/assets/coolvetica-rg.ba89c675.woff2) format("woff2")}.aside-back{min-width:13rem;height:100vh;z-index:-1!important}.main{position:relative;scroll-snap-align:start;scroll-snap-stop:always;display:flex;min-width:13rem;height:100vh}.container-text{display:flex;flex-direction:column;margin-left:9rem;align-self:center}.tag{color:var(--tag);font-size:1.8rem;font-style:italic;font-family:La Belle Aurore}.head{margin:-1.5rem 0 -1rem;color:var(--pri);width:max-content;z-index:0}.head_alt{position:relative;color:var(--text);font-size:1.6rem;line-height:1.5;z-index:1}.center-parent{display:flex;justify-content:center;align-items:center}.center-child{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.column{display:flex;flex-direction:column}html{font-size:62.5%;scroll-behavior:smooth}.snap-scroll{scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;overflow-y:scroll}p{margin:0}a{text-decoration:none;color:var(--pri);font-size:1.6rem}body{font-family:Open Sans,sans-serif}h1{font-family:coolvetica,sans-serif}menu{margin-block-start:0em;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:0px}body{background-color:#1d1d1d;margin-block-start:0em;margin-block-end:0em;margin-inline-start:0rem;margin-inline-end:0px;padding-inline-start:0px}@media (max-width: 1000px){html{font-size:27.3%}}@media (max-width: 600px){.tendrils,.aside-back{display:none}aside{height:16rem!important;width:100%!important}.about{display:flex;width:100vw;flex-direction:column;justify-content:end}.about p{width:max-content}.about .container-text{margin:0!important;width:80%!important}.about .container-text .head_alt{width:100%;font-size:2.2rem}.about .tag-last{margin:0 0 0 -1rem!important}.about .tagcloud{align-self:center;margin-top:-1rem;margin-bottom:1rem}.skills{margin:0!important;display:flex;justify-content:center;align-items:center}.skills .container-text{width:80%!important}.skills .container-text .head_alt{width:100%;font-size:2.2rem}}@media (min-width: 1000px){html{font-size:27.3%}}@media (min-width: 1000px){html{font-size:57.5%}}@media (min-width: 1400px){html{font-size:62.5%}}@media (min-width: 1800px){html{font-size:65%}}@media (min-width: 2200px){html{font-size:67.7%}}@media (min-width: 2560px){html{font-size:70%}.skills .container{width:40%!important}.tagcloud{font-size:2.5rem}}@media (min-width: 3000px){html{font-size:77.5%}}@media (min-width: 3400px){html{font-size:87.5%}}@media (min-width: 3840px){html{font-size:97.5%}}\n';
const keyFrames = "@keyframes moveUpDown{0%{transform:translateY(0)}50%{transform:translateY(-1rem)}to{transform:translateY(0)}}@keyframes rubberBand{0%{transform:scale(1)}30%{transform:scaleY(1.25) scaleX(.75)}40%{transform:scaleY(.75) scaleX(1.25)}50%{transform:scaleY(1.15) scaleX(.85)}65%{transform:scaleY(.95) scaleX(1.05)}75%{transform:scaleY(1.05) scaleX(.95)}to{transform:scaleY(1) scaleX(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideInFromBottomText{0%{transform:translateY(20%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slideInFromLeft{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes slideOutFromRight{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes slideInFromBottom{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slideOutFromTop{0%{transform:translateY(0)}to{transform:translateY(100%)}}\n";
const Intro_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-text.svelte-15ady0d.svelte-15ady0d{align-self:center;margin-left:6rem}.arrow-down.svelte-15ady0d.svelte-15ady0d{width:3rem;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;z-index:0}.arrow-down.svelte-15ady0d span.svelte-15ady0d{writing-mode:vertical-lr;font-size:1.4rem;color:white;animation:moveUpDown 1s ease-in-out infinite}.arrow-down.svelte-15ady0d div.svelte-15ady0d{padding:0.7rem 0.5rem 2rem 0}.tag-one.svelte-15ady0d.svelte-15ady0d{position:absolute;left:15rem;top:1rem}.tag-two.svelte-15ady0d.svelte-15ady0d{position:absolute;left:17rem;top:4rem}.sub.svelte-15ady0d.svelte-15ady0d{opacity:0}.sub.svelte-15ady0d.svelte-15ady0d.fadeIn{opacity:1}.sub-head.svelte-15ady0d.svelte-15ady0d{font-size:1.6rem;letter-spacing:4px;color:var(--text-alt)}.button-con.svelte-15ady0d.svelte-15ady0d{opacity:0}.button-con.svelte-15ady0d.svelte-15ady0d.fadeIn{opacity:1}.fadeIn.svelte-15ady0d.svelte-15ady0d{animation:fadeIn 0.5s ease-in-out forwards}.slideInFromBottomText.svelte-15ady0d.svelte-15ady0d{animation:slideInFromBottomText 0.5s ease-in-out forwards}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Home" class="main intro"><span class="aside-back"></span>
  <div class="arrow-down svelte-15ady0d"><span class="svelte-15ady0d">scroll down</span>
    <div class="svelte-15ady0d">${validate_component(ArrowDown, "ArrowDown").$$render($$result, {}, {}, {})}</div></div>
  <p class="tag tag-one svelte-15ady0d">&lt;/html&gt;</p>
  <p class="tag tag-two svelte-15ady0d">&lt;body&gt;</p>
  <section class="container-text svelte-15ady0d"><div class="head"><p class="tag" style="margin: 0 0 -1rem -1rem">&lt;h1&gt;</p>
      ${validate_component(IntroHeading, "IntroText").$$render($$result, {}, {}, {})}
      <p class="tag" style="margin: -3.7rem -6rem 0 56.5rem;">&lt;h1/&gt;</p>
      <div class="${[
    "sub svelte-15ady0d",
    " "
  ].join(" ").trim()}"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
        <p class="sub-head svelte-15ady0d">Full Stack Developer / Designer</p>
        <p class="tag" style="margin: 0 0 2.5rem -1rem;">&lt;p/&gt;</p></div>
      <div class="${[
    "button-con svelte-15ady0d",
    " "
  ].join(" ").trim()}"><a href="#Contact">${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</a></div></div></section>
  <section class="work"><div></div></section>
</main>`;
});
export {
  Intro as I
};
