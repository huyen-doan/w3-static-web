const quotes=[
    {
        quote: 'You only live once, but if you do it right, once is enough',
        authorName: 'Mae West'
    },
    {
        quote: 'Don’t cry because it’s over, smile because it happened',
        authorName: 'Dr. Seuss'
    },
    {
        quote: 'In three words I can sum up everything I’ve learned about life: it goes on',
        authorName: 'Robert Frost'
    },
    {
        quote: 'To live is the rarest thing in the world. Most people exist, that is all',
        authorName: 'Oscar Wilde'
    },
    {
        quote: 'Good friends, good books, and a sleepy conscience: this is the ideal life',
        authorName: 'Mark Twain'
    }
];

function changeQuote() {
    const min = 0, max = 255;
    let r = Math.floor(Math.random() * (max - min)) + min;
    let g = Math.floor(Math.random() * (max - min)) + min;
    let b = Math.floor(Math.random() * (max - min)) + min;
    let tr = 255 - r;
    let tg = 255 - g;
    let tb = 255 - b;

    const i = Math.floor(Math.random() * 4) + 1;
    const quoteAndAuthor = quotes[i]

    document.getElementsByClassName('box')[0].style.backgroundColor = 'rgb(' + [r,g,b].join(',') + ')';
    document.getElementById('quoteText').style.color = 'rgb(' + [tr,tg,tb].join(',') + ')';
    document.getElementById('authorName').style.color = 'rgb(' + [tr,tg,tb].join(',') + ')';
    document.getElementById('quoteText').innerHTML = quoteAndAuthor?.quote; 
    document.getElementById('authorName').innerHTML = '-' + quoteAndAuthor?.authorName;
}

window.onload = function loopFunction() {
    setInterval(function() {
        changeQuote();
        loopFunction();
    }, 30000);
};