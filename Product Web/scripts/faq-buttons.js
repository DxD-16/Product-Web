// Variables

const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');

        const panel = this.classList.contains('answer')
        
        if (panel.style.display === 'block') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'block'
        }
    })
}