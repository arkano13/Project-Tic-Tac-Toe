let playerOne = "";
let playerTwo = "";

function show() {
    const modal = document.querySelector(".dialog");
    modal.showModal();
    return modal;
}


function close(modal) {
    const btnClose = document.querySelector(".submit");
    btnClose.addEventListener('click', () => {


        const player1 = document.querySelector("#Plyername1");
        const player2 = document.querySelector("#Plyername2");

        playerOne = player1.value;
        playerTwo = player2.value;

        if(playerOne=="" || playerTwo==""){
            alert("You must enter the name")
        }else{

            modal.remove();
        }

    });
}

const showModal = show();
close(showModal);

function wincondition(player1, player2) {
    const { cells } = board();


    
    const wincombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winner= false

    for (let i = 0; i < wincombination.length; i++) {
        const [a, b, c] = wincombination[i];

        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            setTimeout(() => {
                if (cells[a].textContent === "x") {
                    document.querySelector(".result").textContent= "the winer is: " + player1
                } else if (cells[a].textContent === "o") {
                    document.querySelector(".result").textContent= "the winer is: " + player2
                }else if(cell.textContent!==""){
                    document.querySelector(".result").textContent= " empate"
                }

            }, 10);

            winner = true
            break;
           

        }
    }

    if(!winner){
        let fullcells= true

        cells.forEach(cell=>{
            if(cell.textContent==""){
                fullcells=false
            }
        });

        if(fullcells){
            setTimeout(() => {
                    document.querySelector(".result").textContent= "Empate";
            }, 10);

        }
        
    }   
}

function board() {
    const cells = document.querySelectorAll(".cells");
    let currentPlayer = "x";
    currentPlayer.className = "currentPlayer";

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) {
                cell.textContent = currentPlayer;
                currentPlayer = currentPlayer === "x" ? "o" : "x";
                wincondition(playerOne, playerTwo); 
            }
        });
    });

    return { cells   };
}

function resetBtn() {
    const resetbtn = document.querySelector(".reset");

    resetbtn.addEventListener('click', () => {
        reset();
    });
}

function reset() {
    const { cells } = board();

    cells.forEach(cell => {
        cell.textContent = "";
        document.querySelector(".result").textContent="Result  "
    });
}

resetBtn();
board();