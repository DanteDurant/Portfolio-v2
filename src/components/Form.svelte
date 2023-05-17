<script>
  import Button from "./Button.svelte";
</script>

<main>
  <p class="tag" style="margin: 0 0 1rem -4rem;">&lt;form&gt;</p>
  <span>
    <form>
      <div>
        <input
          type="text"
          class="name"
          placeholder="Name"
          name="name"
          value=""
        />
        <input
          type="text"
          class="email"
          placeholder="Email"
          name="email"
          value=""
        />
      </div>

      <div class="message">
        <textarea placeholder="Message" name="message" value="" rows="10" />
      </div>
    </form>

    <span class="button">
      <Button text="Send Message!" />
    </span>
  </span>
  <p class="tag" style="margin: 1.5rem 0 0 -4rem;">&lt;form/&gt;</p>
</main>

<style lang="scss">
  main {
    padding-right: 2.5rem;
  }

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
    font-family: "Open Sans", sans-serif;

    & > textarea {
      font-family: "Open Sans", sans-serif;
    }
  }

  .button {
    margin-top: 2rem;
    display: flex;
  }
</style>
