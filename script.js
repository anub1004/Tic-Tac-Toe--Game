let divs = document.querySelectorAll(".box");
let h1 = document.querySelector("h1");
let rese = document.querySelector("button");
let i = 0;
let o = true;
let winnerf = false;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
divs.forEach((box, index) => {
    box.addEventListener("click", () => {
        if(!winnerf){
        if (!box.innerHTML )
            if (o) {
                box.innerHTML = ' O';
              
                o = false;
                i++;
            }
            else {
                box.innerHTML = '✖';
             
                o = true;
                i++;
            }
        check();
        }
    })
}

)

function check() {
    for (let pat of winPatterns) {
        let [a, b, c] = pat;
        let pos1 = divs[a].innerHTML;
        let pos2 = divs[b].innerHTML;
        let pos3 = divs[c].innerHTML;
        if (pos1 && pos1 == pos2 && pos2 == pos3) {
            console.log("yes wins");
            let res = document.createElement("h2");
            console.log("win");
            res.classList.add("resu");
            res.innerHTML = ` Winner is ${pos1}`;
            h1.appendChild(res);

            winnerf = true;
                 if (pos1 == '✖') {
                     let msg = new SpeechSynthesisUtterance(` Winner is Cross`);
                      window.speechSynthesis.speak(msg);
                 }
                 else {
                     let msg = new SpeechSynthesisUtterance(res.innerHTML);
                     window.speechSynthesis.speak(msg);
                 } 
            
            setTimeout(() => {
                reset();
                res.remove();
            }, 3000)
            break;
        }

    }
    if (!winnerf && i >= 9) {
        let res = document.createElement("h2");
        res.classList.add("resu");
        res.innerHTML = ` Match Drawn`;
         let msg = new SpeechSynthesisUtterance(` Match Draw `);
                      window.speechSynthesis.speak(msg);
        h1.appendChild(res);
        setTimeout(() => {
            reset();
            res.remove();
        }, 5000);

    }


}
rese.addEventListener("click", () => {
    divs.forEach((b) => {
        b.innerHTML = "";
        i = 0;
        winnerf=false;
        o = true;
    })
})
function reset() {
    divs.forEach((b) => {
        b.innerHTML = "";
        winnerf=false;
        i = 0;
        o = true;
    });
}