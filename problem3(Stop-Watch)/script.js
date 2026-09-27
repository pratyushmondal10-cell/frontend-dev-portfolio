const display = document.getElementById("display");
let timer = null;  //going to hold id of setInterval
let startTime = 0;
let elapsedTime = 0;
let isrunning = false;

function start(){
    console.log("start button pressed");
    if(!isrunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isrunning = true;
    }
    
}

function reset(){
    clearInterval(timer);
    display.textContent = `00:00:00:00`;
    elapsedTime = 0;
    startTime = 0;
    isrunning = false;
}

function pause(){
    if(isrunning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isrunning = false;
    }
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (60 * 60 * 1000));
    let min = Math.floor( (elapsedTime/(60 * 1000) % 60) );
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let millisec = Math.floor( (elapsedTime/10) % 100);
    
    hours = String(hours).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    millisec = String(millisec).padStart(2,"0");
    
    display.textContent = `${hours}:${min}:${sec}:${millisec}`;
}
