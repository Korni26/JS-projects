// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    number: 0,
    win: 0,
    lose: 0,
    draw: 0,
}

const gameObject = {
    playerPick: "",
    aiPick: "",
}

const hands = [...document.querySelectorAll('.select img')]

function selectedHand(){
    gameObject.playerPick = this.dataset.option
    console.log(gameObject.playerPick)
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px black'
}

function startGame(){
    if(gameObject.playerPick === ""){
        alert("pick one!")
        return
    }

    gameObject.aiPick = computerPick();

    const gameResult = checkResult(gameObject.playerPick, gameObject.aiPick)
    console.log(gameResult)
    publicResult(gameObject.playerPick, gameObject.aiPick, gameResult)

    endGame()

}

function computerPick(){
    const aiPick = hands[Math.floor(Math.random() * 3)].dataset.option
    console.log(aiPick)
    return aiPick
}

function checkResult(player, ai){
    if(player === ai){
        return 'draw'
    } else if(player === "papier" && ai === "kamień" || player === "kamień" && ai === "nożyczki" || player === "nożyczki" && ai === "papier"){
        return 'win'
    } else if(player === "kamień" && ai === "papier" || player === "nożyczki" && ai === "kamień" || player === "papier" && ai === "nożyczki"){
        return 'lose'
    }
}

function endGame(){
    hands.forEach(hand => hand.style.boxShadow = '')
    gameObject.playerPick = "";
    // document.querySelector('[data-option="' + gameObject.playerPick + '"]').style.boxShadow = '';
}

function publicResult(player, ai, result){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.number++;
    document.querySelector('.numbers span').textContent = gameSummary.number;

    if(result === 'win'){
        document.querySelector('.wins span').textContent = ++gameSummary.win;
        document.querySelector('[data-summary="who-win"]').textContent = 'you won!'
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    } else if(result === 'lose'){
        document.querySelector('.losses span').textContent = ++gameSummary.lose;
        document.querySelector('[data-summary="who-win"]').textContent = 'you lose!'
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    } else{
        document.querySelector('.draws span').textContent = ++gameSummary.draw;
        document.querySelector('[data-summary="who-win"]').textContent = 'its a draw!'
        document.querySelector('[data-summary="who-win"]').style.color = 'gray'
    }
}



hands.forEach(hand => hand.addEventListener('click', selectedHand))
document.querySelector('.start').addEventListener('click', startGame)
