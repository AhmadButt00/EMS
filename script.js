import { myData } from "./JSON/data.js";
import { initialDt } from "./DataTable/InitDataTable.js";
import {
  displayCityBtn,
  displayAddCityInp,
  clearCityInp,
  displayUpdateInp
} from "./Helpers/City/DisplayCityOp.js";
import { deleteJson } from "./Helpers/Json/DeleteJson.js";
import { upJson } from "./Helpers/Json/UpdateJson.js";
import { houseDataTable } from "./DataTable/HouseDataTable.js";
import { displayHouseDrp, getHouses } from "./Helpers/City/DisplayHouseInfo.js";
import {removeExistingHouse} from './Helpers/City/RemoveExistingHouse.js';
import { displayHouseBtn, displayAddHouseInp, clearHouseInp, displayHouseUpdateInp } from './Helpers/House/DisplayHouseOp.js';
import {depDataTable} from './DataTable/DepDataTable.js';

// Inputs Class Body
class Inputs {
  constructor(input, newInput) {
      this.input = input;
      this.newInput = newInput;
  }
  // Get Input
  getInput() {
    let Inp = document.getElementById(this.input).value;
    if (Inp != null || Inp != undefined || Inp != "") {
      return Inp;
    }
  }
  getnewInput() {
    //Get new Input
    let newInp = document.getElementById(this.newInput).value;
    if (newInp != null || newInp != undefined || newInp != "") {
      return newInp;
    }
  }
}
// CRUD Operations Class Body
class CRUD {
  constructor(tableId, selectOp, name, mainOb, subOb, newName) {
    this.tableid = tableId;
    this.selectOp = selectOp;
    this.name = name;
    this.mainOb = mainOb;
    this.subOb = subOb;
    this.newName = newName;
  }
  checkExisting() {
    //check if information already exists
    var selectOption = document.getElementById(this.selectOp);
    let existingOptions = [];
    var i;
    for (i = 1; i < selectOption.length; i++) {
      existingOptions.push(selectOption.options[i].text);
    }
    if (existingOptions.includes(this.name)) {
      return false;
    } else {
      return true;
    }
  }
  // Add Row to the relative table
  addRow() {
    let tableBody = document
      .getElementById(this.tableid)
      .getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerHTML = this.name;
    row.appendChild(cell);
    tableBody.appendChild(row);
  }
  delRow() {
    //Delete Row of Relative Table
    let tableBody = document
      .getElementById(this.tableid)
      .getElementsByTagName("tbody")[0];
    let rows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].cells[0].innerHTML;
      if (rowText == this.name) {
        rows[i].cells[0].parentNode.parentNode.removeChild(rows[i]);
      }
    }
  }
  updateRow() {
    //Update the rows with new user input
    let tableBody = document
      .getElementById(this.tableid)
      .getElementsByTagName("tbody")[0];
    let rows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].cells[0].innerHTML;
      if (rowText == this.name) {
        rows[i].cells[0].innerHTML = this.newName;
      }
    }
  }
  // Add Option to the relative Select DropDown
  addOption() {
    const selectOp = document.getElementById(this.selectOp);
    let option = document.createElement("option");
    option.value = this.name;
    option.text = this.name;
    selectOp.appendChild(option);
  }
  // Delete Option from relative Select Dropdown
  delOption() {
    const selectOp = document.getElementById(this.selectOp);
    for (let i = 1; i < selectOp.length; i++) {
      if (selectOp.options[i].value == this.name) {
        selectOp.remove(i);
        break;
      }
    }
  }
  updateOption() {
    //Update Option from relative Select Dropdown
    const selectOp = document.getElementById(this.selectOp);
    for (var i = 1; i < selectOp.length; i++) {
      if (selectOp.options[i].value == this.name) {
        selectOp.options[i].text = this.newName;
        selectOp.options[i].value = this.newName;
        break;
      }
    }
  }
  // Adding Object to JSON Data
  addJSON() {
    let mainObj = this.mainOb;
    let subObject = this.subOb;
    let obj = {
      name: this.name
    };
    obj[subObject] = [];
    mainObj.push(obj);
  }
  // Removing Object from JSON Data
  delJSON() {
    deleteJson(this.name);
  }
  updateJSON() {
    upJson(this.name, this.newName);
  }
}
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
  const houseCheck = document.querySelectorAll("#houseTable tbody tr"); //Get SoftwareHouse Table Rows
  let houses = getHouses();
  if (houseCheck.length == 0) {
    for (let j = 0; j < houses.length; j++) {
      let houseOb = new CRUD("houseTable", "houseSelect", houses[j]); //Create Object for house
      houseOb.addOption();
      houseOb.addRow();
    }
  } else {
    removeExistingHouse();
    populateHouseInfo();
  }
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
let cityObj = new Inputs("cityInp", "newCityInp");
// Add City Button onClick
function addCity() {
  displayAddCityInp(); //Display Add City Input
  let city = cityObj.getInput(); //Get City User Input
  if (city.length != 0) {
    let cityOb = new CRUD(
      "cityTable",
      "citySelect",
      city,
      myData.cities,
      "softwareHouses"
    );
    let check = cityOb.checkExisting(); //Check if city already Exists..!!
    if (check == true) {
      cityOb.addOption();
      cityOb.addRow();
      cityOb.addJSON();
      clearCityInp();
    } else {
      alert("City Already Exists");
      clearCityInp();
    }
  }
}
const addCityBtn = document.getElementById("addCitybtn"); //Add City onClick
addCityBtn.addEventListener("click", addCity);
function delCity() {
  //delete cityOnClick
  displayAddCityInp();
  let city = cityObj.getInput();
  if (city.length != 0) {
    let cityOb = new CRUD(
      "cityTable",
      "citySelect",
      city,
      myData.cities,
      "softwareHouses"
    );
    let check = cityOb.checkExisting(); //Check if city exists
    if (check == false) {
      cityOb.delRow();
      cityOb.delOption();
      cityOb.delJSON();
      clearCityInp();
    } else {
      alert("City Doesn't Exists");
      clearCityInp();
    }
  }
}
//Delete City onClick
const delCityBtn = document.getElementById("delCitybtn");
delCityBtn.addEventListener("click", delCity);
//Update City
function updateCity() {
  displayAddCityInp();
  displayUpdateInp();
  let city = cityObj.getInput();
  let newCity = cityObj.getnewInput();
  if (city.length != 0 && newCity.length != 0) {
    let cityOb = new CRUD(
      "cityTable",
      "citySelect",
      city,
      myData.cities,
      "softwareHouses",
      newCity
    );
    let check = cityOb.checkExisting(); //Check if city exists
    if (check == false) {
      cityOb.updateOption();
      cityOb.updateRow();
      cityOb.updateJSON();
      clearCityInp();
    } else {
      alert("City Doesn't Exists");
      clearCityInp();
    }
  }
}
//Update City onClick
const updateCityBtn = document.getElementById("updateCitybtn");
updateCityBtn.addEventListener("click", updateCity);

