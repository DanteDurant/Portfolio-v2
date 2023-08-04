import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component, b as add_attribute, a as subscribe, d as createEventDispatcher } from "./index2.js";
import { B as Bounce } from "./Bounce.js";
import { m as modalState } from "./store.js";
import { B as Button } from "./Button.js";
const Design = "/_app/immutable/assets/design.77391545.webp";
const Sanlam$1 = "/_app/immutable/assets/sanlam.bdd417a7.webp";
const Rocket$1 = "/_app/immutable/assets/rocket.eec22de5.webp";
const Wine = "/_app/immutable/assets/wwf-wine.d89c720e.webp";
const Woolies$1 = "/_app/immutable/assets/woolies.a2a722a1.webp";
const DesignLazy = "data:image/webp;base64,UklGRvADAABXRUJQVlA4IOQDAADQIACdASqyALEAP1WmxVoxraikKPbLSjAqiWU7DI1Fioq752V/z8A1ZfusiVn75yeW9+4wDzeQORrj5Sa/yRDRdqFXhiz1x/rMq4g3/BhyJb5pHRfbJsEUO/78JXZKdT272i2YfRXNSONGpA7t0OwKtiQGOK99Zo+gfUo2hm0cYhDu80I2IamsFZcrGLPn098gOlVwNtd2mnzQn0NOTTRivSNs+YgG4VictdOqdcpEmFtP3VI+L7L4sfFZ867MGXEL+Lw4q6iEUd2Ts9qI46O7Bc7KW0zqvavBYg7eaYEhYu21K6DRGeGq9TPuNlr1TigjHkNBl5hKFlBAwodr5/nH8KY10IKQhwsaWJ4V/18AAP6Q14F9mPM5DdU6wbCCA/H+EXv6RN3np0sMWyHl6O6UEp81rvCPD6Xfu3ZZ0xzrXYO3CJWBQgCOB7pU/eNLU9en/oTx6Q/4xn8xFrQncRaEmX2aARrvIs0xXfu+FIkR8AptGktN6pWB4Qy0xN+yewLgQzPvgDvFZEJRXQQCeobxyZTzxAADtUAbKs588wXPkOi7Egh89fu7+tiehgRRsu2uaig0xzYAeVA8j11eUCKY8CjorwSIXMjkU9mHXisaPMDVhS4HdNwxj1fRa9GxcRyHeKM6/RmlWQYBf7bR8hzjs+ApfIeimexRlFVfCsoba7sqIM3zOZSBQDjNSm+NZSg5m0DpWL0O2jzW4ol4M/I8O75t5hU+ScNUPqQEyjZ5yRQ/zz5yP5xk3PeUhDry1NWus/Q0+LJZKmK8OvdIvkA5KZ3B9RmryoU7eU+icvb+o4IsWzj6vpbDyJuWR8dity/EnaG91oaSy6t28/YQitlLXu1yZ5a+aYKgK1/nt9NfE3yYs1dU4hC/ghYMWbFfv+kirXgxtsWuHMh4lxgOo0aOw89wcMu3/QZ77I/MAyG4pq9qnzOKNJlCost+G/Trbq6E3Mv8hwCAvceWlda/R3GG1deXem/dFZ2wrH+0LHvcMCMvhI6dBK/u04rYSZw2egsH5h3ns+/WUy8N9g8UMo5ZejYEtZXQ+xkpi4j9O+6857moHrx3sJ+CCWF79SuqrHTzCg+9pgMcCcVb3HF94j137o81vU3mpfi26iO+JegChUShV1O+M4LA2IvjYejoDmXg/RTL5rr+qCBITKA9kcM/49q0K8c0xj385NW/uNzbjLYINvg716iCF4yJZWARIr3T98+CySORq5ZHzjYYk4VlRkcYRSUMqzLlRionoZCryZ48oWF4KjhrnXS3FHUgLklev5INi79OlNSkK5SzA4XqK1L6XDSkoFdwEr942fOGrQkpgAA=";
const SanlamLazy$1 = "data:image/webp;base64,UklGRroBAABXRUJQVlA4IK4BAADwEQCdASqmAKcAP/3+/3+/uTuyJFMKS/A/iWNu1TMIgRN61KAEiC1MA8zOtH0vsjOjPVBga+1pA1/qUVM4us+z8TnEe5EXI8kGk+eoQ4mrhRZbcVqKzlCzSqbHnA9x/t3H5Ml9gIoL1mfEFOiYiuHlgKqc4OZMAZHJ9RSugWYiuJ3f175/XnD1VOPy0pQqmAeXc9K6jkxAgAD+9zACuKxruUhIzHcS5LLmPxZ0owHK/2+fWq6tNAYg3XhxXZAuSg6WJjH1DtJcy0X7dB5YiTB5Q0vYYALTLqoctyDXA+F+snHQ5ww0RPfQLPf4h26fqv/qhxSU+Iq8ZrIGHx1Ly98/rizp1KlCGA0oeypYv3nik6jisofRg/VYNxPF1dgaeCmMQCuQlr9ZNIOH4LJpCzx0V319KTjfo9bpNPI6HkXG7lceXYdfKE+dGZEd2cFD6xANXZaB+GyQ5SzVmusoDm4zew8Gxik0DvNov+o6imrMwi0Sb3PZo+/fjyeKDqZk+4IsD3y5zdhg9VDu1XDzNiGOEhzQreCu8u40E8MArEi0MlbSTUlqMQH93xAAAAAA";
const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxOTFCQjg4RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxOTFCQjg5RkJCRjExRTRCMkVDQUU4QTZCRkU3MEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDE5MUJCODZGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDE5MUJCODdGQkJGMTFFNEIyRUNBRThBNkJGRTcwRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f5KQ1AAAMJklEQVR42uydAYgU1xnH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";
const Modal_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".fullscreen.svelte-1tz82l3.svelte-1tz82l3{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.2);backdrop-filter:blur(2px);z-index:999;opacity:0;pointer-events:none;transition:opacity 0.3s ease}.open.svelte-1tz82l3.svelte-1tz82l3{opacity:1;pointer-events:auto}.modal-outer.svelte-1tz82l3.svelte-1tz82l3{position:relative;color:#fff;background-color:var(--bg);height:calc(100vh - 13rem);width:calc(100vw - 26em);margin-left:13rem;box-shadow:1px -2px 31px 2px rgba(0, 0, 0, 0.2);-webkit-box-shadow:1px -2px 31px 2px rgba(0, 0, 0, 0.2);-moz-box-shadow:1px -2px 31px 2px rgba(0, 0, 0, 0.2)}.close-button.svelte-1tz82l3.svelte-1tz82l3{position:absolute;left:5rem;bottom:3.5rem;background-color:transparent;padding:0}@media(max-width: 600px){.modal-outer.svelte-1tz82l3.svelte-1tz82l3{margin:5rem;height:calc(100dvh - 16rem);align-self:end;width:100%;margin:0}.modal-outer.svelte-1tz82l3 .close-button.svelte-1tz82l3{left:53rem;bottom:5rem}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  let { onClose } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$6);
  return `<div class="${escape(null_to_empty(isOpen ? "fullscreen open" : "fullscreen"), true) + " svelte-1tz82l3"}"><div class="modal-outer svelte-1tz82l3">${slots.default ? slots.default({}) : ``}
    <button class="close-button svelte-1tz82l3">${validate_component(Button, "Button").$$render($$result, { text: "Return" }, {}, {})}</button></div>
</div>`;
});
const ModalStyles = "";
const Storybook = "/_app/immutable/assets/storybook.77bb849c.webp";
const StorybookLazy = "/_app/immutable/assets/storybook-lazy.0cdcd1dd.jpeg";
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { lazySrc } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.lazySrc === void 0 && $$bindings.lazySrc && lazySrc !== void 0)
    $$bindings.lazySrc(lazySrc);
  return `${`<img${add_attribute("src", lazySrc, 0)} alt="Lazy Placeholder" class="lazy-image" style="width: 100%; height: auto; filter:blur(6px)">`}

<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", "image-real hidden", 0)} style="width: 100%; height: auto;">`;
});
const s$5 = "7rem";
const sp$5 = "-0.1rem";
const SanlamStory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><div class="modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$5,
      spacing: sp$5,
      text: "S"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$5,
      spacing: sp$5,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$5,
      spacing: sp$5,
      text: "n"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$5,
      spacing: sp$5,
      text: "l"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$5,
      spacing: sp$5,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$5,
      spacing: sp$5,
      text: "m"
    },
    {},
    {}
  )}</span>
    <p class="tag" style="margin: -3.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Storybook</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>Working on the Sanlam Storybook, I enhanced this component library with
        a versatile theming feature. This new addition includes a theming token
        system, which automatically updates component styles according to
        predefined themes. Additionally, designers have the flexibility to
        modify and add colors through a custom Figma plugin, enabling seamless
        integration of their preferred color palettes into the components.
        <br>
        <br>
        The project was constructed utilizing React, Storybook, and Typescript. Testing
        was carried out using Cypress and Jest.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div>${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Storybook,
      alt: "Sanlam Storybook landing page",
      lazySrc: StorybookLazy
    },
    {},
    {}
  )}
      <span><p class="link" style="color: #fd2055;">Unfortunately I am unable to provide a link due to the strict
          security.
        </p></span></div></div></section>`;
});
const Sanlam = "/_app/immutable/assets/sanlam.7b08b020.webp";
const SanlamLazy = "data:image/webp;base64,UklGRuYFAABXRUJQVlA4INoFAACQSACdASqqAUUBP/3+/3+/v7+7o9LrE/A/iWdu//+9E4FQI2f3YZvtKJ92AnH8suUDh9c/hBZxUX574YuwD3TKuiJ9pNAoP7jGuWEZPPpwdNvRPmqXVEZ4KDAd6URlDuag5Q1Vp21rTLzkh2547vSXH0Z5t7Iz/su/XxDpkKFhl4uFURcHyavQZFxq3xygHkHFTiuVteiGGLIeBfHPMajG3VJrKhzMuMAPf/QYLqJlF3/fB99RZNV3pBY6OBHnK9uBwF2OHli9thFxhLCQI3fvYPXgq/YaJdUxe/IwiIMC/HNsaCd3TbmkehHFaA7VyUu8NgJRz7/bS8EqSEGaY/vjU/0LiUTePQlSkKzIGumTWib+I+PEo3SK803oPOQ01zA8rSwpuhzwO4fBezdjrLIzsFnVT5foXMEfTWp3+c92AWIXgDvuLsDbqhUDQIkvw37JTUliHp76+gTTuV8Kt0GZQMGhGfW/wmPUPCs2ReLV0OMaLWmJnnVJ7+Yi8tDIPviR/SeC8Z0JgYcrh9MqqxQSYTTTNUonNSgcCl5LjxZfyuSd86iuCGSOjmWwnX5nyzwxkktm+7SaQqjXyR0W+7SVkMkdFvu7i68zH3HQlOMjSNfJHRb7tJWQyTWndkQBLiU+qrRiJiuziRib/XJRb7tJofaSsjoF17QJUTnsSqorgnWIlkskdAAIfcNfJHRb7tJofaSshkjot+Hxb7tJXxZkushkjot92krIZI6Lfdp3+7SVkMkdFvu0lZDJHRfLytcJUS+wTdE8/CF8+xgAAP6Yfp4x0AJ6xjCuxkPxL0CkpT93Achtscprxve6HG3PD20lQgigphqSbR6WiQM+nm/sJ2jLovhogHXIkOWX4hsov0q1xcn9cEpOcZ9bz3hieN8PkB8cvkNf70bLu5RSKnF8Krnm1YMXk8hnoIhXaDKKFY43ep6dX+i82BbGIkXn9EsA3f6YFuUTSMFs0vFQNyVxrzpxYYCOrn59FoHxpU/4RB1z7vcYSoCiqz85NrRy6qG84h0Wd7hT/BISh92bbgpCZUdwJgCrEqw8LUifPPqHLIZzeZaJZcqbe/XdkAPF83Rb35TMzXLgPlpglRT/m0aPhBhmaleivuB5vEvc8MAYZCu8r604rMugGgZUGaZ7pUxvKVTwdKy6olF5Apk7L+grtyspjbrbgAg2wQ+eeSjXEGJu/PkBOQGNZ1U8icjseBhjP3gNG8fWy5b9Bk3sKNpvqiYbYUPRZPL7hXoeCLbDlbLDBSsT9MG9ALE+m71/WfZC+RzzXLS1PfSlRxtSR4BlHgBVYS2GHjowmR5woAR57e+UpZ9gpSNgXHDj/LwNasZ2W93AUk3QLBhB+CwcVmipUhV82OXYTnwAEnHeqkDb0mjiFSiSyObCNkyF6bu5s8fdlBLTYnwKyIqpet9G9WA2LN1w9gSGC9O2+uzTldJKVLENGPqy+Qk0hmj5DQ5fhZIkUJRVgtHDCWH+eilL8uGHYzD1bG7LKl/iSGBE7ib+wqkIebhdd/82tYAODuLzifoczgzYZNGddTeJ/9E0Po85oeqcTUOhDEbUdNY+gyjB4FhtuUtOHRz/sKj1pE3dNc8JNCCFWS3Q5ywwPw7JRKOQQ1h/8s/14DVhzqFC8+spg2dRa6mMvHAh5z8v8rJSFTLi+gv/zW8zR518mekZ6clmV2hWZhnOhYankygZL6o8StNQfkJ65AVl+KhyOuwuUYypmkDJ5vA9CZLpvbXbKA0C5iRyJbZhWzxnTkd7IKgl4c/jzr08E37flZn51pQF1DXOrAFLGeHsTQMYul7JYVwlutdVEol9U/Exo5e40ZU9dOzj++qjKPFzxbOGfMgGbaNYUHfgvkdL2IRUibKufsgtwroUkPseDsptP6xjgBnZ2KDuFhUm3HGbGEltJDrbd9BYgABLAhe6pdgdFmGAdoAAAA4Wg89NWc398UdSVYzF7V+4wiASUQAAN2IAAAmqFhZClWqRpGWnpYAA";
const Clipboard_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "main.svelte-1g55r9h{display:flex}p.svelte-1g55r9h{font-size:1.6rem}svg.svelte-1g55r9h{margin-left:1rem;color:var(--pri);cursor:pointer;transition:transform 300ms}svg.svelte-1g55r9h:hover{transform:scale(1.2)}svg.svelte-1g55r9h:active{transform:scale(0.9)}.text.svelte-1g55r9h{width:19rem;background-color:var(--bg-form);padding:0.6rem 1rem}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$5);
  return `<main class="svelte-1g55r9h"><p class="text svelte-1g55r9h">${escape(text)}</p>
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 svelte-1g55r9h" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
</main>`;
});
const s$4 = "7rem";
const sp$4 = "-0.1rem";
const SanlamDS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><div class="modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$4,
      spacing: sp$4,
      text: "S"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$4,
      spacing: sp$4,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$4,
      spacing: sp$4,
      text: "n"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$4,
      spacing: sp$4,
      text: "l"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$4,
      spacing: sp$4,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$4,
      spacing: sp$4,
      text: "m"
    },
    {},
    {}
  )}</span>
    <p class="tag" style="margin: -2.3rem -6rem 0 22.5rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Design System Manager</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>As a key contributor to the Sanlam DSM project, I undertook various
        duties and responsibilities to enhance its functionality and visual
        appeal of the site, including adding documentation, rebuilding the
        landing page interface, replacing images, creating new components and
        the styling of the documentation sections. I focused on enhancing the
        visual appeal and usability of the design system, particularly by
        restructuring the text and improving the user interface of the landing
        page.
        <br>
        <br>
        The project incorporated a diverse set of advanced technologies, including
        Node.js, React, Docusaurus, and Axios.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div><a href="http://sanlam-dsm.mlab.cx/ " target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Sanlam,
      alt: "Sanlam DSM landing page 1",
      lazySrc: SanlamLazy
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="http://sanlam-dsm.mlab.cx/ " target="_blank">http://sanlam-dsm.mlab.cx
        </a>
        ${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "sanlam" }, {}, {})}
        <div style="height: 1rem;"></div>
        ${validate_component(Clipboard, "Clipboard").$$render($$result, { text: "q)gdLtP*gt8zpJKD" }, {}, {})}</span></div></div></section>`;
});
const Rocket = "/_app/immutable/assets/rocket.b18fd1ee.webp";
const RocketLazy = "data:image/webp;base64,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";
const s$3 = "7rem";
const sp$3 = "-0.1rem";
const RetailRocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><div class="modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$3,
      spacing: sp$3,
      text: "R"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$3,
      spacing: sp$3,
      text: "e"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$3,
      spacing: sp$3,
      text: "t"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$3,
      spacing: sp$3,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$3,
      spacing: sp$3,
      text: "i"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$3,
      spacing: sp$3,
      text: "l"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s$3,
      spacing: sp$3,
      text: "R"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s$3,
      spacing: sp$3,
      text: "o"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s$3,
      spacing: sp$3,
      text: "c"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 270,
      size: s$3,
      spacing: sp$3,
      text: "k"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 300,
      size: s$3,
      spacing: sp$3,
      text: "I"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 330,
      size: s$3,
      spacing: sp$3,
      text: "T"
    },
    {},
    {}
  )}</span>
    <p class="tag" style="margin: -3.3rem -6rem 0 39rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Supply Chain Finance Platform</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>In RetailRockIT, I played a key role as a backend developer, working
        with the Takealot API and integrating the CIPCI database via Thisisme
        API. The project focused on assisting businesses in financing bulk
        orders for stock consignment. I developed a system that efficiently
        extracted and verified user details, including full name, identification
        number, and business registry code. By leveraging the CIPCI database, I
        ensured the authenticity of the information and incorporated advanced
        features to compare identification photos. Through automation, manual
        intervention was reduced, leading to improved efficiency and
        productivity for the business.
        <br>
        <br>
        The project leveraged advanced technologies such as Svelte, Tailwind, Prisma,
        and Axios to boost its functionality.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img"><div><a href="https://retailrockit.co.za/" target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Rocket,
      alt: "retail rocket landing page",
      lazySrc: RocketLazy
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="https://retailrockit.co.za/" target="_blank">https://retailrockit.co.za
        </a></span></div></div></section>`;
});
const GuideHigh = "/_app/immutable/assets/wwf-guide.5080f0cb.webp";
const Farm = "/_app/immutable/assets/wwf-farm.539cf687.webp";
const Map = "/_app/immutable/assets/wwf-map.d71301bd.webp";
const GuideHighLazy = "data:image/webp;base64,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";
const FarmLazy = "data:image/webp;base64,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";
const MapLazy = "data:image/webp;base64,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";
const WineChampion_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".modal-img-alt.svelte-11uamvi.svelte-11uamvi{display:flex;flex-direction:column;justify-content:center;padding-right:6rem;width:60%}.modal-img-alt.svelte-11uamvi div.svelte-11uamvi{display:flex;margin-bottom:0.5rem}.modal-img-alt.svelte-11uamvi div div.svelte-11uamvi{gap:1.2rem}.modal-img-alt.svelte-11uamvi div div a.svelte-11uamvi{border-radius:2rem;overflow:hidden;transition:all 300ms ease;filter:brightness(0.8);width:100%;height:100%}.modal-img-alt.svelte-11uamvi div div a.svelte-11uamvi:hover{filter:brightness(1)}@media(max-width: 600px){.modal-inner.svelte-11uamvi.svelte-11uamvi{height:100%;width:100%;flex-direction:column}.modal-text.svelte-11uamvi.svelte-11uamvi{width:85%;margin-bottom:-10rem}.modal-text.svelte-11uamvi .head_alt.svelte-11uamvi{font-size:2.2rem}.modal-text.svelte-11uamvi .tag-last.svelte-11uamvi,.modal-text.svelte-11uamvi .tag-first.svelte-11uamvi{display:none}.modal-img-alt.svelte-11uamvi.svelte-11uamvi{padding:0;width:85%;align-self:center;margin-bottom:15rem}.modal-img-alt.svelte-11uamvi .link.svelte-11uamvi{font-size:3rem}}",
  map: null
};
const Link = "https://play.google.com/store/apps/details?id=com.wwfconservationchampions&gl=US";
const s$2 = "7rem";
const sp$2 = "-0.1rem";
const WineChampion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="modal-inner svelte-11uamvi"><div class="modal-text svelte-11uamvi" style="transform: translateY(-4%);"><p class="tag tag-first svelte-11uamvi" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -0.5rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$2,
      spacing: sp$2,
      text: "W"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$2,
      spacing: sp$2,
      text: "W"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$2,
      spacing: sp$2,
      text: "F"
    },
    {},
    {}
  )}
      <span> </span>
      <span> </span>
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$2,
      spacing: sp$2,
      text: "C"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$2,
      spacing: sp$2,
      text: "h"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$2,
      spacing: sp$2,
      text: "a"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s$2,
      spacing: sp$2,
      text: "m"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s$2,
      spacing: sp$2,
      text: "p"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s$2,
      spacing: sp$2,
      text: "i"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 270,
      size: s$2,
      spacing: sp$2,
      text: "o"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 300,
      size: s$2,
      spacing: sp$2,
      text: "n"
    },
    {},
    {}
  )}</span>
    <p class="tag" style="margin: -2.3rem -6rem 0 48rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Wine Farm Guide</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt svelte-11uamvi"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>Developed using React Native and Expo, the WWF Farm Guide app was my
        first mobile app, built with meticulous attention to detail. This mobile
        app caters to wine enthusiasts in South Africa, providing a
        user-friendly interface to explore local wine farms. With features like
        a map, opening hours, and proximity tracking, users can effortlessly
        access farm information. The app also offers filters for availability,
        restaurants, accommodations, child-friendliness, bicycle routes, and
        walking trails. Innovative technology and attention to detail ensure a
        seamless and efficient experience for planning vineyard visits with the
        WWF Champion Wine Farm Guide app.
        <br>
        <br>
        React Native, Expo, and TypeScript powers this project, facilitating cross-platform
        development, and optimal code implementation.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last svelte-11uamvi" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="modal-img-alt svelte-11uamvi"><div class="svelte-11uamvi"><div class="svelte-11uamvi"><a${add_attribute("href", Link, 0)} target="_blank" class="svelte-11uamvi">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: GuideHigh,
      alt: "guide screen",
      lazySrc: GuideHighLazy
    },
    {},
    {}
  )}</a>
        <a${add_attribute("href", Link, 0)} target="_blank" class="svelte-11uamvi">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Farm,
      alt: "farm screen",
      lazySrc: FarmLazy
    },
    {},
    {}
  )}</a>
        <a${add_attribute("href", Link, 0)} target="_blank" class="svelte-11uamvi">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Map,
      alt: "map screen",
      lazySrc: MapLazy
    },
    {},
    {}
  )}</a></div></div>
    <span><a class="link svelte-11uamvi"${add_attribute("href", Link, 0)} target="_blank">https://play.google.com/wwfconservationchampions.com
      </a></span></div>
</section>`;
});
const Woolies = "/_app/immutable/assets/woolies.84fd6d53.webp";
const WooliesLazy = "data:image/webp;base64,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";
const s$1 = "6.5rem";
const sp$1 = "-0.1rem";
const Woolies_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="modal-inner"><div class="con modal-text"><p class="tag tag-first" style="margin: 0 0 1rem -3rem;">&lt;section&gt;</p>
    <p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>
    <span class="modal-head">${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 0,
      size: s$1,
      spacing: sp$1,
      text: "W"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 30,
      size: s$1,
      spacing: sp$1,
      text: "O"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 60,
      size: s$1,
      spacing: sp$1,
      text: "O"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 90,
      size: s$1,
      spacing: sp$1,
      text: "L"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 120,
      size: s$1,
      spacing: sp$1,
      text: "W"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 150,
      size: s$1,
      spacing: sp$1,
      text: "O"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 180,
      size: s$1,
      spacing: sp$1,
      text: "R"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 210,
      size: s$1,
      spacing: sp$1,
      text: "T"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 240,
      size: s$1,
      spacing: sp$1,
      text: "H"
    },
    {},
    {}
  )}
      ${validate_component(Bounce, "Bounce").$$render(
    $$result,
    {
      delay: 370,
      size: s$1,
      spacing: sp$1,
      text: "S"
    },
    {},
    {}
  )}</span>
    <p class="tag" style="margin: -3.6rem -6rem 0 45rem;">&lt;h2/&gt;</p>
    <p class="tag" style="margin: 0.5rem 0 -2rem -1rem;">&lt;h3&gt;</p>
    <h2>Making The Difference</h2>
    <p class="tag" style="margin: -1.3rem 0 0 -1rem;">&lt;h3/&gt;</p>

    <span class="head_alt"><p class="tag" style="margin: 0 0 0 -1rem;">&lt;p&gt;</p>
      <p>Working on Woolworth&#39;s Making the Difference platform (MTD), I was
        entrusted with the task of revamping and enhancing the site&#39;s Content
        Management System (CMS) for improved efficiency and customization.
        Leveraging the power of Prisma, a modern database toolkit, I embarked on
        a journey to recreate the CMS using a new headless CMS called Payload.
        With meticulous attention to detail, I successfully retrieved, modified,
        and seamlessly re-integrated all of the website&#39;s data into the Payload
        system. The result was a more user-friendly, highly customizable, and
        streamlined experience, empowering the content creators over at
        Woolworths more effectively do their work.
        <br>
        <br>
        During the construction of the CMS, I harnessed the power of innovative technologies
        like React, Payload, Mongoose, and Axios.
      </p>
      <p class="tag" style="margin: .5rem 0 0 -1rem;">&lt;p/&gt;</p></span>
    <p class="tag tag-last" style="margin: 1rem 0 0 -3rem;">&lt;section/&gt;</p></div>
  <div class="con modal-img"><div><a href="https://mtd.woolworths.co.za" target="_blank">${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Woolies,
      alt: "Woolworths MTD landing page",
      lazySrc: WooliesLazy
    },
    {},
    {}
  )}</a>
      <span><a class="link" href="https://mtd.woolworths.co.za" target="_blank">https://mtd.woolworths.co.za
        </a></span></div></div></section>`;
});
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1kuj9kb{width:100%;height:100%}",
  map: null
};
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { left = 0 } = $$props;
  let { right = 0 } = $$props;
  let intersecting = false;
  let container;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  $$result.css.add(css$3);
  return `<div class="svelte-1kuj9kb"${add_attribute("this", container, 0)}>${slots.default ? slots.default({ intersecting }) : ``}
