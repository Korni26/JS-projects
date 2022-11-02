const spanText = document.querySelector('.text')
const spanCursor = document.querySelector('.cursor')
const txt = ['Siema mordo!', 'Witam serdecznie.', 'Dobranoc <3']

var activeLetter = -10;
var activeText = 0;

const letterSpeed = 60;
const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;

        return setTimeout(() => {
            activeLetter = -10;
            spanText.textContent = ""
            addLetter()
        }, 1500)

    }
    setTimeout(addLetter, 100)

}

addLetter();

const cursorAnimation = () => {
    spanCursor.classList.toggle('active')
}
setInterval(cursorAnimation, 400)