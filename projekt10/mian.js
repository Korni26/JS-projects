// let number = 0; 

// const add = () => {
//     number++
//     document.body.textContent = `clicks on clicker: ${number}`
// }
// document.addEventListener('click', add)


// function x() {
//     let tall = 0;
//     function y() {
//         console.log(tall)
//     }
//     return y
// }

// const example = x();
// example()

// const add = (start = 0) => {
//     let number = start;
//     return () => {
//         number++;
//         document.body.textContent = `clicks on clicker: ${number}`
//     }
// }

// const counter = add()
// const counter5 = add(5)
// document.addEventListener('click', counter)

// piwo
const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showname() {
        console.log(`hei ${userName}, ${userAge >= 18 ? 'Du kan kjøpe øl': 'Du kan kjøpe eplejucie'}`);
    }

    return showname
}

const korni = user("kornel", 19);
const leo = user("leo", 17 )

korni()
leo()