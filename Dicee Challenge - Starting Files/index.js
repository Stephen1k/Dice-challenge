let randomNumber1 = Math.floor(Math.random() * 6)+1;
let randomNumber2 = Math.floor(Math.random() * 6)+1;

let img1 = "dice" + randomNumber1 + ".png";
let img1Src = "./images/" + img1;

let img2 ="dice" + randomNumber2 + ".png";
let img2Src = "./images/" + img2;



//console.log(randomNumber1);

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src",img1Src );
image2.setAttribute("src",img2Src );
 
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 It's a Tie!";
}else{
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}