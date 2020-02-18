import {myData} from '../../JSON/data.js';
function deleteJson(name){
    myData.cities.forEach(element => {
        if(element["name"] == name && element["softwareHouses"]){
            delete element["name"];
            delete element ["softwareHouses"];
        }
        else{
            element.softwareHouses.forEach(house =>{
                if(house["name"] == name){
                    delete house["name"];
                    delete house["departments"];
                } 
                else{
                    house.departments.forEach(department =>{
                        if(department["name"] == name){
                            delete department["name"];
                            delete department["employees"];
                        }
                        else(
                            department.employees.forEach(employee =>{
                                if(employee["name"] == name){
                                    delete employee["name"];
                                    delete employee["salary"];
                                    delete employee["mobileNumber"];
                                    delete employee["city"];
                                    delete employee["type"];
                                }
                            })
                        )
                    })
                }
            })
        }
    });
}
export {deleteJson};