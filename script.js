let letters = "0123456789ABCDEF"; 
  
var colours = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function generujB(number){
    
    for( let j = 0; j < number; j++){
        let color = '#'; 
        for (let i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16))]; 
        }
    colours.push(color);
    }
}

    generujB(3);
    var index = 0;

    var button1 = document.getElementById("colour1");
    button1.style.backgroundColor = colours[index];
    
    var button2 = document.getElementById("colour2");
    button2.style.backgroundColor = colours[index+1];
    
    var button3 = document.getElementById("colour3");
    button3.style.backgroundColor = colours[index+2];

    
    var h1 = colours[getRandomInt(3)];
    document.getElementById("hledane").innerHTML = h1;
    
    






/*
var colours = [];
  
function coloursGenerator(number){
    for( let i = 0; i < number; i++){
        colours.push(generujB());
    }
}

function columnsCreate(){
    for( let i = 0; i < number; i++){
        var ul = document.getElementById("colours");
        var button = document.style.backgroundColor = colours[i];
        ul.push(button)
    }
}
*/



