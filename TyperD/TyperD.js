const words = [
    'californication',
    'plataformas',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
let palabraRandom = "hola"
let timer = 10
let score = 0
let palabraIngresada = null
let segundos;

function randomWords() {
    palabraRandom = (words[Math.floor(Math.random() * words.length)])
}

function addToDOM() {
    randomWords()
    document.getElementById("randomWord").textContent = palabraRandom
}

function corregir(e) {
    palabraIngresada = e.srcElement.value;
    if (palabraIngresada === palabraRandom) {
        timer += 1;
        document.getElementById("text").value = ""
        addToDOM()
        updateScore()
    }
}

function actualizarTiempo(){
    timer -= 1
    document.getElementById("timeSpan").textContent = timer + "s"
    if(timer === 0){
        clearInterval(segundos)
        gameOver()
    }
}

function updateScore(){
score += 1
document.getElementById("score").textContent = score
}

function gameOver(){
   let childh1 = document.createElement("h1")
   childh1.textContent = "GAME OVER"
   document.getElementById("end-game-container").appendChild(childh1)

   let childp1 = document.createElement("p")
   childp1.textContent = "Tu puntaje fue " + score + "!"
   document.getElementById("end-game-container").appendChild(childp1)

   let childinput = document.createElement("button")
   childinput.textContent = "Reintentar?"
   childinput.onclick = function()
   {
    location.reload()
   }
   document.getElementById("end-game-container").appendChild(childinput)
   const elements = document.getElementsByClassName('main');
   for (const elem of elements) {
    elem.style.visibility = 'hidden';}
    document.getElementById("titulo").style.visibility = 'visible'
}

segundos = setInterval(actualizarTiempo, 1000)
addToDOM()
document.getElementById("text").addEventListener("input", corregir);
