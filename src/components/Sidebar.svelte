<script>
  import linkedIn from "$lib/images/linkedin.svg";
  import logo from "$lib/images/DDLogo.svg";

  let items = [
    { label: "About", link: "/item1" },
    { label: "My Skills", link: "/item2" },
    { label: "Work", link: "/item3" },
    { label: "Contact", link: "/item3" },
  ];
</script>

<menu class="main-menu">
  <div class="main-menu_top">
    <a href="http://127.0.0.1:5173/">
      <svg
        class="main-menu_top_logo"
        width="45"
        height="46"
        viewBox="0 0 45 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.6562 22.7188C38.6562 27.8646 37.6667 32.1667 35.6875 35.625C33.7292 39.0625 30.8854 41.6562 27.1562 43.4062C23.4271 45.1354 18.9375 46 13.6875 46H0.75V0.3125H15.0938C19.8854 0.3125 24.0417 1.16667 27.5625 2.875C31.0833 4.5625 33.8125 7.07292 35.75 10.4062C37.6875 13.7188 38.6562 17.8229 38.6562 22.7188ZM28.5938 22.9688C28.5938 19.5938 28.0938 16.8229 27.0938 14.6562C26.1146 12.4688 24.6562 10.8542 22.7188 9.8125C20.8021 8.77083 18.4271 8.25 15.5938 8.25H10.4375V38H14.5938C19.3229 38 22.8333 36.7396 25.125 34.2188C27.4375 31.6979 28.5938 27.9479 28.5938 22.9688Z"
          fill="#08FDD8"
        />
        <path
          d="M44.6562 22.7188C44.6562 27.8646 43.6667 32.1667 41.6875 35.625C39.7292 39.0625 36.8854 41.6562 33.1562 43.4062C29.4271 45.1354 24.9375 46 19.6875 46H6.75V0.3125H21.0938C25.8854 0.3125 30.0417 1.16667 33.5625 2.875C37.0833 4.5625 39.8125 7.07292 41.75 10.4062C43.6875 13.7188 44.6562 17.8229 44.6562 22.7188ZM34.5938 22.9688C34.5938 19.5938 34.0938 16.8229 33.0938 14.6562C32.1146 12.4688 30.6562 10.8542 28.7188 9.8125C26.8021 8.77083 24.4271 8.25 21.5938 8.25H16.4375V38H20.5938C25.3229 38 28.8333 36.7396 31.125 34.2188C33.4375 31.6979 34.5938 27.9479 34.5938 22.9688Z"
          fill="#FD2055"
        />
      </svg>
    </a>
    <a href="http://127.0.0.1:5173/">
      <span>Dante</span>
    </a>
    <div>Web Developer</div>
  </div>

  <nav class="main-menu_nav">
    <a href="http://127.0.0.1:5173/">About</a>
    <a href="http://127.0.0.1:5173/">My Skills</a>
    <a href="http://127.0.0.1:5173/">Work</a>
    <a href="http://127.0.0.1:5173/">Contact</a>
  </nav>

  <ul class="social">
    <li>
      <a href="www.google.com">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          ><path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            class=""
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill:currentColor;"
          /></svg
        >
      </a>
    </li>
    <li>
      <a href="www.google.com">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          ><path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            class=""
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill:currentColor;"
          /></svg
        >
      </a>
    </li>
    <li>
      <a href="www.google.com">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="youtube-square"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          ><path
            fill="currentColor"
            d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
            class=""
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill:currentColor;"
          /></svg
        >
      </a>
    </li>
  </ul>
</menu>

<style lang="scss">
  .main-menu {
    display: flex;
    width: 13rem;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    background-color: #181818;
    left: 0;
    top: 0;
    right: auto;
    bottom: 0;
    justify-content: space-between;
    align-items: center;

    &_top {
      display: flex;
      width: 100%;
      min-height: 21rem;
      background-color: #000;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
      }

      &_logo {
        height: auto;
        width: 7.2rem;
      }

      // name
      span {
        color: #fff;
        font-size: 2.7rem;
        line-height: 2;
        font-weight: 900;
      }

      // job
      div {
        padding-top: 1rem;
        color: #fff;
        font-family: serif;
        color: #a5a5a5;
        font-size: 1.2rem;
      }
    }

    &_nav {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #282828;

      a {
        display: block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #282828;
        justify-self: center;
        color: #909090;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 5rem;
      }

      a:last-child {
        color: #08fdd8;
      }
    }
  }

  .social {
    display: flex;
    margin-top: 2rem;
    list-style: none;
    justify-content: space-between;
    height: 20rem;
    width: 56%;

    svg {
      width: 1.5rem;
      color: #909096;

      &:hover {
        color: #08fdd8;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  a:hover {
    color: #08fdd8;
  }
</style>
