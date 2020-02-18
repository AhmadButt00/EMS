import { myData } from "./JSON/data.js";
import { CRUD } from "./Classes/CrudClass.js";
import { initialDt } from "./DataTable/InitDataTable.js";
import { displayCityBtn } from "./Helpers/City/DisplayCityOp.js";
import { addCity, delCity, updateCity } from "./CRUD/CityCrud.js";
import { addHouse, delHouse, updateHouse } from "./CRUD/HouseCrud.js";
import { addDep, delDep, updateDep } from "./CRUD/DepCrud.js";
import { houseDataTable } from "./DataTable/HouseDataTable.js";
import { displayHouseDrp, getHouses } from "./Helpers/City/DisplayHouseInfo.js";
import { removeExistingDep } from "./Helpers/Department/RemoveExistingDepartments.js";
import { populateHouseIn } from "./Functions/PopulateHouse.js";
import { displayHouseBtn } from "./Helpers/House/DisplayHouseOp.js";
import { depDataTable } from "./DataTable/DepDataTable.js";
import { displayDepDrp, getDeps } from "./Helpers/House/DisplayDepInfo.js";
import { displayDepBtn } from "./Helpers/Department/DisplayDepOp.js";

// Populate All Employees DataTable
initialDt();
// Initializing datatable
const dataTable = new DataTable("#dt");
let cityArr = [];
myData.cities.forEach(element => {
  cityArr.push(element.name);
});
// Adding initial select options + table rows
cityArr.forEach(name => {
  let cityOb = new CRUD("cityTable", "citySelect", name);
  cityOb.addOption();
  cityOb.addRow();
});
// Populate Datatable with city wise employees
function cityEmpDt() {
  var cityEmpArr = houseDataTable();
  cityEmpArr.forEach(element => {
    let dataArr = Object.values(element);
    dataTable.rows().add(dataArr);
  });
}
// Remove Existing rows from the datatable
function removedtRows() {
  var rowToRemove = dataTable.body.querySelector("tr");
  var rows = dataTable.body.querySelectorAll("tr");
  rows.forEach(x => {
    dataTable.rows().remove(rowToRemove.dataIndex);
  });
  dataTable.page(1);
  var rows = dataTable.body.querySelectorAll("tr");
  rows.forEach(x => {
    dataTable.rows().remove(rowToRemove.dataIndex);
  });
}
function populateHouseInfo() {
  populateHouseIn();
}
// onChange City Select Dropdown
function changeCitySelect() {
  displayCityBtn();
  displayHouseDrp(); //Display Software House Dropdown me
  removedtRows(); //Remove Exisiting DataTable Rows
  cityEmpDt(); //Display City Wise Employees DataTable
  populateHouseInfo();
}
//Adding City Select OnChange Attribute
const citySe = document.getElementById("citySelect");
citySe.addEventListener("change", changeCitySelect);

// Add City Button onClick
function addCityFn() {
  addCity();
}
const addCityBtn = document.getElementById("addCitybtn"); //Add City onClick
addCityBtn.addEventListener("click", addCityFn);
function delCityFn() {
  delCity();
}
//Delete City onClick
const delCityBtn = document.getElementById("delCitybtn");
delCityBtn.addEventListener("click", delCityFn);
//Update City
function updateCityFn() {
  updateCity();
}
//Update City onClick
const updateCityBtn = document.getElementById("updateCitybtn");
updateCityBtn.addEventListener("click", updateCityFn);

// Display Department Wise Employee DataTable
function depEmpDt() {
  var depEmpArr = depDataTable();
  depEmpArr.forEach(element => {
    let dataArr = Object.values(element);
    dataTable.rows().add(dataArr);
  });
}

function populateDepInfo() {
  const depCheck = document.querySelectorAll("#depTable tbody tr"); //Get Department Table Rows
  let deps = getDeps();
  if (depCheck.length == 0) {
    for (let j = 0; j < deps.length; j++) {
      let depOb = new CRUD("depTable", "depSelect", deps[j]); //Create Object for department
      depOb.addOption();
      depOb.addRow();
    }
  } else {
    removeExistingDep();
    populateDepInfo();
  }
}
function changeDepSelect() {
  displayHouseBtn();
  displayDepDrp();
  removedtRows(); //Remove Exisiting DataTable Rows
  depEmpDt(); //Display House Wise Employees DataTable
  populateDepInfo();
}

// Adding Software House Select onChange Attribute
const houseSe = document.getElementById("houseSelect");
houseSe.addEventListener("change", changeDepSelect);

// Add House Button onClick
function addHouseFn() {
  addHouse();
}
const addHouseBtn = document.getElementById("addHousebtn"); //Add House onClick
addHouseBtn.addEventListener("click", addHouseFn);

//Delete House onClick
function delHouseFn() {
  delHouse();
}
const delHouseBtn = document.getElementById("delHousebtn");
delHouseBtn.addEventListener("click", delHouseFn);

//Update House onClick
function updateHouseFn() {
  updateHouse();
}
const updateHouseBtn = document.getElementById("updateHousebtn");
updateHouseBtn.addEventListener("click", updateHouseFn);

function changeEmpSelect() {
  displayDepBtn();
}

// Adding Department Select onChange Attribute
const depSe = document.getElementById("depSelect");
depSe.addEventListener("change", changeEmpSelect);

// Add Department Button onClick
function addDepFn() {
  addDep();
}
const addDepBtn = document.getElementById("addDepbtn"); //Add Department onClick
addDepBtn.addEventListener("click", addDepFn);

//Delete Department onClick
function delDepFn() {
  delDep();
}
const delDepBtn = document.getElementById("delDepbtn");
delDepBtn.addEventListener("click", delDepFn);

//Update Department onClick
function updateDepFn() {
  updateDep();
}
const updateDepBtn = document.getElementById("updateDepbtn");
updateDepBtn.addEventListener("click", updateDepFn);
