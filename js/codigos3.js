/*let num;
let i;*/
let usuariosTotalesEnES
let numeroIngresos;
let usuariosTotales = [];
class Usuario{
    constructor (nombre, apellido, edad, genero, altura, peso){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.genero = genero;
this.altura = altura;
this.peso = peso;
    }
}
function agregar() {
    return  usuariosTotales.push();
}
let campoNombre = document.getElementById("nombre");
let campoApellido = document.getElementById("apellido");
let campoEdad = document.getElementById("edad");
let campoGenero = document.getElementById("genero");
let campoAltura = document.getElementById("altura");
let campoPeso = document.getElementById("peso");




/*primer renderizado*/
/*es importante validar que el storage no este vacío ya que usamos la clave para iniciar por lo que si esta vacio debe iniciar en cero el arreglo*/
if(localStorage.getItem('usuariosTotalesEnES') !== undefined && localStorage.getItem('usuariosTotalesEnES')){  
    // se fija si hay datos en el storage los agrega en el arreglo , si no hay datos pone el arreglo como vacio 
    usuariosTotales= JSON.parse(localStorage.getItem('usuariosTotalesEnES'));
 }
else {
    usuariosTotales = [];
}
/*verificando las variables y la longitud del arreglo*/
console.log(usuariosTotales);
console.log(usuariosTotales.length);







/*evento sobre un botón */
let boton1= document.getElementById("boton1");
boton1.className= "border rounded-pill btn btn-primary";
/*validación de campos*/
campoEdad.onchange = () => {
if ((campoEdad.value) <=1 || (campoEdad.value >= 120)){
/*alert("debe ingresar un valor adecuado de Edad");*/
//sweetalert
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'debe ingresar un valor adecuado de Edad',
    footer: 'Edad entre 1 y 120 años'
  })
campoEdad.value =""
}
}

/*campoGenero.addEventListener("change", validaGenero);
validaGenero=()=>{             
    if(isNaN(campoGenero.option.value)){
        alert("debe seleccionar su género")
}    

    console.log(campoGenero.option.value);*/

/* validar campo altura*/
campoAltura.onchange = () => {
    if ((campoAltura.value) <=0.5 || (campoAltura.value > 2.50)){
   /* alert("debe ingresar un valor adecuado para la altura");*/
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'debe ingresar un valor adecuado de altura',
    footer: 'altura permitida entre 0.5 y 2.50 metros'
  })
    campoAltura.value =""
    return false;
    }
}
campoPeso.onchange =()=>{
    if((campoPeso.value <=50) || (campoPeso.value >= 300)){
/*alert("debe ingresar un valor adecuado para el peso");*/
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'debe ingresar un valor adecuado para el peso',
    footer: 'peso permitido entre 50 y 300 kilogramos'
})
    campoPeso.value =""
    return false;
}
}
/*primera validación de campo nombre y apellido*/
campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black";
        
    }
    else{
        campoNombre.style.color="red";
   /* alert("nombre no debe comenzar con número");*/
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Nombre no debe comenzar con número',
    footer: ''
})
        campoNombre.value="";
}
}
campoApellido.oninput=()=>{
    if(isNaN(campoApellido.value)){
        campoApellido.style.color="black";
        
    }
    else{campoApellido.style.color="red";
   /* alert("Apellido no debe comenzar con número");*/
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Apellido no debe comenzar con número',
    footer: ''
})
    campoApellido.value="";
}
}

boton1.onclick =() => {
  /*aplicando dom para insertar una imagen*/
  imagen = document.getElementById("formas");
imagen.className = "container";
imagen.innerHTML= `
<img  src="./imagenes/imagen.gif" alt="figura trotando" class="card-img-top">;
`;
   if((campoNombre.value == "") || (campoApellido.value == "")|| (campoEdad.value == "") || (campoPeso.value == "")){
    /*alert("Debe llenar todos los campos");*/
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe llenar todos los campos',
        footer: ''
    })
    return true

   /* else if(campoGenero.value = "Genero"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'debe seleccionar una opción de género',
            footer: ''
          });*/
         
    
   } else{/*alert("sus datos han sido enviados");*/
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'sus datos han sido entrados correctamente',
    showConfirmButton: false,
    timer: 1500
  })
//POST
function enviarDatos(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
const nuevoPost={
    nombre:campoNombre.value,
    apellido: campoApellido.value,
    edad: campoEdad.value,
    genero: campoGenero.value,
    altura: campoAltura.value,
    peso: campoPeso.value
}
fetch(URLPOST,{
    method: "POST",
    body:JSON.stringify(nuevoPost),
    headers:{'Content-type': 'application/json; charset=UTF-8'}
})
    .then(respuesta => respuesta.json())
    .then(datosRetorno =>{
        console.log("lo que retorna json placeholder al post");
        console.log(datosRetorno);
    })
    
}

 //GET
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
	}
};

fetch('https://nutritionix-api.p.rapidapi.com/v1_1/item?upc=49000036756', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
   
   
          nombre = campoNombre.value.toUpperCase();
          apellido = campoApellido.value.toUpperCase();
          edad = parseInt(campoEdad.value);
        genero = campoGenero.value;
          altura = parseFloat(campoAltura.value);
         peso = parseFloat(campoPeso.value);
        console.log(altura);
        console.log(nombre);
         const usuario = new Usuario (this.nombre, this.apellido, this.edad, this.genero, this.altura, this.peso);
         console.log(usuario);
       
         /*agregando los nuevos objetos creados al arreglo existente*/
      usuariosTotales.push(usuario);
         /*visualizando en varias presentaciones por consola*/
      console.log(usuariosTotales);
         console.table(usuariosTotales);
                
        
         /*almacenando el arreglo rresultante del proceso de ingreso*/
        const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }
         guardarLocal("usuariosTotalesEnES", JSON.stringify(usuariosTotales));
        }
      

    }
