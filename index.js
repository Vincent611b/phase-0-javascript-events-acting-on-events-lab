// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left);
    
    if (left > 0) { // Check if dodger is not at the left edge
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left);

    if (left < window.innerWidth - dodger.clientWidth) { // Check if dodger is not at the right edge
        dodger.style.left = `${left + 1}px`;
    }
}
