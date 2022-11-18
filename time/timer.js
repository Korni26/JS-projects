// const answerTime = document.querySelector('.time div')
// const stopBtn = document.querySelector('button.main')

// // let clicker = 0
// // let timerTime = 0

// // const startTime = () =>{
// //     clicker++
// //     const nowTime = new Date().getTime()
// //     console.log(nowTime)
// //     if(stopBtn.textContent = "Start"){
// //         setInterval(() => {
// //             const newTime = new Date().getTime()
// //             let theTime = ((newTime - nowTime) / 1000);
// //             answerTime.textContent = theTime
// //             stopBtn.textContent = 'Stop'
// //         }, 100)
// //     }
// //     if(stopBtn.textContent = "stop"){
// //         console.log()
// //         const endTime = new Date().getTime()
// //         let finalTime = (nowTime - endTime) / 1000;
// //         console.log(finalTime, 'hello')
// //         stopBtn.textContent = "Start"
// //     }
// // } 

// // const startBtn = document.querySelector('button.main').addEventListener('click', startTime)

const btnTime = document.querySelector('.main')
const btnReset = document.querySelector('.reset')
const panel = document.querySelector('.time div')

let time = 0;
let active = false;
let idI;

const timer = () => {
    if (!active) {
        active = !active
        btnTime.textContent = "Stop"
        idI = setInterval(start, 10)
    } else {
        active = !active
        btnTime.textContent = "Start"
        clearInterval(idI)
    }

}

const start = () => {
    time++
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    panel.textContent = '---'
    active = false;
    btnTime.textContent = "Start"
    clearInterval(idI)
}


btnTime.addEventListener('click', timer)
btnReset.addEventListener('click', reset)

