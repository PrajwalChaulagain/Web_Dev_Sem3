const Input = document.getElementById('input1')
console.log(Input);


function changeName(ev){
    console.log(ev);
}


Input.addEventListener("change", changeName);