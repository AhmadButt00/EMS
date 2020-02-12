import {myData} from './JSON/obj.js';
import {populateDataTable} from './Functions/PopulateDataTable.js';
let data = Object.assign({},myData);
class City{
    constructor(name){
        this.name = name;
    }
    addOption(){
        let citiesDrop = document.getElementById('citySelect');
        let option = document.createElement('option');
        option.value = this.name;
        option.text = this.name;
        citiesDrop.appendChild(option);  
    }
    addRow(){
        var tableDiv = document.getElementById('tableDiv');
        tableDiv.style.display = "block";
        let cityTable = document.getElementById('cityTable');
        let tableBody = document.createElement('tbody');
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.innerHTML = this.name;
        row.appendChild(cell);
        tableBody.appendChild(row);
        cityTable.appendChild(tableBody);
    }
}
let cityArr = [];
data.cities.forEach(element => {
    cityArr.push(element.name);
})
cityArr.forEach(name => {
    let cityObj = new City(name);
    cityObj.addOption();
    cityObj.addRow();
})
// initializing array for employee data
let cityObj = data.cities; //Main Object City Data
let empArr = []; //employee Array Initialization
// Get All Employees Data
for(let i=0; i<cityObj.length; i++){
    let  obj = cityObj[i];
    let softwareHouses = obj.softwareHouses;
    for(let j = 0;j <softwareHouses.length; j++){
      let departments = softwareHouses[j].departments;
      for (let k =0; k<departments.length; k++){
        let employees = departments[k].employees;
        employees.forEach(element => {
          empArr.push(element);
        })
      }
    }
  }
  
  // Initial datatable display call
  populateDataTable(empArr,'dt');
  // Initializing datatable
var dataTable = new DataTable("#dt");