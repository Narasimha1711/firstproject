
const sub = document.getElementsByClassName("submitl")[0];
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const number = document.getElementsByClassName("number")[0];
const str = document.getElementsByClassName("str")[0];

let answer;
let status = "";
sub.addEventListener("click", calculate);


function calculate() {

answer = weight.value/(height.value*height.value);


if(answer < 18.5) {
    status = "Undeweight";
    
}

else if(answer >=18.5 && answer < 25) {
    
    status = "Normal/Healthy Weight";
}

else if(answer >=25 && answer < 30) {
    
    status = "OverWeight";
}

else {
    
    status = "Obese";
}


number.innerHTML = "BMI :" + answer.toFixed(2);

str.innerHTML = "Status: " + status;

}

