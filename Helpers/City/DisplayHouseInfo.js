import {myData} from '../../JSON/data.js';
function displayHouseDrp(){
    let houseDrpDiv = document.getElementById('houseDropdown');
    houseDrpDiv.style.display = 'block';
}
function getHouses(){
    let houseArr = [];
    let selectedCity = document.getElementById('citySelect').value;
    myData.cities.forEach(city =>{
        if(city.name == selectedCity){
            let houses = city.softwareHouses;
            houses.forEach(house=>{
                houseArr.push(house.name);
            })
        }
    })
    return houseArr;
}
export {displayHouseDrp, getHouses};