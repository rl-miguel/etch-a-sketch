const body=document.querySelector('body');
const divContainer=document.getElementById('divContainer');


function createGrid(){
for(i=0;i<256;i++){
    let div = document.createElement('div');
    divContainer.appendChild(div);
    div.classList.add('etchGrid');
    div.addEventListener('mouseover', colorMyDiv);

let randomColor=0;
function colorMyDiv(){
    randomColor=Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor=`#${randomColor}`;
    
}
}};

createGrid()


