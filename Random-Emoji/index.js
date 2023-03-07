const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = []

async function getEmoji(){
    try {
        const res = await fetch("https://emoji-api.com/emojis?access_key=c4a4958e21fc7d567f86f1d3a0aad1af10e027db")
        .then(reponse => reponse.json())

        for(let i = 0; i < 1500; i++){
        emoji.push({
            character : res[i].character,
            name : res[i].unicodeName
            });
        }
    } catch (error) {
        btnEl.innerText = "Something happened, try again later";
        emojiNameEl.innerText = "Something happened, try again later";
        console.log(error);
    }
    
}

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNumber].character;
    emojiNameEl.innerText = emoji[randomNumber].name;
});