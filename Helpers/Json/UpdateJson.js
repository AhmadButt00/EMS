import {myData} from '../../JSON/data.js';
function upJson(name, newName){
    myData.cities.forEach(element => {
        if(element["name"] == name){
            element["name"] = newName;
        }
        else{
            element.softwareHouses.forEach(house =>{
                if(house["name"] == name){
                    house["name"] = newName;
                } 
                else{
                    house.departments.forEach(department =>{
                        if(department["name"] == name){
                            department["name"] = newName;
                        }
                        else(
                            department.employees.forEach(employee =>{
                                if(employee["name"] == name){
                                    employee["name"] = newName;
                                }
                            })
                        )
                    })
                }
            })
        }
    });
}
export {upJson};