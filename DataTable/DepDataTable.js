import { myData } from "../JSON/data.js";
var data = Object.assign({}, myData);
const cityObj = data.cities;
// Display Department Dropdown + table + Datatable
function depDataTable() {
  let depEmpArr = [];
  let selectedCity = document.getElementById("citySelect").value;
  let selectedHouse = document.getElementById("houseSelect").value;
  cityObj.forEach(cityOb => {
    if (selectedCity == cityOb.name) {
      let softwareHouses = cityOb.softwareHouses;
      softwareHouses.forEach(houseObj => {
        if (selectedHouse == houseObj.name) {
          let departments = houseObj.departments;
          departments.forEach(department => {
            let employees = department.employees;
            employees.forEach(employee => {
              depEmpArr.push(employee);
            });
          });
        }
      });
    }
  });
  return depEmpArr;
}
export { depDataTable };
