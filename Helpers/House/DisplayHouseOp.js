// Display City CRUD Buttons
function displayHouseBtn() {
  let addHousebtn = document.getElementById("addHousebtn");
  addHousebtn.style.display = "block";
  let delHousebtn = document.getElementById("delHousebtn");
  delHousebtn.style.display = "block";
  let updateHousebtn = document.getElementById("updateHousebtn");
  updateHousebtn.style.display = "block";
}
// Display Add House Input
function displayAddHouseInp(){
    let houselbl = document.getElementById('houselbl');
    let houseInp = document.getElementById('houseInp');
    houselbl.style.display = "block";
    houseInp.style.display = "block";
    let newHouselbl = document.getElementById('newHouselbl');
    newHouselbl.style.display = "none";
    let newHouseInp = document.getElementById('newHouseInp');
    newHouseInp.style.display = "none";
}
// Reset all house inputs to default -empty
function clearHouseInp(){
    let houseInp = document.getElementById('houseInp');
    houseInp.value = '';
    let newHouseInp = document.getElementById('newHouseInp');
    newHouseInp.value = '';
    }
// Display Input for update house
function displayHouseUpdateInp(){
    let newHouselbl = document.getElementById('newHouselbl');
    newHouselbl.style.display = "block";
    let newHouseInp = document.getElementById('newHouseInp');
    newHouseInp.style.display = "block";
}
export { displayHouseBtn, displayAddHouseInp, clearHouseInp, displayHouseUpdateInp };
