import { Inputs } from "../Classes/InputClass.js";
import { CRUD } from "../Classes/CrudClass.js";
import { myData } from "../JSON/data.js";
import {
  displayAddHouseInp,
  clearHouseInp,
  displayHouseUpdateInp
} from "../Helpers/House/DisplayHouseOp.js";
let houseObj = new Inputs("houseInp", "newHouseInp");
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
  //Update House
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
export {addHouse, delHouse, updateHouse};