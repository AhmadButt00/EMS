import { Inputs } from "../Classes/InputClass.js";
import { CRUD } from "../Classes/CrudClass.js";
import { myData } from "../JSON/data.js";
import {
  displayAddCityInp,
  clearCityInp,
  displayUpdateInp
} from "../Helpers/City/DisplayCityOp.js";
let cityObj = new Inputs("cityInp", "newCityInp");
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
export { addCity, delCity, updateCity };
