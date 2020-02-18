// Display City CRUD Buttons
function displayDepBtn() {
  let addDepbtn = document.getElementById("addDepbtn");
  addDepbtn.style.display = "block";
  let delDepbtn = document.getElementById("delDepbtn");
  delDepbtn.style.display = "block";
  let updateDepbtn = document.getElementById("updateDepbtn");
  updateDepbtn.style.display = "block";
}
// Display Add department Input
function displayAddDepInp() {
  let deplbl = document.getElementById("deplbl");
  let depInp = document.getElementById("depInp");
  deplbl.style.display = "block";
  depInp.style.display = "block";
  let newDeplbl = document.getElementById("newDeplbl");
  newDeplbl.style.display = "none";
  let newDepInp = document.getElementById("newDepInp");
  newDepInp.style.display = "none";
}
// Reset all department inputs to default -empty
function clearDepInp() {
  let depInp = document.getElementById("depInp");
  depInp.value = "";
  let newDepInp = document.getElementById("newDepInp");
  newDepInp.value = "";
}
// Display Input for update department
function displayDepUpdateInp() {
  let newDeplbl = document.getElementById("newDeplbl");
  newDeplbl.style.display = "block";
  let newDepInp = document.getElementById("newDepInp");
  newDepInp.style.display = "block";
}
export { displayDepBtn, displayAddDepInp, clearDepInp, displayDepUpdateInp };
