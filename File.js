// const btn = document.querySelector('.talk')
// const content = document.querySelector('.content')


// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const recgonition = new SpeechRecognition()

// recgonition.onstart = function(){
//     console.log('voice is activated , you can use microphone')
// }

// recgonition.onresult = function(event){
//     const current = event.resultIndex

//     const transcript = event.results[current][0].transcript
//     content.textContent = transcript
//     readOutLoud(transcript)
// }


// // add the listener to button

// btn.addEventListener('click',()=>{
//     recgonition.start()
// })

// function readOutLoud(message) {
//     const speech = new SpeechSynthesisUtterance();
//     speech.text = message
//     speech.volume = 10
//     speech.rate = 2
//     speech.pitch = 2

//     window.speechSynthesis.speak(speech)
// }


const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
const mic = document.querySelector('.mic')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognintion = new SpeechRecognition()


recognintion.onstart = function () {
    mic.style.background = '#48484d7c url(https://cdn.dribbble.com/users/1541110/screenshots/3559194/music-viz.gif)'
    mic.style.backgroundRepeat = 'no-repeat'
    mic.style.backgroundSize = '100% 100%'
    console.log('Voice is activated, you can talk to microphone')
    
}

// recognintion.onspeechend = function(){}


recognintion.onresult = function(event){
    mic.style.background = '#48484d7c'
    const current = event.resultIndex
    const transcript = event.results[current][0].transcript
    content.innerHTML = transcript;
    readOutLoud(transcript)
}

//add the listener

btn.addEventListener('click',()=>{
    recognintion.start()
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()

    speech.text = message
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1
    window.speechSynthesis.speak(speech)
}