
document.addEventListener('DOMContentLoaded',() => {

//card options
const whiteSpace = {
    name: 'white',
    img: 'images/white.png'
}
const cardArray = [ 
    {
        name: 'fries',
        img: 'images/fries.png',
        id: 0
    },
    {
        name: 'fries',
        img: 'images/fries.png',
        id: 0
    },
    {
        name: 'white',
        img: 'images/white.png',
        id: 0
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
        id: 0
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
        id: 0
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
        id: 0
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
        id: 0
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
        id: 0
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
        id: 0
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
        id: 0
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
        id: 0
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
        id: 0
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid =document.querySelector('.grid') //gets the element with id grid
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenID = []
var cardsWon = []

//create board
function createBoard(){
    document.addEventListener('keydown', moveCards);
    
    document.getElementById('up').addEventListener('click',up);
    //$('#left').addEventListener('click',left);
    //$('#down').addEventListener('click',down);
    //$('#right').addEventListener('click',right);

    for (let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src',cardArray[i].img);
        card.setAttribute('data-id',i);
        card.addEventListener('click',selectCard);
        card.addEventListener('mouseover', showName);
        grid.appendChild(card);        
    }
}

//loops array, gets respective element in the HTML and updates the image based on the array
function refresh(){
    let index = 0; 
    cardArray.forEach((card) =>{
        let cardImg = card.img;       
        let currentCardElement = document.querySelector('img[data-id="'+index+'"]');
        currentCardElement.setAttribute('src', cardImg);
        index++;
    });
}



function up(){
    let index = 0; 
    console.table(cardArray);
    cardArray.forEach((card) =>{
        console.log(index);
        if (index>=3){        
            if(cardArray[index-3].name==='white') {
                cardArray[index-3]=card;
                cardArray[index]=whiteSpace; 
            }
        }        
        index++;
        refresh(); //redraw cards        
    });
}




function down(){    
   console.table(cardArray);
    for(let i = cardArray.length-1; i>=0; i--){
        let card = cardArray[i];
        console.log(i);
        if (i<=8){        
            if(cardArray[i+3].name==='white') {
                cardArray[i+3]=card;
                cardArray[i]=whiteSpace; 
            }
        }        
        refresh(); //redraw cards        
    }
}


function left(){ }
function right(){ }


//manages keyboard input and selects function
function moveCards(event){
    console.log(`key presed: ${event.keyCode}`);
    switch(event.key){
        case 'ArrowUp' || 38 : up();
        case 'ArrowLeft' : left();
        case 'ArrowDown' : down();
        case 'ArrowRight' : right();
    }
}
createBoard();








//unused
function selectCard(){
    const cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('style','border-color: red');
    console.log(`cards chosen: ${cardsChosen.length}`);
    if(cardsChosen.length===2){
        let aux = cardArray[cardsChosenID[0]]; //0 to aux

        console.table(cardArray[cardsChosenID[0]]); 
        console.table(cardArray[cardsChosenID[1]]); 
        cardArray[cardsChosenID[0]]=cardArray[cardsChosenID[1]]; // 1 to 0
        cardArray[cardsChosenID[1]]=aux; //aux to 1

        setTimeout(refresh,500);
        //refresh();
        cardsChosen = [];
        cardsChosenID = [];
    }
}


//hover over and show name if flipped
function showName(){
    const imgSrc = this.getAttribute('src');
    const cardID = this.getAttribute('data-id');
    if (imgSrc === "images/blank.png" || imgSrc === "images/white.png") {
        this.setAttribute('title','');
    }else{       
        this.setAttribute('title',cardArray[cardID].name);
    }
    
}




//both selections arent the same
function checkDif(cardID){
    let matches = 0;
    for (const id of cardsChosenID ) {
        if (id === cardID){
            matches ++;
        }
        return matches;
    }
    
}

//both selections arent the same
function checkWhite(cardName){
    let matches = 0;
    for (let i=0; i<cardsWon.length;i++) {
        let name = cardsWon[i];
        if (name === cardName){
            matches ++;
        }
    }
   return matches ;
}




})