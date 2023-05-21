<script>
  import Button from "./Button.svelte";
</script>

<main>
  <p class="tag" style="margin: 0 0 1rem -1rem;">&lt;form&gt;</p>
  <span>
    <form action="https://formspree.io/f/xayzkgwq" method="POST">
      <div>
        <input
          type="text"
          class="name"
          placeholder="Name"
          name="name"
          value=""
          required
        />
        <input
          type="email"
          class="email"
          placeholder="Email"
          name="email"
          value=""
          required
        />
      </div>

      <div class="message">
        <textarea
          placeholder="Message"
          name="message"
          value=""
          autocomplete="off"
          rows="10"
          cols="60"
          required
        />
      </div>

      <button class="button">
        <Button text="Send Message!" />
      </button>
    </form>
  </span>
  <p class="tag" style="margin: 1.5rem 0 0 -1rem;">&lt;/form&gt;</p>
</main>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  input,
  textarea {
    background-color: #3c3c3c;
    color: white;
    width: 100%;
    font-size: 1.8rem;
    border-radius: 0;
    border: none;
    padding-left: 1rem;
    resize: none;

    &:focus-within {
      outline: none;
      border: var(--pri) solid 1px;
    }

    &:invalid {
      border-color: var(--sec);
    }
  }

  form > div {
    display: flex;
    width: 100%;
    height: 6rem;
    column-gap: 1rem;
  }

  form > div + * {
    margin-top: 1rem;
  }

  .message {
    height: 20rem;

    & > textarea {
      padding-top: 1.5rem;
      font-family: "Open Sans", sans-serif;
    }
  }

  .button {
    margin-top: 2rem;
    display: flex;
    padding: 0;
    width: min-content;
    width: min-content;
    background-color: transparent;
    border: none;
  }
</style>
