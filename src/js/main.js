const aload = require('aload')
const animateOnWindowOnload = document.querySelector('#animate-on-window-onload')

window.onload = function () {
    animateOnWindowOnload.classList.add('fade-in-down-trigger')

    aload()
}
