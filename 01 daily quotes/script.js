const api_url = "https://api.quotable.io/random";
const author = document.getElementById("author")
const quote = document.getElementById("quote")


async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url)

// Click button to get another quote
document.querySelector("button").addEventListener("click", (e)=>{
    getQuote(api_url)
})


// Share the post
