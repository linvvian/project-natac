/**
 * Created by JP on 6/22/17.
 */
$(document).ready(function () {
  class Start {
    constructor() {
      this.startbtn = document.querySelector('#startbtn1')
      this.loginbtn = document.querySelector('#loginbtn1')
      this.startbtn.addEventListener('click', this.startGame.bind(this))
      this.loginbtn.addEventListener('click', this.loadGame.bind(this))
    }

    loadGame(){
      // let adapter = new ApiAdapter()
      // adapter.loadLastGame()
      // window.location.href = "index.html"
    }

    startGame() {
      const game = new Game()
      window.location.href = "index.html"
    }

  }
  const start = new Start()
})
