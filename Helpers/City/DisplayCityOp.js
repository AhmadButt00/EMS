// Display City CRUD Buttons
function displayCityBtn(){
    let addCitybtn = document.getElementById('addCitybtn');
    addCitybtn.style.display = "block";
    let delCitybtn = document.getElementById('delCitybtn');
    delCitybtn.style.display = "block";
    let updateCitybtn = document.getElementById('updateCitybtn');
    updateCitybtn.style.display = "block";
    }
// Display Add City Input
function displayAddCityInp(){
    let citylbl = document.getElementById('citylbl');
    let cityInp = document.getElementById('cityInp');
    citylbl.style.display = "block";
    cityInp.style.display = "block";
    let newCitylbl = document.getElementById('newCitylbl');
    newCitylbl.style.display = "none";
    let newCityInp = document.getElementById('newCityInp');
    newCityInp.style.display = "none";
}
// Reset all city inputs to default -empty
function clearCityInp(){
    let cityInp = document.getElementById('cityInp');
    cityInp.value = '';
    let newCityInp = document.getElementById('newCityInp');
    newCityInp.value = '';
    }
// Display Input for update city
function displayUpdateInp(){
    let newCitylbl = document.getElementById('newCitylbl');
    newCitylbl.style.display = "block";
    let newCityInp = document.getElementById('newCityInp');
    newCityInp.style.display = "block";
}
export {displayCityBtn, displayAddCityInp, clearCityInp, displayUpdateInp};