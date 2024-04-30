document.addEventListener('DOMContentLoaded',function(){
    let hrCounter = 0;
    let minCounter = 0;
    let secCounter = 0;
    let milliSecCounter = 0;
    let intervalId; 

    function milliCount() {
        intervalId = setInterval(function () {
            milliSecCounter++;


            if (milliSecCounter >= 60) {
                milliSecCounter = 0;
                secCounter++;
                document.querySelector('#seccount').innerHTML = secCounter;


                if (secCounter >= 60) {
                secCounter = 0;
                minCounter++;
                document.querySelector('#mincount').innerHTML = minCounter;
                if(minCounter >= 60){
                    minCounter = 0;
                    hrCounter++;
                    document.querySelector('#hrcount').innerHTML = hrCounter;
                }
                }
        }
            document.querySelector('#millicount').innerHTML = milliSecCounter;
     }, 10);


    




     
}
    document.querySelector('#start').onclick = milliCount;
    document.querySelector('#stop').onclick = function(){
        clearInterval(intervalId);}

    document.querySelector('#reset').onclick = function(){
        location.reload();
    }
    
    

    



})
;