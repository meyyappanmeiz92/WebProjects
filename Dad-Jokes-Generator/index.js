const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "McEnTzl1dKSahGYvY5NrKg==gZU2tdjQNRjEOGWB";

const options = {
    method : "GET",
    headers: {
        "X-Api-key": apiKey
    }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {

        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiUrl, options);
        const data = await response.json();

        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        console.log(error);
    }

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
}

btnEl.addEventListener("click", getJoke);