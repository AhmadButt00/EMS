import {myData} from '../JSON/data.js';
import {populateDataTable} from '../Functions/PopulateDataTable.js';
function initialDt(){
    // initializing array for employee data
    let cityObj = myData.cities; //Main Object City Data
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
}
export {initialDt};