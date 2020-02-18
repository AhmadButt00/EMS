import { CRUD } from "../Classes/CrudClass.js";
import { getHouses } from "../Helpers/City/DisplayHouseInfo.js";
import { removeExistingHouse } from "../Helpers/City/RemoveExistingHouse.js";
function populateHouseIn() {
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
    populateHouseIn();
  }
}
export { populateHouseIn };
