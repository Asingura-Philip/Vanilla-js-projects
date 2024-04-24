let num1 = prompt('enter first number');
if (num1 == '' || isNaN(num1)){
    alert('please enter a number')
    location.reload();
}else {
    let num2 = prompt('enter second number');
    if(num2 == '' || isNaN(num2)){
        alert('please enter a number')
        location.reload();
    }else{
        let operator = prompt('enter operation (+,-,*,/');

        if(operator == '+'){
        let sum = parseInt(num1) + parseInt(num2);
        alert(`the anwer is ${sum}`) ;
        }else if(operator == '-'){
        let minus = num1 - num2;
        alert(`the anwer is ${minus}`)
        }else if(operator == '*' ){
        let times = num1 * num2;
        alert(`the anwer is ${times}`)
        }else if(operator == '/' ){
        let divide = num1 / num2;
        alert(`the anwer is ${divide}`)
        }else{
        alert('please enter recognized operator')
        }
    }
    

}
location.reload()