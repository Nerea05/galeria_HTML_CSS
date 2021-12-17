//CAPTURA DE LOS ELEMENTOS
const slider= document.querySelector('.caja_mini');
let images= document.querySelector('.mini');
let contador= 1; //imagen actual
let caja= document.querySelector('#caja');

// let data=[
//   {
//     src="assets/images/1.jpg",
//     alt="picture1",
//     titulo="La libertad guiando al pueblo",
//     autor="Delacroix",
//     fecha="1830",
//   },

//   {
//     src="assets/images/2.jpg",
//     alt="picture2",
//     titulo="El 3 de mayo en Madrid",
//     autor="Goya",
//     fecha="1814",
//   },

//   {
//     src="assets/images/3.jpg",
//     alt="picture3",
//     titulo="Guernica",
//     autor="Picasso",
//     fecha="1937",
//   },

//   {
//     src="assets/images/4.jpg",
//     alt="picture4",
//     titulo="La creación de Adán",
//     autor="Miguel ángel",
//     fecha="1511",
//   },

//   {
//     src="assets/images/5.jpg",
//     alt="picture5",
//     titulo="La tentación de San Antonio",
//     autor="Dalí",
//     fecha="1946",
//   },

//   {
//     src="assets/images/6.jpg",
//     alt="picture6",
//     titulo="Los amantes",
//     autor="Magritte",
//     fecha="1928",
//   },

//   {
//     src="assets/images/7.jpg",
//     alt="picture7",
//     titulo="Las Meninas",
//     autor="Velázquez",
//     fecha="1656",
//   },

//   {
//     src="assets/images/8.jpg",
//     alt="picture8",
//     titulo="La persistencia de la memoria",
//     autor="Dalí",
//     fecha="1928",
//   },

//   {
//     src="assets/images/9.jpg",
//     alt="picture9",
//     titulo="La noche estrellada",
//     autor="Van Gogh",
//     fecha="1889",
//   },


// ];

//CAMBIO DE IMAGEN A TRAVES DE LAS MINIATURAS
let cambioimagen = (img, alt) => {
    let imagengrande = document.querySelector("#caja");
	imagengrande.src = img;
    imagengrande.alt = alt;
};
document.querySelectorAll('.mini').forEach(item => {
    item.addEventListener('click', event => {
      cambioimagen(item.src, item.alt);
    })
});
//CAMBIO DE IMAGEN CON LOS CONTROLES
const rightArrow= document.querySelector('.flechaDer');
rightArrow.addEventListener('click', event=>{
  cambioimagen(`assets/images/${contador}.jpg`, "hola");
  if(contador<8)
  contador++;
  else (contador=1)
});
const leftArrow= document.querySelector('.flechaIzq');
leftArrow.addEventListener('click', event=>{
  cambioimagen(`assets/images/${contador}.jpg`, "hola");
  if(contador>1)
  contador--;
  else(contador=9);
});


//CAMBIO DE TEMAS

let btn1= document.querySelector('.btn1');
let btn2= document.querySelector('.btn2');
let btn3= document.querySelector('.btn3');

//botón de colores de fondo 
const bgEl = document.querySelector("main");

btn1.addEventListener("click", () => {
  document.body.style.background= '  #fff69f  ';
});
btn2.addEventListener("click", () => {
  document.body.style.background= '  #c9affd   ';
});

btn3.addEventListener("click", () => {
  document.body.style.background= ' #ffc8c8 ';
});

//DESCRIPCIÓN DE LAS IMAGENES

let btnDescrip= document.querySelector(".btn-descrip"); 
let descripcion= document.querySelector(".caja-descripcion");
btnDescrip.onclick=function(){
  descripcion.classList.toggle("active");

}


switch(contador){
  case 1:
    descripcion.innerHTML= `Titulo:La libertad guiando al pueblo,
    Autor:Delacroix
    Fecha: 1830`;
    break;
  case 2:
    descripcion.innerHTML= `Titulo: El 3 de mayo en Madrid,
    Autor: Goya
    Fecha: 1814`;
    break;
  case 3:
    descripcion.innerHTML= `Titulo: El Guernica,
    Autor: Picasso,
    Fecha: 1937`;
    break;
  case 4:
    descripcion.innerHTML= `Titulo: La creación de Adán,
    Autor: Miguel Ángel,
    Fecha: 1512`;
    break;
  case 5:
    descripcion.innerHTML= `Titulo: La tentación de San Antonio,
    Autor: Dalí,
    Fecha: 1946`;
    break;
  case 6:
    descripcion.innerHTML= `Titulo: Los amantes,
    Autor: Magritte,
    Fecha: 1928`;
    break;
  case 7:
    descripcion.innerHTML= `Titulo: Las Meninas,
    Autor: Velázquez,
    Fecha: 1656`;
    break;
  case 8:
    descripcion.innerHTML= `Titulo: La persistencia de la memoria,
    Autor: Dalí,
    Fecha: 1931`;
    break;
  case 9:
    descripcion.innerHTML= `Titulo: La noche estrellada,
    Autor: Van Gogh,
    Fecha: 1889`;
    break;   
};









