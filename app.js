const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recgonition = new SpeechRecognition()

recgonition.onstart = function(){
    console.log('voice is activated , you can use microphone')
}

recgonition.onresult = function(event){
    const current = event.resultIndex

    const transcript = event.results[current][0].transcript
    content.textContent = transcript
    readOutLoud(transcript)
}


// add the listener to button

btn.addEventListener('click' , ()=>{
    recgonition.start()
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 1
    speech.rete = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}