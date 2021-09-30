'use strict';

Image.allProducts = [];
Image.totalClicks = 0;
Image.lastShown = [];

function Image (name, url) {
    this.name = name;
    this.url = `assets/img/${url}`;
    this.clicks = 0;
    this.timesShown = 0;
    Image.allProducts.push(this);
}


let productsEl = document.getElementById('products');

let image1El = document.getElementById('img1');
let image2El = document.getElementById('img2');
let image3El = document.getElementById('img3');

function renderproduct () {

    let firstproductindex = Math.floor(Math.random() * Image.allProducts.length);
    let secondproductindex = Math.floor(Math.random() * Image.allProducts.length);
    let thirdproductindex = Math.floor(Math.random() * Image.allProducts.length);

    while (firstproductindex === secondproductindex || firstproductindex === thirdproductindex || secondproductindex === thirdproductindex || Image.lastShown.includes(firstproductindex) || Image.lastShown.includes(secondproductindex) || Image.lastShown.includes(thirdproductindex)) {
        firstproductindex = Math.floor(Math.random() * Image.allProducts.length);
        secondproductindex = Math.floor(Math.random() * Image.allProducts.length);
        thirdproductindex = Math.floor(Math.random() * Image.allProducts.length);
    }

    image1El.src = Image.allProducts[firstproductindex].url;
    image1El.alt = Image.allProducts[firstproductindex].name;

    image2El.src = Image.allProducts[secondproductindex].url;
    image2El.alt = Image.allProducts[secondproductindex].name;

    image3El.src = Image.allProducts[thirdproductindex].url;
    image3El.alt = Image.allProducts[thirdproductindex].name;

    Image.allProducts[firstproductindex].timesShown ++;
    Image.allProducts[secondproductindex].timesShown ++;
    Image.allProducts[thirdproductindex].timesShown ++;

    Image.lastShown[0] = firstproductindex;
    Image.lastShown[1] = secondproductindex;
    Image.lastShown[2] = thirdproductindex;

}

function handleVote (event) {
   for (var i in Image.allProducts) {
       if (event.target.alt === Image.allProducts[i].name){
           Image.allProducts[i].clicks ++;

           Image.totalClicks ++;
       }
   }
        if (Image.totalClicks < 25) {
                renderproduct();
            } else {
            productsEl.removeEventListener('click', handleVote);
            document.getElementById('products').innerHTML = "";

            let buttonEl = document.createElement('button');
            buttonEl.innerText = "Click For Results";
            buttonEl.id = "button-id";
            document.getElementById('results').appendChild(buttonEl);
            document.getElementById("button-id").addEventListener('click', showResults);

            localStorage.setItem('setProducts', JSON.stringify(Image.allProducts));
        } 
}

function showResults () {

        const ctx = document.getElementById('mychart').getContext('2d');
                    const votes = [];
                    const names = [];
                    const colors = ['rgba(27, 153, 139, 0.9)', 'rgba(243, 222, 138, 0.9)', 'rgba(198, 65, 145 0.9)',
                'rgba(0, 103, 163, 0.9)','rgba(186, 191, 209, 0.9)'];
                        for( i = 0; i <Image.allProducts.length; i++) {
                            votes[i] = Image.allProducts[i].clicks;
                            names[i] = Image.allProducts[i].name;
                            for(var i = 0; i <Image.allProducts.length; i++) {
                                votes[i] = Image.allProducts[i].clicks;
                                names[i] = Image.allProducts[i].name;
                            }
                    
                    const myChart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels: names,
                            datasets: [{
                                label: '# of Votes Each Product Recieved',
                                data: votes,
                                backgroundColor: colors,
                                borderWidth: 2
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                      });
    
                        }
    
    }

    function readData () {
        const jsonData = localStorage.getItem('mychart');

        let parsedData = JSON.parse(jsonData);

        return parsedData;
    }

    function saveData (data) {
        console.log(Image.allProducts[i], data);
        Image.allProducts[i].push(data);

        let stringifiedData = JSON.stringify(Image.allProducts[i]);

        localStorage.setItem('mychart', stringifiedData);
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




