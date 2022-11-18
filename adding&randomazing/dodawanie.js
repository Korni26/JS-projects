const names = [];
const div = document.querySelector('div')

const addName = (e) => {
    e.preventDefault()
    const input = document.querySelector('input');
    const newname = input.value;
    if(input.value.length > 0){
        for( meme of names){
            if(meme === newname) {
                input.value = '';
                return
            }
        }
    names.push(newname)
    console.log(names)
    div.textContent += newname + ", ";
    input.value = "";
}
}

document.querySelector('button').addEventListener('click', addName)