const playSound = (e) => {
    console.log(e)
    console.log(button.getAttribute('data-sound'))
    //const audio = document.querySelector(`audio[id=${this.data-sound}]`)
} 

buttons = Array.from(document.querySelectorAll('.innerButton'))

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        soundId = button.getAttribute('data-sound');
        const audio = document.querySelector(`audio[id=${soundId}]`)
        audio.currentTime = 0;
        audio.play()
    })   
})




