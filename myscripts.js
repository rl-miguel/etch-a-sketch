const body=document.querySelector('body');
const divContainer=document.getElementById('divContainer');


function createGrid(){
for(i=0;i<256;i++){
let div = document.createElement('div');
divContainer.appendChild(div);
div.classList.add('etchGrid');
div.addEventListener('mouseover', colorMyDiv);

function colorMyDiv(){
    div.classList.add('gridMouseOver')
}
}};

createGrid()

function countDiv(){
    let numberOfDivs = document.getElementsByClassName('etchGrid');
    console.log(numberOfDivs);
}

countDiv()

