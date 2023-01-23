const form = document.querySelector("#form-emotions")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
form.addEventListener("change", save)
button.addEventListener("click", buttonEvent)
function buttonEvent() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  if (nlwSetup.dayExists(today)) {
    alert("O dia em questão já foi registrado!")
    return
  }
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("emotions", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("emotions")) || {}
nlwSetup.setData(data)
nlwSetup.load()