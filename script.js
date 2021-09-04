
// for keeping track whether dark mode is on or not
let onFlag = 0;

main();

function main(){
    
    // for capturing the click event on the round slider switch
    const slideBtn = document.querySelector('#slide-btn');
    slideBtn.addEventListener('click', e => slider(e));
}

function slider(e){
    const sliderRound = e.target;
    const sliderBack = e.target.parentNode;

    if(!onFlag)
    {
        onFlag = 1;
        darkModeOn(sliderRound, sliderBack);
    }
    else
    {
        onFlag = 0;
        darkModeOff(sliderRound, sliderBack);
    }
    

}   

function darkModeOn(round, back)
{
    const container = document.querySelector('.container');
    const themeTile = document.querySelector('.theme-tile');
    themeTile.style.border = '2px solid white';

    
    round.classList.remove('mode-off');
    back.classList.remove('removeGreen');
    container.classList.remove('container-light');
    
    container.classList.add('container-dark');
    round.classList.add('mode-on');
    back.classList.add('addGreen');
}

function darkModeOff(round, back)
{
    const container = document.querySelector('.container');
    const themeTile = document.querySelector('.theme-tile');
    themeTile.style.border = '2px solid black';
    

    container.classList.remove('container-dark');
    round.classList.remove('mode-on');
    back.classList.remove('addGreen');
    
    container.classList.add('container-light');
    round.classList.add('mode-off');
    back.classList.add('removeGreen');
}