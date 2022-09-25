//The DOM implementation property in HTML is used to returns the 
//DOMImplementation object associated with the current document. 
//The DOMImplementation is the interface represents a method providing 
//the object which is not dependent on any particular document. 



let add = document.getElementById('increment'); 
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;
 
add.addEventListener('click', () =>{

    integer += 1 ;
    int.innerHTML = integer;
    
})

remove.addEventListener('click', () =>{
    integer -=1 ;
    if(integer<0){
        integer=0;  
   }
    
    int.innerHTML = integer;
})