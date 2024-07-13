// typing effect
const textElement = document.getElementById('text');
const text = "Welcome To Web Development Course";
let index = 0;

function type(){
    if (index<text.length){
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

// responsive navbar

function toogleNav(){
    const navbar = document.getElementById('navlinks');
    if(navbar.classList.contains('show')){
        navbar.classList.remove('show');
    }else{
        navbar.classList.add('show');
    }
}