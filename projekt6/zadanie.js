rady = ['walcz', 'uceikaj', 'idz spać'];

const addAdvice = (e) => {
    const input = document.querySelector('input');
    const newAdvice = input.value;
    e.preventDefault()
    if(input.value.length > 0){
    for(rada of rady){
        if(rada === newAdvice){
            return
        }
    }
    rady.push(newAdvice);
    console.log(rady);
    input.value = '';
}
}

const cleanRady = (e) =>{
    e.preventDefault();
    rady = [];
    console.log(rady)
}

const showAdvice = () => {
    const randomRada = Math.floor(Math.random() * rady.length)
    console.log(randomRada)
    document.querySelector('h1').textContent = rady[randomRada]
}

const showOptions = () => {
    alert(rady.join(" - "))
}

document.querySelector('.clean').addEventListener('click', cleanRady);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOptions);
document.querySelector('.add').addEventListener('click', addAdvice);