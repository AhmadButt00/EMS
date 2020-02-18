import { Inputs } from "../Classes/InputClass.js";
import { CRUD } from "../Classes/CrudClass.js";
import { myData } from "../JSON/data.js";
import {
  displayAddDepInp,
  clearDepInp,
  displayDepUpdateInp
} from "../Helpers/Department/DisplayDepOp.js";
let depObj = new Inputs("depInp", "newDepInp");
function addDep() {
    displayAddDepInp(); //Display Add Department Input
    let dep = depObj.getInput(); //Get Department User Input
    if (dep.length != 0) {
      let depOb = new CRUD(
        "depTable",
        "depSelect",
        dep,
        myData.cities[1].softwareHouses[1].departments,
        "employees"
      );
      let check = depOb.checkExisting(); //Check if Department already Exists..!!
      if (check == true) {
        depOb.addOption();
        depOb.addRow();
        depOb.addJSON();
        clearDepInp();
      } else {
        alert("Department Already Exists");
        clearDepInp();
      }
    }
  }
  //Delete Department Function
  function delDep() {
    displayAddDepInp();
    let dep = depObj.getInput();
    if (dep.length != 0) {
      let depOb = new CRUD(
        "depTable",
        "depSelect",
        dep,
        myData.cities[1].softwareHouses[1].departments,
        "employees"
      );
      let check = depOb.checkExisting(); //Check if Department exists
      if (check == false) {
        depOb.delRow();
        depOb.delOption();
        depOb.delJSON();
        clearDepInp();
      } else {
        alert("Department Doesn't Exists");
        clearDepInp();
      }
    }
  }
  //Update Department
function updateDep() {
    displayAddDepInp();
    displayDepUpdateInp();
    let dep = depObj.getInput();
    let newDep = depObj.getnewInput();
    if (dep.length != 0 && newDep.length != 0) {
      let depOb = new CRUD(
        "depTable",
        "depSelect",
        dep,
        myData.cities[1].softwareHouses[1].departments,
        "employees",
        newDep
      );
      let check = depOb.checkExisting(); //Check if Department exists
      if (check == false) {
        depOb.updateOption();
        depOb.updateRow();
        depOb.updateJSON();
        clearDepInp();
      } else {
        alert("City Doesn't Exists");
        clearDepInp();
      }
    }
  }
export {addDep, delDep, updateDep};