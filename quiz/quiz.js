let answerA = document.querySelector(".a")
let answerB = document.querySelector(".b")
let answerC = document.querySelector(".c")
let answerD = document.querySelector(".d")
let form1 = document.getElementById("qn1Form")
let form2 = document.getElementById("qn2Form")
let form3 = document.getElementById("qn3Form")
let form4 = document.getElementById("qn4Form")
let form5 = document.getElementById("qn5Form")

console.log(form1.a.checked)
console.log(form1.b.checked)
console.log(form1.c.checked)
console.log(form1.d.checked)
// console.log(answerA.checked)

function limita(fName){
    if(fName.b.checked == true || fName.c.checked == true || fName.d.checked == true){
        alert("you can only select one answer")
        fName.a.checked = false
    }
}
function limitb(fName){
    if(fName.a.checked == true || fName.c.checked == true || fName.d.checked == true){
        alert("you can only select one answer")
        fName.b.checked = false
    }
}
function limitc(fName){
    if(fName.a.checked == true || fName.b.checked == true || fName.d.checked == true){
        alert("you can only select one answer")
        fName.c.checked = false
    }
}
function limitd(fName){
    if(fName.b.checked == true || fName.c.checked == true || fName.a.checked == true){
        alert("you can only select one answer")
        fName.d.checked = false
    }
}