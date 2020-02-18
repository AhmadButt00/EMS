function removeExistingHouse() {
  const houseCheck = document.querySelectorAll("#houseTable tbody tr"); //Get SoftwareHouse Table Rows
  houseCheck.forEach(element => {
    element.parentNode.removeChild(element); //Remove Existing Rows
  });
  let houseOption = document.querySelectorAll("#houseSelect option"); //Get all SoftwareHouse Select Options
  for (let i = 1; i < houseOption.length; i++) {
    houseOption[i].parentNode.removeChild(houseOption[i]);
  }
}
export { removeExistingHouse };
