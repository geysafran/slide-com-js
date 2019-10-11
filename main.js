let imglist = [
    'amarelo.png',
    'verde.png',
    'borbo.png',
    'laranja.png',
    'varias.png',
    'rosa.png',
    'verde.png'
]
let counter = 0; 

let corpin = document.querySelector('body');

// Imagem
let img = document.createElement('img');
img.setAttribute('src', imglist [counter] );



// Setinha de voltar
let before = document.createElement('h1');
let beforeText = document.createTextNode('<');
before.appendChild(beforeText);

// Setinha de adiantar
let next = document.createElement('h1');
let nextText = document.createTextNode('>');
next.appendChild(nextText);


    function init() {
        console.log(corpin, img);
        corpin.appendChild(before);
        corpin.appendChild(img);
        corpin.appendChild(next);
        
    }
///before
before.addEventListener('click', function() {
    if (counter > 0 ){
        counter = counter - 1;
        img.setAttribute('src', imglist[counter])
    } else {counter = 5}
    img.setAttribute('src', imglist[counter])


   
})
///next
next.addEventListener('click', function() {
    if (counter < 6 ){
        counter = counter + 1;
        img.setAttribute('src', imglist[counter])
    }  else {counter = 0}
    img.setAttribute('src', imglist[counter])
   
})

    init();

