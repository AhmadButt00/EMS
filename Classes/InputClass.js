// Inputs Class Body
class Inputs {
  constructor(input, newInput) {
    this.input = input;
    this.newInput = newInput;
  }
  // Get Input
  getInput() {
    let Inp = document.getElementById(this.input).value;
    if (Inp != null || Inp != undefined || Inp != "") {
      return Inp;
    }
  }
  getnewInput() {
    //Get new Input
    let newInp = document.getElementById(this.newInput).value;
    if (newInp != null || newInp != undefined || newInp != "") {
      return newInp;
    }
  }
}
export { Inputs };
