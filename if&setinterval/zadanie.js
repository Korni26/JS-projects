// second = -1;
// const h1 = document.querySelector('h1')

// const timerProgram = () => {
//     second++
//     h1.textContent = (`${second} sekund`)
// }

// setInterval(timerProgram, 1000)

// rozwiazanie ale srednio dziala
const clock = () => {
    let seconds = 0;
    h1.textContent = 0 = " sekund"
    
    const timer = () => {
        seconds++
        body.textContent = seconds = " sekund"
    }

    return timer
}
const start = clock()
setInterval(start, 1000);