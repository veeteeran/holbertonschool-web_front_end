#!/usr/bin/node

const createElement = data => {
    let paragraph = document.createElement("P");
    paragraph.innerHTML(data);
    document.body.appendChild(paragraph);
}

const queryWikipedia = callback => {
    
}