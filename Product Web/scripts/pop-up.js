// ===================POP UP=================== //


const SInOpenPopUp = document.getElementById('open-popup-SIn')
const SUpOpenPopUp = document.getElementById('open-popup-SUp')

const SInclosePopUp = document.getElementById('close-popup-SIn')
const SUpclosePopUp = document.getElementById('close-popup-SUp')

const SInPopUpWindow = document.getElementById('SIn-pop-up')
const SUpPopUpWindow = document.getElementById('SUp-pop-up')


SInOpenPopUp.onclick = function(){
    SInPopUpWindow.style.display = 'block'
}
SInclosePopUp.onclick = function(){
    SInPopUpWindow.style.display = 'none'
}


SUpOpenPopUp.onclick = function(){
    SUpPopUpWindow.style.display = 'block'
}
SUpclosePopUp.onclick = function(){
    SUpPopUpWindow.style.display = 'none'
}