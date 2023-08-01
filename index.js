const winningConditions = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
 ];
let boxes = document.getElementsByClassName('box');
const choosen = ['','','','','','','','',''];
let turn = "X";
let game = true;

const nextPlayer = ()=>{
    
     return turn === "X"? turn="O":turn="X";
}
document.querySelector('.kasko-paalo').innerHTML = `<h2>${turn}'s ko paalo</h2>`
let tie = false
const win = ()=>{
    for (i = 0; i < 8; i++){
        let subIndex = winningConditions[i];
        let a = choosen[subIndex[0]];
        let b = choosen[subIndex[1]];
        let c = choosen[subIndex[2]];

        if ( (a === "X" && b === "X" && c === "X")){
            document.querySelector(".kasle-jityo").innerHTML = "<h2>Player X Won 🎉</h2>"
            document.querySelector('.kasko-paalo').innerHTML = ``
            game = false
        }
        else if ( (a === "O" && b === "O" && c === "O")) {
            document.querySelector(".kasle-jityo").innerHTML = "<h2>Player O Won 🎉</h2>"
            document.querySelector('.kasko-paalo').innerHTML = ``
            game = false
        }
        else {
            
        }
    }
    
    
}



Array.from(boxes).forEach((box) =>{
    box.addEventListener('click', (e)=>{
        if (game){
            document.querySelector('.kasko-paalo').innerHTML = `<h2>${turn}'s ko paalo</h2>`
        let indexx = box.getAttribute("cellindex")
        choosen[indexx] = turn;
        if (e.target.innerHTML == ""){
        e.target.innerHTML = turn;
        nextPlayer()
        document.querySelector('.kasko-paalo').innerHTML = `<h2>${turn}'s ko paalo</h2>`
        win();
        tiee()
        }
       }
    })
})
function reset(){
    window.location.reload()

}