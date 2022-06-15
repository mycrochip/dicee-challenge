const title = document.querySelector("h1")
const dice1 = document.querySelector(".img1")
const dice2 = document.querySelector(".img2")

randomNumber1 = Math.random() * 6
randomNumber1 = Math.floor(randomNumber1) + 1

randomNumber2 = Math.random() * 6
randomNumber2 = Math.floor(randomNumber2) + 1

dice1.setAttribute("src", `./images/dice${randomNumber1}.png`)
dice2.setAttribute("src", `./images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    //player1 wins
    title.innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins!"
} else {
    title.innerHTML = "Draw"
}