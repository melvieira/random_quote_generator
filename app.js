
let quote = [
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "A house divided against itself cannot stand by Abraham Lincoln"
    ,
    "Difficulties increase the nearer we get to the goal by Johann Wolfgang von Goethe"
    ,
    "Fate is in your hands and no one elses by Byron Pulsifer",
    "Nothing happens unless first we dream.",
    "Life is a learning experience, only if you learn.",
    "Self-complacency is fatal to progress.",
    "What you give is what you get.",
    "We can only learn to love by loving.",
    "Trouble is only opportunity in work clothes.",
    "Work out your own salvation. Do not depend on others.",
];

// let quote = fetch('https://type.fit/api/quotes')
// .then(response => response.json())
// .then(data => console.log(data));

// function getNewQuote() {
//     let todayQuote='';
//     for (let i=0; i <= quote.length; i++) {
//         return todayQuote = quote[Math.floor(Math.random() * quote.length)]
//     }
// };

function getNewQuote() {
    let todayQuote= quote[Math.floor(Math.random() * quote.length)];
   console.log(todayQuote);
   document.getElementById("start").innerHTML = todayQuote;
};


let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    const userQuote = document.getElementById("start");
    userQuote.value = getNewQuote();
};
// Event listener for generate quote button
genBtn.addEventListener('click', buttonHandler);



