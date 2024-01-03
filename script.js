let letters = "0123456789ABCDEF"; 
  

let color = '#'; 
  
function generujB(){
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))]; 
        
    }
    var button = document.createElement("colour1");
    button.style.background=generujB();
    document.getElementById("colour2").style.background=generujB();
}
generujB();
console.log(color);






