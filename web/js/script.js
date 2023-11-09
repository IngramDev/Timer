//Global Variables
let timer_loop = null
let timer_value = new Date();

const timer_id = document.getElementById("timer")
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

//Start Function
function startTimer(){
    timer_loop = setInterval(addSecond, 1000)
    timer_id.style.color = "var(--start-colour)"
}
function addSecond(){
    timer_value.setSeconds(timer_value.getSeconds()+1)
    displayTime()
}

function displayTime(){
    //display time in 24 hour format
    timer_id.innerHTML = timer_value.toLocaleTimeString('en-US',{hour12:false})
}

//Stop Function
function stopTimer(){
    //Stop timer from counting up
    clearInterval(timer_loop)
    
    //clear timer loop
    timer_loop = null
    
    //Change font to Stop colour to visual button working
    timer_id.style.color = "var(--stop-colour)"
}

// Reset Function
function resetTimer(){
    //Reset values to all 0s
    timer_value.setHours(0,0,0,0)
    displayTime()

    //Stop Timer loop if still going
    if(timer_loop!= null){
        stopTimer()
    }

    timer_id.style.color = "var(--complimentary)"
}
// ASSIGN Functions to Button
start_btn.onclick = startTimer
stop_btn.onclick = stopTimer
reset_btn.onclick = resetTimer


resetTimer()