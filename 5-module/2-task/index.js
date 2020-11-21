function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function(event) {
    let element = document.querySelector("#text");
    if (element.hidden === false) {
      element.hidden = "true";
    } else {
      element.hidden = "";
    }
});
}
