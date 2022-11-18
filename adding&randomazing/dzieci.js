const names = ["Marek", "Zbigniew", "Filip", "Kaziu", "Cymbał"]
const prefixs = ['Fajne', 'Super', 'Mega', 'Kozackie']
const div = document.getElementById('result')


const nameGenrator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]} imie to ${names[indexName]}`
}

