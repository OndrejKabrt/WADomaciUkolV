let letters = "0123456789ABCDEF"; 
  


  
function generujB(){
    let color = '#'; 
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))]; 
        
    }
    return color;
}

    var button1 = document.getElementById("colour1");
    button1.style.background = generujB();
    
    var button2 = document.getElementById("colour2");
    button2.style.background = generujB();
    
    var button3 = document.getElementById("colour3");
    button3.style.background = generujB();


var h1 = document.getElementById("hledane");








