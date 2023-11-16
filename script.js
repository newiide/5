document.addEventListener("DOMContentLoaded", function () { 
    const sourceText = document.getElementById("source-text");
    const resultText = document.getElementById("result-text");
    const lettersPath = "images/";

    document.getElementById("one").addEventListener("click", function(){
        resultText.innerHTML = "";
        let delay = 0;

        for(const character of sourceText.value.toLowerCase()){
            const isSpace = character === " ";
            const isLowerCaseLetter = /^[a-z]$/.test(character);

            if(isSpace){
                const space = document.createElement("span");
                space.innerText = " ";
                resultText.appendChild(space);
            } else if(isLowerCaseLetter){
                const image = new Image();
                image.src = `${lettersPath}${character}.png`;
                image.alt = character;
                image.style.animation = `appears 2s ${delay}s both`;
                resultText.appendChild(image);
                delay += 0.1; 
            }
        }
    });
});