'use strict';

const allimages = [];

function Image (name, url) {
    this.name = name;
    this.url = `assets/img/${url}`;
    this.clicks = 0;
    this.timesShown = 0;
    allimages.push(this);
}


let productsEl = document.getElementById('products');

let image1El = document.getElementById('img1');
let image2El = document.getElementById('img2');
let image3El = document.getElementById('img3');

function renderproduct () {

    let firstproductindex = Math.floor(Math.random() * allimages.length);
    let secondproductindex = Math.floor(Math.random() * allimages.length);
    let thirdproductindex = Math.floor(Math.random() * allimages.length);

        while (firstproductindex === secondproductindex) {
            secondproductindex = Math.floor(Math.random() * allimages.length); 
        } while (secondproductindex === thirdproductindex) {
            thirdproductindex = Math.floor(Math.random() * allimages.length);
        }

        let first =allimages[firstproductindex];
        let second = allimages[secondproductindex];
        let third = allimages[thirdproductindex];

        image1El.src = first.url;
        image1El.name = first.name;
        first.timesShown ++;

        image2El.src = second.url;
        image2El.name = second.name;
        second.timesShown ++;

        image3El.src = third.url;
        image3El.name = third.name;
        third.timesShown ++;

image1El.src = allimages[firstproductindex].url;
image2El.src = allimages[secondproductindex].url;
image3El.src = allimages[thirdproductindex].url;

}

function handleVote (event) {
    event.preventDefault();

    let producteElement = event.target;
    console.log(producteElement);

    for (let i = 0; i <allimages.length; i++) {
        if (producteElement.name === allimages[i].name) {
            allimages[i].clicks++;
            console.log(allimages[i]);
        }
    }   
    renderproduct();
        }


image1El.addEventListener('click', handleVote);
image2El.addEventListener('click', handleVote);
image3El.addEventListener('click', handleVote);

new Image ('bag', 'bag.jpg');
new Image ('banana', 'banana.jpg');
new Image ('bathroom', 'bathroom.jpg');
new Image ('boots', 'boots.jpg');
new Image ('breakfast', 'breakfast.jpg');
new Image ('bubblegum', 'bubblegum.jpg');
new Image ('chair', 'chair.jpg');
new Image ('cthulhu', 'cthulhu.jpg');
new Image ('dog-duck', 'dog-duck.jpg');
new Image ('dragon', 'dragon.jpg');
new Image ('pen', 'pen.jpg');
new Image ('pet-sweep', 'pet-sweep.jpg');
new Image ('scissors', 'scissors.jpg');
new Image ('shark', 'shark.jpg');
new Image ('sweep', 'sweep.png');
new Image ('tauntaun', 'tauntaun.jpg');
new Image ('unicorn', 'unicorn.jpg');
new Image ('water-can', 'water-can.jpg');
new Image ('wine-glass', 'wine-glass.jpg');

renderproduct();

console.log(allimages);