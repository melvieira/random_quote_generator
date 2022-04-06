
let quote = [
        '"Genius is one percent inspiration and ninety-nine percent perspiration." -author Thomas Edison',
      '   "You can observe a lot just by watching." -author Yogi Berra',
        '"A house divided against itself cannot stand." -author Abraham Lincoln',
          ' "Difficulties increase the nearer we get to the goal." -author Johann Wolfgang von Goethe',
           '"Fate is in your hands and no one elses." -author Byron Pulsifer',
        ' "Be the chief but never the lord." -author Lao Tzu',
        '"Nothing happens unless first we dream." -author Carl Sandburg',
        '"Well begun is half done." -author Aristotle',
      '"Life is a learning experience, only if you learn." -Author Yogi Berra',
];


function getNewQuote() {
    let todayQuote= quote[Math.floor(Math.random() * quote.length)];
   console.log(todayQuote);
   document.getElementById("newQuote").innerHTML = todayQuote;
};


let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    const userQuote = document.getElementById("newQuote");
    userQuote.value = getNewQuote();
};
// Event listener for generate quote button
genBtn.addEventListener('click', buttonHandler);



