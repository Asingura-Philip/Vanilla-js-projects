document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#submit').disabled = true;

    document.querySelector('#typed').onkeyup = function(){
        if(document.querySelector('#typed').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }     
}
    document.querySelector('form').onsubmit = function(){
    const task = document.querySelector('#typed').value;
    const li = document.createElement('li');
    li.innerHTML = task;
    document.querySelector('#list').append(li);
    document.querySelector('#typed').value = ""
    document.querySelector('#submit').disabled = true;


    return false;

} 




})
