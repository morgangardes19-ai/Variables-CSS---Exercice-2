let color = document.querySelector("#chooser");

color.addEventListener("input", handleClickOnInput);

function handleClickOnInput() {
  console.log(color.value);

  document.documentElement.style.setProperty("--main-color", color.value);
}
