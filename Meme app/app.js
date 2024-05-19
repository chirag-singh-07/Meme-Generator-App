const Gbtn = document.querySelector(".meme-btn");
const memeImage = document.querySelector(".container img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");


const updateDetails = (url ,title, author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML =  `Meme by  ${author}`;
}




const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data =>{
        updateDetails(data.url, data.title, data.author);
    })
}


Gbtn.addEventListener("click",generateMeme);

generateMeme();