import { myData } from "../../JSON/data.js";
//Display Department Info Div
function displayDepDrp() {
  let depDrpDiv = document.getElementById("depDropdown");
  depDrpDiv.style.display = "block";
}
// Get all Department Names
function getDeps() {
  let depEmpArr = [];
  let depDropDiv = document.getElementById("depDropdown");
  depDropDiv.style.display = "block";
  let selectedCity = document.getElementById("citySelect").value;
  let selectedHouse = document.getElementById("houseSelect").value;
  myData.cities.forEach(cityOb => {
    if (selectedCity == cityOb.name) {
      let softwareHouses = cityOb.softwareHouses;
      softwareHouses.forEach(houseObj => {
        if (selectedHouse == houseObj.name) {
          let departments = houseObj.departments;
          departments.forEach(department => {
            depEmpArr.push(department.name);
          });
        }
      });
    }
  });
  return depEmpArr;
}
export { displayDepDrp, getDeps };
