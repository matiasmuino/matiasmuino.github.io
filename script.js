console.log("enlazado correctamente");
let boton = document.querySelector("#tema")
let body = document.querySelector("body")
let modoOscuro = false;
boton.addEventListener("click", () =>{
if(modoOscuro == false){
    modoOscuro = true;
    body.style.backgroundColor = "black";
}else{
    modoOscuro = false;
    body.style.backgroundColor = "white";
}
})