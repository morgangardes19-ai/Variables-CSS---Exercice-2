let color = document.querySelector("#chooser");

color.addEventListener("input", handleClickOnInput);

function handleClickOnInput() {
  document.documentElement.style.setProperty("--main-color", color.value);
}