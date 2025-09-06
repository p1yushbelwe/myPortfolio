function updateTime() {
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let timeContainer = document.getElementById('timeContainer');
    timeContainer.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

function toggleDarkMode() {
    let getBody = document.querySelector('body');
    let getAllLinks = document.querySelectorAll('a');
    
        getBody.classList.toggle("bodyToggle"); 

        for (let i = 0; i < getAllLinks.length; i++) {
            getAllLinks[i].classList.toggle("aToggle");
        }
    


}