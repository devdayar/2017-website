const aload = require('aload')
const animateOnWindowOnload = document.querySelector('#animate-on-window-onload')
const goToTop = document.querySelector('#go-to-top')

window.onload = function() {
    if (animateOnWindowOnload) {
        animateOnWindowOnload.classList.add('js-fade-in-down-trigger')
    }

    aload()
}

if (goToTop) {
    goToTop.addEventListener('click', function(event) {
        event.preventDefault()

        window.scrollTo(0, 0)
    })
}