</div>`;
});
const Image_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-oos5x1{height:100%;width:100%;opacity:0;transition:opacity 1200ms ease-out}img.loaded.svelte-oos5x1{opacity:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let thisImage;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$2);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" class="${["svelte-oos5x1", ""].join(" ").trim()}"${add_attribute("this", thisImage, 0)}>`;
});
const ImageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let nativeLoading = false;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true }, {}, {
    default: ({ intersecting }) => {
      return `${intersecting || nativeLoading ? `${validate_component(Image, "Image").$$render($$result, { alt, src }, {}, {})}` : ``}`;
    }
  })}`;
});
const ImageGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-19thqoj.svelte-19thqoj{overflow:hidden}button.svelte-19thqoj.svelte-19thqoj{width:100%;height:100%;cursor:pointer}.tag.svelte-19thqoj.svelte-19thqoj{position:absolute;left:2rem}.image-grid.svelte-19thqoj.svelte-19thqoj{position:relative;margin:0;width:100%;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0;grid-auto-rows:1fr}.popup.svelte-19thqoj.svelte-19thqoj{transition:all 200ms ease;width:11rem;opacity:0;scale:0.3;filter:brightness(0.5)}.image-box.svelte-19thqoj.svelte-19thqoj{display:flex;justify-content:center;align-items:center;aspect-ratio:1/1;transition:all 300ms ease;filter:brightness(0.5)}.image-box.svelte-19thqoj.svelte-19thqoj:hover{filter:brightness(1);transform:scale(1.05)}.image-box.svelte-19thqoj:hover .popup.svelte-19thqoj{z-index:1;opacity:1;scale:1;filter:brightness(1)}.image-box.svelte-19thqoj .image.svelte-19thqoj{position:absolute;width:102%;height:102%;object-fit:cover}@media(max-width: 600px){.image-grid.svelte-19thqoj.svelte-19thqoj{grid-template-columns:1fr 1fr !important;grid-auto-rows:minmax(auto, auto) !important;width:80% !important;align-self:center}.image-grid.svelte-19thqoj.svelte-19thqoj:last-child{margin-bottom:6rem !important}}",
  map: null
};
const ImageGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalState, $$unsubscribe_modalState;
  $$unsubscribe_modalState = subscribe(modalState, (value) => $modalState = value);
  let currentModal = null;
  const setModalState = (state) => {
    modalState.set(state);
  };
  createEventDispatcher();
  const closeModal = () => {
    setModalState(false);
    const scrollPosition = Math.abs(parseInt(document.body.style.top));
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  };
  $$result.css.add(css$1);
  $$unsubscribe_modalState();
  return `<div class="image-grid svelte-19thqoj">${validate_component(Modal, "Modal").$$render($$result, { isOpen: $modalState, onClose: closeModal }, {}, {
    default: () => {
      return `${currentModal === SanlamDS ? `${validate_component(SanlamDS, "SanlamDS").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === SanlamStory ? `${validate_component(SanlamStory, "SanlamStory").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === WineChampion ? `${validate_component(WineChampion, "WineChampion").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === RetailRocket ? `${validate_component(RetailRocket, "RetailRocket").$$render($$result, {}, {}, {})}` : ``}
    ${currentModal === Woolies_1 ? `${validate_component(Woolies_1, "WooliesMTD").$$render($$result, {}, {}, {})}` : ``}`;
    }
  })}

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">
        ${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Design,
      alt: "Sanlam design system thumbnail",
      lazySrc: DesignLazy
    },
    {},
    {}
  )}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">

        ${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: Sanlam$1,
      alt: "Sanlam design system thumbnail",
      lazySrc: SanlamLazy$1
    },
    {},
    {}
  )}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Wine, alt: "wwf wine logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Rocket$1, alt: "Retail Rocket logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <span class="svelte-19thqoj"><button class="image-box svelte-19thqoj"><span class="image svelte-19thqoj">${validate_component(ImageLoader, "ImageLoader").$$render($$result, { src: Woolies$1, alt: "Woolworths MTD logo" }, {}, {})}</span>
      <img${add_attribute("src", Circle, 0)} class="popup svelte-19thqoj" alt="view project"></button></span>

  <p class="tag svelte-19thqoj" style="top: -4rem">&lt;section&gt;</p>
  <p class="tag svelte-19thqoj" style="bottom: -4.5rem">&lt;section/&gt;</p>
</div>`;
});
const Work_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container-outer.svelte-a5tjwi.svelte-a5tjwi{display:flex;flex-direction:column;width:100%}.container-text.svelte-a5tjwi.svelte-a5tjwi{width:100%;height:33rem;display:flex;position:relative;margin:0}.container-text_inner.svelte-a5tjwi.svelte-a5tjwi{margin-left:9rem}.container-text.svelte-a5tjwi .head_alt.svelte-a5tjwi{width:80rem}.bg-text.svelte-a5tjwi.svelte-a5tjwi{position:absolute;right:0;bottom:10rem;font-size:50rem;font-family:"coolvetica";font-weight:400;line-height:0;letter-spacing:-1rem;color:rgba(0, 0, 0, 0.25);z-index:0}@media(max-width: 600px){.work.svelte-a5tjwi.svelte-a5tjwi{height:100dvh;width:100vw;overflow:hidden}.work.svelte-a5tjwi .container-outer.svelte-a5tjwi{margin-bottom:-20rem}.work.svelte-a5tjwi .container-outer .container-text.svelte-a5tjwi{width:80%;overflow:visible}.work.svelte-a5tjwi .container-outer .container-text .bg-text.svelte-a5tjwi{font-size:49rem;left:-20rem;bottom:18rem}.work.svelte-a5tjwi .container-outer .container-text_inner.svelte-a5tjwi{margin:0}.work.svelte-a5tjwi .container-outer .container-text .head_alt.svelte-a5tjwi{width:100%}}',
  map: null
};
const s = "6rem";
const sp = "-0.2rem";
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="Work" class="main work center-parent svelte-a5tjwi"><span class="aside-back"></span>
  <span class="container-outer svelte-a5tjwi"><div class="container-text svelte-a5tjwi"><p class="bg-text svelte-a5tjwi">Work</p>
      <span class="container-text_inner svelte-a5tjwi"><p class="tag" style="margin: 0 0 -2rem -1rem;">&lt;h2&gt;</p>

        <span class="head work svelte-a5tjwi">${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "M" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "y" }, {}, {})}
          <span> </span>
          <span> </span>
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "P" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "r" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "t" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "f" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "l" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "i" }, {}, {})}
          ${validate_component(Bounce, "Bounce").$$render($$result, { size: s, spacing: sp, text: "o" }, {}, {})}</span>

        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;h2/&gt;</p>
        <p class="tag" style="margin: -1rem 0 0 -1rem;">&lt;p&gt;</p>

        <p class="head_alt svelte-a5tjwi">A small gallery of recent projects chosen by me. I&#39;ve done them all
          together with amazing people from companies around the country. the
          list is a work in progress and there is more to come.<br>Interested
          to see some more? Visit my
          <a href="https://github.com/DanteDurant?tab=repositories" target="_blank">GitHub</a> page.
        </p>

        <p class="tag" style="margin: 0 0 4rem -1rem;">&lt;p/&gt;</p></span></div>

    ${validate_component(ImageGrid, "ImageGrid").$$render($$result, {}, {}, {})}</span>
</main>`;
});
export {
  Work as W
};
