/**
 * Created by JP on 6/22/17.
 */
$(document).ready(function () {
    class Start {
        constructor() {
            this.startbtn = document.querySelector('#startbtn1')
            this.startbtn.addEventListener('click', this.startGame.bind(this))
        }

        loadGame(){

        }

        startGame() {
            window.location.href = "index.html"
        }

        render(){

        }
    }
    const start = new Start()

})