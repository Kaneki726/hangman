import { ruswords } from './words.js'
let input = document.getElementById('input')
let words = ['машина', 'дом', 'телефон', 'параллелепипед', 'корабль']
let letters = []
words = ruswords
let secretWord = words[Math.floor(Math.random() * words.length)]
let shifr = document.getElementById('shifr')
shifr.innerHTML = '*'.repeat(secretWord.length)
let checkLetter
let header = document.getElementById('header')
let picture = document.getElementById('picture')
let pictureChanger = 0
let usedWords = document.getElementById('usedWords')
let newGame = document.getElementById('newGame')
let settings = document.getElementById('settings')
let singlePl = document.getElementById('singlePl')
let modal = document.getElementById('modal')
let multiPl = document.getElementById('multiPl')
let wordModal = document.getElementById('wordModal')
let wordInput = document.getElementById('wordInput')
let wordButton = document.getElementById('wordButton')
let counter = 0


let check = document.getElementById('check')
input.focus()
check.onclick = function (event) {
    if (!letters.includes(input.value)) {
        letters.push(input.value)
        usedWords.innerHTML = 'использованные буквы: ' + letters

    }


    //includes- включают в себя
    event.preventDefault()
    if (secretWord.includes(input.value)) {
        console.log('true');
        let newShifr = ''
        for (let i = 0; i < secretWord.length; i = i + 1) {
            console.log(secretWord[i]);
            if (secretWord[i] == input.value) {
                newShifr = newShifr + input.value

            } else {
                newShifr = newShifr + shifr.innerHTML[i]
            }
        }
        shifr.innerHTML = newShifr
        if (shifr.innerHTML == secretWord) {
            header.innerHTML = 'you won'
            check.disabled = true
        }


    } else {
        console.log('false');
        pictureChanger = pictureChanger + 1
        picture.src = 'pictures/hangman' + pictureChanger + '.png'
        if (pictureChanger == 6) {
            header.innerHTML = 'you lose. secret word was: ' + secretWord
            check.disabled = true
        }

    }
    input.select()
}

wordButton.onclick = function(){
    if(wordInput.value != ''){
        secretWord = wordInput.value
        startGame()
        wordModal.style.transform = 'translateY(-100%)'
    }
    
}

newGame.onclick = function (event) {
    event.preventDefault()
    secretWord = words[Math.floor(Math.random() * words.length)]
    startGame()

}
settings.onclick = function (event) {
    //чтобы не обновлялась стр.
    event.preventDefault()
    console.log('settings');
    modal.style.transform = 'none'

}

singlePl.onclick = function (event) {
    event.preventDefault()
    secretWord = words[Math.floor(Math.random() * words.length)]
    startGame()
    modal.style.transform = 'translateY(-100%)'

}

multiPl.onclick = function(event) {
    event.preventDefault()
    modal.style.transform = 'translateY(-100%)'
    header.innerHTML = 'Виселица.MultiPlayer'
    wordModal.style.transform = 'none'
}

function startGame(){
    header.innerHTML = 'Виселица'
    picture.src = 'pictures/hangman0.png'
    pictureChanger = 0
    shifr.innerHTML = '*'.repeat(secretWord.length)
    input.value = ''
    input.select()
    usedWords.innerHTML = 'использованные буквы: '
    letters = []
    check.disabled = false
    headerHint()
}

function headerHint(){
    if(secretWord.includes('н')){
        header.innerHTML = 'в данном ниже слове есть буква: Н.'
    }

}
picture.onclick = function(){
    imgClick()
}
function imgClick(){
    counter = counter+1
    if(counter==5){
        picture.src = 'pictures/myPicture.jpg'

    } if (counter==10) {
        picture.src = 'pictures/hangman0.png'
    }
}




//function check(){
    //console.log('car');
//}


//дз !НАУЧИТЬСЯ КОМЕНЬТИТЬ!
//по нажатию на новая игра, мы должны обновлять заголовок и возвращять картинку пустой висилицы   


//дз: если кликаем на картинку 5 раз, то появиться своя картинка.