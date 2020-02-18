import { myData } from "../JSON/data.js"; // CRUD Operations Class Body
class CRUD {
  constructor(tableId, selectOp, name, mainOb, subOb, newName) {
    this.tableid = tableId;
    this.selectOp = selectOp;
    this.name = name;
    this.mainOb = mainOb;
    this.subOb = subOb;
    this.newName = newName;
  }
  checkExisting() {
    //check if information already exists
    var selectOption = document.getElementById(this.selectOp);
    let existingOptions = [];
    var i;
    for (i = 1; i < selectOption.length; i++) {
      existingOptions.push(selectOption.options[i].text);
    }
    if (existingOptions.includes(this.name)) {
      return false;
    } else {
      return true;
    }
  }
  // Add Row to the relative table
  addRow() {
    let tableBody = document
      .getElementById(this.tableid)
      .getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerHTML = this.name;
    row.appendChild(cell);
    tableBody.appendChild(row);
  }
  delRow() {
    //Delete Row of Relative Table
    let tableBody = document
      .getElementById(this.tableid)
      .getElementsByTagName("tbody")[0];
    let rows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].cells[0].innerHTML;
      if (rowText == this.name) {
        rows[i].cells[0].parentNode.parentNode.removeChild(rows[i]);
      }
    }
  }
  updateRow() {
    //Update the rows with new user input
    let tableBody = document
      .getElementById(this.tableid)
      .getElementsByTagName("tbody")[0];
    let rows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].cells[0].innerHTML;
      if (rowText == this.name) {
        rows[i].cells[0].innerHTML = this.newName;
      }
    }
  }
  // Add Option to the relative Select DropDown
  addOption() {
    const selectOp = document.getElementById(this.selectOp);
    let option = document.createElement("option");
    option.value = this.name;
    option.text = this.name;
    selectOp.appendChild(option);
  }
  // Delete Option from relative Select Dropdown
  delOption() {
    const selectOp = document.getElementById(this.selectOp);
    for (let i = 1; i < selectOp.length; i++) {
      if (selectOp.options[i].value == this.name) {
        selectOp.remove(i);
        break;
      }
    }
  }
  updateOption() {
    //Update Option from relative Select Dropdown
    const selectOp = document.getElementById(this.selectOp);
    for (var i = 1; i < selectOp.length; i++) {
      if (selectOp.options[i].value == this.name) {
        selectOp.options[i].text = this.newName;
        selectOp.options[i].value = this.newName;
        break;
      }
    }
  }
  // Adding Object to JSON Data
  addJSON() {
    let mainObj = this.mainOb;
    let subObject = this.subOb;
    let obj = {
      name: this.name
    };
    obj[subObject] = [];
    mainObj.push(obj);
  }
  // Removing Object from JSON Data
  delJSON() {
    myData.cities.forEach(element => {
      if (element["name"] == this.name) {
        delete element["name"];
        delete element["softwareHouses"];
        myData.cities = myData.cities.filter(
          value => Object.keys(value).length !== 0
        );
      } else {
        element.softwareHouses.forEach(house => {
          if (house["name"] == this.name) {
            delete house["name"];
            delete house["departments"];
            myData.cities[1].softwareHouses = myData.cities[1].softwareHouses.filter(
              value => Object.keys(value).length !== 0
            );
          } else {
            house.departments.forEach(department => {
              if (department["name"] == this.name) {
                delete department["name"];
                delete department["employees"];
                myData.cities[1].softwareHouses[1].departments = myData.cities[1].softwareHouses[1].departments.filter(
                  value => Object.keys(value).length !== 0
                );
              } else
                department.employees.forEach(employee => {
                  if (employee["name"] == this.name) {
                    delete employee["name"];
                    delete employee["salary"];
                    delete employee["mobileNumber"];
                    delete employee["city"];
                    delete employee["type"];
                    myData.cities[1].softwareHouses[1].departments[1].employees = myData.cities[1].softwareHouses[1].departments[1].employees.filter(
                      value => Object.keys(value).length !== 0
                    );
                  }
                });
            });
          }
        });
      }
    });
  }
  updateJSON() {
    myData.cities.forEach(element => {
      if (element["name"] == this.name) {
        element["name"] = this.newName;
      } else {
        element.softwareHouses.forEach(house => {
          if (house["name"] == this.name) {
            house["name"] = this.newName;
          } else {
            house.departments.forEach(department => {
              if (department["name"] == this.name) {
                department["name"] = this.newName;
              } else
                department.employees.forEach(employee => {
                  if (employee["name"] == this.name) {
                    employee["name"] = this.newName;
                  }
                });
            });
          }
        });
      }
    });
  }
}
export { CRUD };
