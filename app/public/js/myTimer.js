function myTimer1(){
    let hh = document.querySelector('.hh'),
        mm = document.querySelector('.mm'),
        ss = document.querySelector('.ss'),
        count = 0;
    const beginTimer = new Date();
    clearInterval(startTimer);
    var startTimer = setInterval(() => {
        var newDate = new Date() - beginTimer();
            count++;
    },100);

    function stopTimer(){

    }

    function clearTimer(){
        clearInterval();
    }
}
export default myTimer1;