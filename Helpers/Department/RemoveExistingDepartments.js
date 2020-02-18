function removeExistingDep() {
  const depCheck = document.querySelectorAll("#depTable tbody tr"); //Get SoftwareHouse Table Rows
  depCheck.forEach(element => {
    element.parentNode.removeChild(element); //Remove Existing Rows
  });
  let depOption = document.querySelectorAll("#depSelect option"); //Get all SoftwareHouse Select Options
  for (let i = 1; i < depOption.length; i++) {
    depOption[i].parentNode.removeChild(depOption[i]);
  }
}
export { removeExistingDep };
