let color = document.querySelector("#chooser");
// let subtitleDiv = document.querySelector(".subtitle");

color.addEventListener("input", handleClickOnInput);
// subtitleDiv.addEventListener("input", handleClickOnInput);

function handleClickOnInput() {
//   console.log(color.value);
  document.documentElement.style.setProperty("--main-color", color.value);
//   subtitleDiv.style.setProperty("--main-color", color.value);
}
