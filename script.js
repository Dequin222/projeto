function togglemode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //substituir a legenda

    html.classList.remove("light")
    img.setAttribute("src", "./assets/cr.jpg")
    alt.setAttribute("alt")
    //legenda normal
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/abcd.jpg")
    alt.setAttribute("alt", "Fundo vermelho com cristiano ronaldo serio")
    //legenda light
  }
}
