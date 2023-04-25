export function toggleRubberBand() {
    const bouncy = document.querySelector(".bouncy");
    console.log("ghfisghfuis");
    bouncy.addEventListener("mouseenter", toggleRubberBand);
  
    function toggleRubberBand(e) {
      bouncy.classList.add("bouncing");
      bouncy.classList.remove("bouncing");
    }
  }