const body = document.querySelector('body');
let divContainer= document.createElement('div');
divContainer.className="divContainer"
body.appendChild(divContainer);

let div= document.createElement('div');


function createDiv(){

    for(i=0; i<256; i++){
        div= document.createElement('div');
        divContainer.appendChild(div);
        div.className='etchGrid';
        div.textContent='';
    }
}


createDiv()