 $(document).ready(function () {
     class Start {
         constructor() {
             this.startbtn = document.querySelector('#startbtn')
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









