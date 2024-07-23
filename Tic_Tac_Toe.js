let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_btn");
let newgamebtn = document.querySelector("#new-game");
let msg_container = document.querySelector(".msg");
let msg_winner = document.querySelector("#msg_winner");
let turn_O = true;  

const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const new_game = () => {
    turn_O = true;
    enable_btns();
    msg_container.classList.add("hide");
}

const enable_btns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const disabled_btns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const show_winner = (winner) => {
    if(winner){
        msg_winner.innerText = `Congratulation, Winner is ${winner}`;
        msg_container.classList.remove("hide");
        disabled_btns();
    } 
}

const checkWinner = () => {
    for (let p of win_patterns) {
        let pos1_val = boxes[p[0]].innerText;
        let pos2_val = boxes[p[1]].innerText;
        let pos3_val = boxes[p[2]].innerText;

        if (pos1_val != "" && pos2_val != "" && pos3_val != "") {
            if (pos1_val === pos2_val && pos2_val === pos3_val) {
                show_winner(pos1_val);
            } 
        }
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            turn_O = false;
        } else {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

reset_btn.addEventListener("click",new_game);
newgamebtn.addEventListener("click",new_game);