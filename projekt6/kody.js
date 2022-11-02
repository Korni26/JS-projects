const znak = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890'
const section = document.querySelector('section')
const codeNr = 100;
const charts = 20;

const codeGenerator = () => {
    for( i = 0; i < codeNr; i++){     
          var code = ""; 
        for(i = 0; i < charts; i++){
            const index = Math.floor(Math.random() * znak.length)
            code += charts[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
    console.log('helo')
}

document.querySelector('button').addEventListener('click', codeGenerator)