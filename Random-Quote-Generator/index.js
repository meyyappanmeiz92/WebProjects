const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating..."
        const response = await fetch(apiUrl).then(resp => resp.json());
        quoteEl.innerText = response.content;
        authorEl.innerText = "~ " + response.author;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened";
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        console.log(error);
    }    
}

getQuote();

btnEl.addEventListener("click", getQuote);