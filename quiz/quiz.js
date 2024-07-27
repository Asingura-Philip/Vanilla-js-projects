let answerA = document.querySelector("#a")
let answerB = document.querySelector("#b")
let answerC = document.querySelector("#c")
let answerD = document.querySelector("#d")
let form = document.getElementById("qnForm")

console.log(form.a.checked)
console.log(form.b.checked)
console.log(form.c.checked)
console.log(form.d.checked)
// console.log(answerA.checked)




function limita(){
    if((form.b.checked == true && form.d.checked == true) || (form.b.checked == true && form.c.checked == true)){
        alert("you can only select two values")
        form.a.checked = false
    }
}
function limitb(){
    if((form.a.checked == true && form.c.checked == true) || (form.a.checked == true && form.d.checked == true)){
        alert("you can only select two values")
        form.b.checked = false
    }
}
function limitc(){
    if((form.a.checked == true && form.b.checked == true) || (form.a.checked == true && form.d.checked == true)){
        alert("you can only select two values")
        form.c.checked = false
    }
}
function limitd(){
    if((form.a.checked == true && form.b.checked == true) || (form.a.checked == true && form.c.checked == true)){
        alert("you can only select two values")
        form.d.checked = false
    }
}