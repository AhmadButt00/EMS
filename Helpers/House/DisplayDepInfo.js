import {myData} from '../../JSON/data.js';
function displayHouseDrp(){
    let depDrpDiv = document.getElementById('depDropdown');
    depDrpDiv.style.display = 'block';
}
function getDeps(){
    let depEmpArr = [];
    let depDropDiv = document.getElementById('depDropdown');
    depDropDiv.style.display = "block";
    let selectedCity = document.getElementById('citySelect').value;
    let selectedHouse = document.getElementById('houseSelect').value;
    cityObj.forEach( cityOb => {
      if(selectedCity == cityOb.name){
        let softwareHouses = cityOb.softwareHouses;
        softwareHouses.forEach(houseObj =>{
          if(selectedHouse == houseObj.name){
            departments.forEach(department =>{
              let employees = department.employees;
              employees.forEach(employee =>{
                depEmpArr.push(employee);
              })
            })
          }
        })
      }
    })
    return depEmpArr;
  }
export {displayHouseDrp, getDeps};