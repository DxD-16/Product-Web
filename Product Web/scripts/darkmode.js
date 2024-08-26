// ===================DARK MODE=================== //

function darkmode(){
    const body = document.body;
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';

    localStorage.setItem('darkmode', !wasDarkmode);
    body.classList.toggle('dark-theme', !wasDarkmode);
}


document.querySelector('.dark-theme-btn').addEventListener('click', darkmode);


function onload() {
    document.body.classList.toggle('dark-theme', localStorage.getItem('darkmode') === 'true');
}

document.addEventListener('DOMContentLoaded', onload);