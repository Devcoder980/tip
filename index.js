function input1() {
    let tip=5;
    let bill = document.getElementById("bill-input").value;
    let number = document.getElementById("numofperson").value;
    if(number==''){
        alert('enter the number of people');
    }
    let persona = ((bill / number * tip) / 100);
      document.getElementById("price").innerHTML = persona.toFixed(2);
      let totaltip = persona * number;
      let totoll = (parseInt(bill) + parseInt(totaltip));
      let totalper = (totoll / number);
      document.getElementById("price2").innerHTML = totalper.toFixed(2);
}
function input2() {
    let tip=10;
    let bill = document.getElementById("bill-input").value;
    let number = document.getElementById("numofperson").value;
    if(number==''){
        alert('enter the number of people');
    }
    let persona = ((bill / number * tip) / 100);
      document.getElementById("price").innerHTML = persona.toFixed(2);
      let totaltip = persona * number;
      let totoll = (parseInt(bill) + parseInt(totaltip));
      let totalper = (totoll / number);
      document.getElementById("price2").innerHTML = totalper.toFixed(2);
}
function input3() {
    let tip=15;
    let bill = document.getElementById("bill-input").value;
    let number = document.getElementById("numofperson").value;
    if(number==''){
        alert('enter the number of people');
    }
    let persona = ((bill / number * tip) / 100);
      document.getElementById("price").innerHTML = persona.toFixed(2);
      let totaltip = persona * number;
      let totoll = (parseInt(bill) + parseInt(totaltip));
      let totalper = (totoll / number);
      document.getElementById("price2").innerHTML = totalper.toFixed(2);
}
function input4() {
    let tip=25;
    let bill = document.getElementById("bill-input").value;
    let number = document.getElementById("numofperson").value;
    if(number==''){
        alert('enter the number of people');
    }
    let persona = ((bill / number * tip) / 100);
      document.getElementById("price").innerHTML = persona.toFixed(2);
      let totaltip = persona * number;
      let totoll = (parseInt(bill) + parseInt(totaltip));
      let totalper = (totoll / number);
      document.getElementById("price2").innerHTML = totalper.toFixed(2);
}
function input5() {
    let tip=50;
    let bill = document.getElementById("bill-input").value;
    let number = document.getElementById("numofperson").value;
    if(number==''){
        alert('enter the number of people');
    }
    let persona = ((bill / number * tip) / 100);
      document.getElementById("price").innerHTML = persona.toFixed(2);
      let totaltip = persona * number;
      let totoll = (parseInt(bill) + parseInt(totaltip));
      let totalper = (totoll / number);
      document.getElementById("price2").innerHTML = totalper.toFixed(2);
}
function input6() {
    let tip=document.getElementById('clickinput').value;
    let bill = document.getElementById("bill-input").value;
    let number = document.getElementById("numofperson").value;
    if(number==''){
        alert('enter the number of people');
    }
    let persona = ((bill / number * tip) / 100);
      document.getElementById("price").innerHTML = persona.toFixed(2);
      let totaltip = persona * number;
      let totoll = (parseInt(bill) + parseInt(totaltip));
      let totalper = (totoll / number);
      document.getElementById("price2").innerHTML = totalper.toFixed(2);
}
function reset() {
    window.location.reload();
  }