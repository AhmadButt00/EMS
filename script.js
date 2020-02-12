import {myData} from './JSON/obj.js';
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