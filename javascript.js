let gbox = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn = true;

let winningpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () => {
    turn = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

gbox.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }

        box.disabled = true;
        checkwinning();
    });
});

const disabledboxes = () => {
    for(let box of gbox){
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for(let box of gbox){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkwinning = () => {
    for(let pattern of winningpattern){
        let p1 = gbox[pattern[0]].innerText;
        let p2 = gbox[pattern[1]].innerText;
        let p3 = gbox[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                showwinner(p1);
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);


