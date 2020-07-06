function hoverListener(){
    document.querySelector("button").style.backgroundColor="green";
}

function outListener(){
    document.querySelector("button").style.backgroundColor="white";
}

// Extracting input of start.html
let named="";
let inp=window.location.search;
for(let i=10; i<inp.length; i++){
    named+=inp[i];
}

document.getElementById("name").innerHTML=named;

function angryin(){
    document.getElementById("angry").style.backgroundColor="red";
}

function angryout(){
    document.getElementById("angry").style.backgroundColor="rgba(245, 245, 245, 0.29)";
}

function boredout(){
    document.getElementById("bored").style.backgroundColor="rgba(245, 245, 245, 0.29)";
}

function motivatedout(){
    document.getElementById("motivated").style.backgroundColor="rgba(245, 245, 245, 0.29)";
}

function motivatedin(){
    document.getElementById("motivated").style.backgroundColor="green";
}

function boredin(){
    document.getElementById("bored").style.backgroundColor="yellow";
}

