function updateTime() {
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let timeContainer = document.getElementById('timeContainer');
    timeContainer.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

function setMenu(){
    let hiddenMenu = document.querySelector('.hiddenMenu');
    
    if (hiddenMenu.style.display == "block") {
        a = "none"
        
    }
    else{
        a = "block"
    }
    hiddenMenu.style.display = a;
    
}