// Display Department Wise Employee DataTable
function depEmpDt(){
    var depEmpArr = depDataTable();
    depEmpArr.forEach(element =>{
      let dataArr = Object.values(element)
      dataTable.rows().add(dataArr);
    })
  }

function changeDepSelect(){
    displayHouseBtn();
    removedtRows(); //Remove Exisiting DataTable Rows
    depEmpDt(); //Display City Wise Employees DataTable
}

// Adding Software House Select onChange Attribute
const houseSe = document.getElementById('houseSelect');
houseSe.addEventListener("change", changeDepSelect);

let houseObj = new Inputs("houseInp", "newHouseInp");
// Add House Button onClick
function addHouse() {
  displayAddHouseInp(); //Display Add House Input
  let house = houseObj.getInput(); //Get House User Input
  if (house.length != 0) {
    let houseOb = new CRUD(
      "houseTable",
      "houseSelect",
      house,
      myData.cities[1].softwareHouses,
      "departments"
    );
    let check = houseOb.checkExisting(); //Check if House already Exists..!!
    if (check == true) {
      houseOb.addOption();
      houseOb.addRow();
      houseOb.addJSON();
      clearHouseInp();
    } else {
      alert("House Already Exists");
      clearHouseInp();
    }
  }
}
const addHouseBtn = document.getElementById("addHousebtn"); //Add House onClick
addHouseBtn.addEventListener("click", addHouse);

function delHouse() {
    //delete house OnClick
    displayAddHouseInp();
    let house = houseObj.getInput();
    if (house.length != 0) {
      let houseOb = new CRUD(
        "houseTable",
        "houseSelect",
        house,
        myData.cities[1].softwareHouses,
      "departments"
      );
      let check = houseOb.checkExisting(); //Check if house exists
      if (check == false) {
        houseOb.delRow();
        houseOb.delOption();
        houseOb.delJSON();
        clearHouseInp();
      } else {
        alert("House Doesn't Exists");
        clearHouseInp();
      }
    }
  }
  //Delete House onClick
  const delHouseBtn = document.getElementById("delHousebtn");
  delHouseBtn.addEventListener("click", delHouse);

  //Update City
function updateHouse() {
  displayAddHouseInp();
  displayHouseUpdateInp();
  let house = houseObj.getInput();
  let newHouse = houseObj.getnewInput();
  if (house.length != 0 && newHouse.length != 0) {
    let houseOb = new CRUD(
      "houseTable",
      "houseSelect",
      house,
      myData.cities[1].softwareHouses,
      "departments",
      newHouse
    );
    let check = houseOb.checkExisting(); //Check if city exists
    if (check == false) {
      houseOb.updateOption();
      houseOb.updateRow();
      houseOb.updateJSON();
      clearHouseInp();
    } else {
      alert("House Doesn't Exists");
      clearHouseInp();
    }
  }
}
//Update City onClick
const updateHouseBtn = document.getElementById("updateHousebtn");
updateHouseBtn.addEventListener("click", updateHouse);



