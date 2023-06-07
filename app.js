

// es un comentario en una sola linea



/*mas de una linea */

// declaracion de variables
//tipos de datos


/*
numeros 1 ..........1000000000,reales 
cadena de caracteres (string ) hola mundo pedro listado
valores logicos (true y false) (1 y 0)
*/

// let nombre = "juan pedro"
// let edad = 36
// let estadoCivil = "casado"
// let sabeProgramar = false

//console.log ("tu nombre es", nombre, "tu edad es", edad, "y tu estado civil es", estadoCivil )

//console.log(`Tu nombre es ${nombre}`)

/*let numero1 = 7
console.log(typeof(numero1))

let numero2 = 0


numero1 =parseInt(prompt("ingrese el primer numero"))
console.log(typeof(numero1))


numero2 =parseInt (prompt("ingrese el segundo numero"))

let resultadoMulti = numero1*numero2
let resultadoDivi = numero1 % numero2
let resultadoResta = numero1 - numero2
let resultadoSuma = numero1 + numero2



console.log(resultadoSuma)

*/



//estructura condicional simple

//if (condicion) {}


//operadores relaciones

/*

>mayor
>=mayor igual
<menor
<=menor igual
!=distinyo
==igual igual
===estrictamene igual

*/


/*let nota= parseInt (prompt("ingrese la nota del alumno")) 


if (nota >= 5){
console.log("aprobo")

}

*/




//console.log("pupi")



//estructura condicional compuesta

/*

if (nota >= 5){
    console.log("aprobo")
    
    }

    else{

        console.log("no aprobo")
    }
*/




    /*let notaaprobado=5


    //operador ternario

    let nota= parseInt (prompt("ingrese la nota del alumno")) 

nota>=nota ? console.log("aprobo") : console.log("no aprobo")

    */


//estructura condicional anidada  (existe otra estructura condicional)

/*
let nota1 = parseInt (prompt("ingrese la primera nota"))
let nota2 = parseInt (prompt("ingrese la primera nota"))
let nota3 = parseInt (prompt("ingrese la primera nota"))

let resultado = (nota1+nota2+nota3)/3

if(resultado>=7){console.log("aprobado")}
else{if(resultado>=4){console.log("regular")}
else{console.log("desaprobo")}

}

 */

//operadores logicos y &&


/*
let nota1 = parseInt (prompt("ingrese la primera nota"))
let nota2 = parseInt (prompt("ingrese la primera nota"))
let nota3 = parseInt (prompt("ingrese la primera nota"))

if(nota1>nota2 && nota1>nota3)
{console.log("la nota mayor es la primera nota")
}else{
if(nota2>nota1 && nota2>nota3){
    console.log("la nota mayor es la segunda nota")
}else{console.log("la nota mayor es la tercera")}}

*/

/*

//operador cortocircuito o circuito corto (evalua la condicion, si es falsa no lo muestra)

let avanzar=true

avanzar && console.log("podes avanzar")

*/


//operador logico o ||

/*
let dia = parseInt (prompt("ingrese dia"))
let mes = parseInt (prompt("ingrese mes"))
let anio = parseInt (prompt("año"))

if(mes ==1 || mes == 1 || mes==3){

    console.log("corresponde al primer tirmestre del año")
}

*/



// estructura repetitiva while (si la condicion da verdadera se ejecuta la condicion)

/*

let x = 10
while (x<=10){
    console.log(x)
x=x+1

}

*/


//concepto del acumulador

/*let x=1
let suma=0
while(x<=5){
    let valor=parseInt(prompt("ingrese un valor"))
    suma=suma+valor
    console.log(valor)
    x=x+1


}

*/




//console.log(`el valor de la suma de los numeros ingresados es ${suma}`)


//ciclo repetitivo for 

//for (inicializacion; condicion; incremento o decremento)
//  // ejecuta el codigo //




/*
for ( let i=0; i<=10; i=i+1){
console.log(i)

}
/*



//hacer un programa que me pida ingresar 10 y me muestre la suma de los ultimos valores

/*
let suma=0

for(let i=0; i<=9; i=1+1)
{
    let valor = parseInt(prompt("ingrese un valor"))
if(i>5){
suma=suma+valor
console.log(suma)

}
}

console.log(`la suma de los ultimos 5 valores da como resultado ${suma}`)
*/

//Funcion nombrada

/* function nombreFuncion(numero){
return numero

}

nombreFuncion(20)

// funciones declaracion

// funciones 3 pasos

/*function mostrarMensaje() {
console.log("hola mundo")

}

mostrarMensaje()
mostrarMensaje()
mostrarMensaje()


//funcion que retorna un valor

function calcularTabla(){
let valor=parseInt(prompt("ingrese un valor para mostrar tabla de multiplicar"))
for(let i=1;i<=10; i=i+1{
let resultado=i*valor

})

}

*/

/*

function suma(a){

    console.log("hola mundo")

}

suma()

//2 declaracion de parametros

let nombre=prompt("ingrese su nombre")
suma(nombre)


*/


//estructura condicional compuesta

/*

if (nota >= 5){
    console.log("aprobo")
    
    }

    else{

        console.log("no aprobo")
    }
*/

/*
let Tienehijos=prompt("Tienes hijos?")
if (Tienehijos === "si"){
    console.log("Tiene hijos")
    
    }

    else{if (Tienehijos === "no"){
        console.log("No tiene hijos")
        
        }
    }

    */








//Arrays


/*
let array=[]

let arraydos=[56,"hola mundo", 3,true,["hola",3,4,5] ]

console.log(arraydos[4])

*/





//Recorrer un array
/*
let array=[]

let arraydos=[56,"hola mundo", 3,true,2,4,6 ]

for(let i=0;i<=1;i=i+1){

    console.log(arraydos[i])

}

*/

//for of 
/*

let array=[]

let arraydos=[56,"hola mundo", 3,true,2,4,6 ]

for (let y of arraydos){console.log(y)}

//for(let i=0;i<=1;i=i+1){

    //console.log(arraydos[i])

//}
*/

//array de objetos
/*
const miarray=["hola",45,4.5,[true,5]]

console.log (miarray[1]) 





const usuarios=[{
    nombre:"miguel",
    edad:23;
    estadocivil:true,
    amigos:["julian", "emilio", "juana"],

},{
    nombre:"fania",
    edad:25,
    estadocivil:false;
    amigos:["mario","julio"]
}


]
*/




//metodo 

//metodos basicos
/*
propiedad
.lenght

const miarray=["hola",45,4.5,[true,5]]

console.log (miarray.length) 


const miarray=["hola",45,4.5,[true,5]]

console.log (miarray.lengh()) 



metodos basicos
.push()


const miarray=["hola",45,4.5,[true,5]]

console.log (miarray.push()) 



*/






//Metodos del array


//let numeros=[25,96,1,35,9,6,3]
//numeros.shift() (saca el primero)
//numeros.unshift(3)  (agrega al principio)
//numeros.reserve()  (al revez)
//numeros.push()  (saca el primero)
//numeros.pop()  (saca el ultimo)
//numeros.join()  (queda como string)
//numeros.sort (function(a,b) {return a-b}) (ordena de menor a mayor)
//numeros.splice(0,5, "pepe", "toto",)(saca el/los que quiera y lo remplazo)
//numeros.length (cantidad de elementos)




//console.log(numeros)




//propiedades

//console.log(numeros.length) 
//console.log(numeros.shift)




/*
let numeros=[25,96,1,35,9]

let indiceAEliminar = numeros.indexOf(35)

console.log(indiceAEliminar)

*/

//Metodos avanzados



/*
const miarray=["hola",45,4.5,[true,5]]

console.log(miarray.filter(elemento=>elemento))

*/








//DOM  (Document Object Model manejo de dom)


//console.log(document) Documento

//console.log(document.getElementById("contenedor")) 

//let contenedor = document.getElementById("contenedor") /*guardo en una variable*/

//console.log(contenedor)

//contenedor.innerText ="hola tito ah el chocho" /*escribo desde JS*/

//contenedor.innerHTML ="<h1>hola tito ah el chocho</h1>"  /*escribo desde JS con html*/



//let mensaje = document.querySelector("#mensaje")  (con clase)

//mensaje.innerText




//For reccorrer Array string

/*
let palabras=["paola", "sabrina", "adelina", "julia", "marta"]

let recorrer=palabras.length
console.log(recorrer)


for(let i=0;i<recorrer;i++){
    console.log(palabras[i])
    contenedor.innerHTML = palabras

}


//i++
//i=i+1

*/

//Sacar un valor del array y ponerlo en el html

/*


let contenedor=document.getElementById("contenedor")

let palabras=["paola", "sabrina", "adelina", "julia", "marta"]

let recorrer=palabras.length
console.log(recorrer)


for(let i=1;i<recorrer;i++){
    contenedor.innerHTML= `<h1>${palabras[i]}</h1>`
}
*/

//cambia de color el fondo

/*
let micolor = prompt("De que color queres el fondo?")

let cuerpo=document.getElementById("cuerpo")
cuerpo.style.backgroundColor=`${micolor}`

*/

//Metodo math

//console.log(Math.random() * 1) (da un numero aleatorio que de digamos)

//Metodo math con floor

/*
let numeroAleatorio=Math.random() *4

let resultadoFinal=Math.floor(numeroAleatorio)
console.log(resultadoFinal)
*/


//Mostrar color con math

/*

let hex=[0,2,3,4,5,6,5, "A", "B", "C"]

let btn=document.getElementById("btn")
let cuerpo=document.getElementById("cuerpo")


function haceClick(){
let hexcolor="#"


for (let i=0;i<6;i++){
//console.log([i])
hexcolor=`${hexcolor}${hex[obtenerNumero()]}`
    console.log(hexcolor)

}

cuerpo.style.backgroundColor=hexcolor


}



function obtenerNumero(){

let resultado=Math.floor(Math.random() *hex.lenght) 
return resultado
}

obtenerNumero()

*/


//Mostrar hora
/*
let hora=document.getElementById("hora")


let mivariable = new Date()

hora.innerHTML=`${mivariable.getHours()}`
*/

//negacion

/*

let esVerdadero = true

if(!esVerdadero == true) {
    console.log("salio por verdadero")
}
else{console.log("salio por falso")}

*/


//funciones

//tres tipos de variables var, let
// const (no se puede cambiar)

//const pi=3.14

//pi=2.56

//funciones nombradas
//funciones del tipo flecha
/*
const miFuncion=()=>{
    console.log("hola mundo")
}
miFuncion

*/

//funciones anonimas
/*
()=>{

}
*/
//function miFuncion(a,b)
//{console.log("hola mundo")}

//miFuncion()


//SCOPES, AMBITO

//LET, CONST Y VAR


/*
if (true) { 

    var nombre = "pepe";
    let edad = 40;
    console.log(edad);
    const apeliido = "."
}

/*console.log(edad)

*/


//Expresiones Regulares

/*


Ingrese contraseña

const mensaje=2134
let patron= new RegExp("[0-9]{4}")

if(patron.test(mensaje)){
    console.log("ingreso un numero entero de 3 digitos")
}else{
    console.log("no ingreso un numero entero de 3 digitos")
}
*/


//o


/*
const mensaje= 455
let patron= /[0-9]{3}/

if(patron.test(mensaje)){
    console.log("ingreso un numero entero de 3 digitos")
}else{
    console.log("no ingreso un numero entero de 3 digitos")
}
*/


/*
const mensaje= "hoy es lindo dia hora"
let patron= /hora/

if(patron.test(mensaje)){
    console.log("la oracion contiene la palabra hora")
}else{
    console.log("la oracion no contiene la palabra hora")
}
*/

/*
const mensaje= 1
let patron= /[a-z]/

if(patron.test(mensaje)){
    console.log("la oracion contiene a-z")
}else{
    console.log("la oracion no contiene a-z")
}
*/

//Patente


//^=tiene que comenzar
//$=tiene que terminar con esa expresion

//{1,} o mas
//{0,} y mas
//{0,1} alguno


/*
const mensaje= "AA000LL"
let patron= /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/

if(patron.test(mensaje)){
    console.log("patente correcta")
}else{
    console.log("patente incorrecta")
}

*/



//API

/*

get==>traer o obtener
post==> enviar y guardar
put==> modificar
delete==> borrar

const datos={
    nombre:"julio",
    apellido:"lopez",
    edad:45
}
*/


/*
const contenedor=document.getElementById("container")

const getPersonajes = () => {
fetch("https://rickandmortyapi.com/api/character")
.then(response=>response.json())
.then(data=>mostrarPersonajes(data.results))
.catch(error=>console.log(error))
.finally(()=>console.log("finalizo la conexion a la api"))
 
}

getPersonajes ()


const mostrarPersonajes = (personajes) => {

    for(let personajet of personajes){
        console.log(personajet.image)
        contenedor.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src="${personajet.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personajet.name}</h5>
          <p class="card-text">${personajet.status}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    }



}

*/

//Repaso

//funcion comun

/*
function sumar (a,b)

{
 return a + b

}

//funcion flecha

const sumarArrow= (a, b) => {
    return a +b
}

console.log(sumar (4,5))
console.log(sumarArrow (2,5))


*/

/*

const sumarArrow= (a, b) => {
    return a+b
}

console.log(sumarArrow (4,5))

*/

//funcion anonima

//console.log ( ((a,b) => a + b) (nombre, "mundo"))


//DOM: Document Object Model


//const btnClickHTML = document.getElementById("btn-click")

//console.log(btnClickHTML)

//const saludar = () => prompt("hola gatito miau miau")

//btnClickHTML.addEventListener ("click", saludar)

//contenedor.innerText="hola"

//contenedorhtml.innerHTML= `<p style ="color:red">lalal</p>`


//Objetos

/*

const julieta = {

 nombre : "julieta",
 apellido : "suarez",
 edad : "88",
}


contenedorhtml.innerHTML=julieta.edad

*/


/*
const productos = ["banana", "pera", "manzana", "uva"]

const renderizarProductos = () =>{
const contenedor = document.getElementById("contenedor")

for (let producto of productos){

contenedor.innerHTML += `<h1>${producto[0]}</h1>`


}
}
*/

//Operadores ternarios























//Ejercicios



/*

//1

let nombre ="cacho"

console.log(nombre)


//2

let edad =18

console.log(edad)

//3

let tieneHijos =true

console.log(tieneHijos)


//4

let salario =4000

let salarioAnual= salario*12
console.log(salarioAnual)

//5

let edad= prompt("dime tu edad")

if(edad>=18){console.log("Eres mayor de edad")} else { if(edad<18){console.log("Eres menor de edad")}}



//6 

let TieneHijos=true

if(TieneHijos){console.log("Tiene Hijos")} else { console.log("No tiene Hijos")}


//7 

let genero = (prompt("Hombre o Mujer"))

if(genero=="Hombre"){console.log("Eres Hombre")}
else{if(genero=="Mujer"){console.log("Eres Mujer")}}

/*


9-

let numero1 = parseInt (prompt("ingrese el primer numero"))
let numero2 = parseInt (prompt("ingrese el segundo numero"))
let numero3 = parseInt (prompt("ingrese el tercer numero"))
let numero4 = parseInt (prompt("ingrese el cuarto numero"))

console.log(numero1+numero2)
console.log(numero3*numero4)



11-
let valor = parseInt (prompt("ingrese el valor"))


if(valor>=1){console.log("positivo")}
else{if(valor==0){console.log("cero")}}

if(valor <=-1){console.log("negativo")}







12-

let tienePermiso =false
let edad = prompt("dime tu edad")

if(edad>=18 && tienePermiso==true){console.log("puedes conducir")}

if(edad<18 && tienePermiso==true){console.log("no puedes conducir")}

if(edad>=18 && tienePermiso==false){console.log("no puedes conducir")}



//13-

let tieneDinero = false 
let tieneTarjeta = false



if(tieneDinero ==true || tieneTarjeta == true ){

    console.log("Puedes pagar")
}



else{if(tieneDinero ==false && tieneTarjeta == false ){

    console.log("No tienes suficiente dinero")
}}
*/


//Ejercicios 2

/*1

for ( let i=1; i<=10; i=i+1){
    console.log(i)
}

//2

for ( let i=2; i<=20; i=i+2){
    console.log(i)
}

//3

for ( let i=1; i<=19; i=i+2){
    console.log(i)
}
*/ 

//4
/*
for ( let i=10; i>=1; i=i-1){
    console.log(i)
}
*/ 

//5
/*
for ( let i=1; i<=5; i=i+1){
    console.log(i)
}

for (let i = 0; i < 10; i++) {
    if (i == 5) { break; }
    console.log(i)
  }
*/ 



/*//6
for (let i = 0; i <= 10; i++) {
    if (i == 5) { continue; }
    console.log(i)
  }

*/ 


//7

/*
let nombre=(prompt("cual es tu nombre?"))

function decirNombre() {
    console.log("hola", nombre )
    
    }

    
    decirNombre()
*/ 

    

    


    //9
//declaracion funcion

/*
function suma(pepe){console.log(pepe)

}


let a=  parseInt(prompt("ingrese el primer numero"))
let b=  parseInt(prompt("ingrese el segundo numero"))


suma(a+b)

 */


    //10

/*
function suma(pepe){console.log(pepe)

}


let a=  parseInt(prompt("ingrese el primer numero"))
let b=  parseInt(prompt("ingrese el segundo numero"))


suma(a-b)
 */



    //12
/*
function contarHasta() {
    for (let i = 0; i <= 100; i++) 
        
        console.log(i)
      }
    
      contarHasta()
 */

    //14

    /*


      function contarHasta() {
        for (let i =11; i <=275; i=i+11) 
            
            console.log(i)
          }
        
          contarHasta()

           */

    //14

    /*

          let arraydos=[1,2,3,4,5]
          
          for(let i=0;i<=5;i=i+2){
          

              let impar =(arraydos[i])
              console.log(impar)


          
          }

          let array=[1,2,3,4,5]

          for(let i=0;i<=5;i=i+2){
          

            let par =(array[i])
            console.log(par)


        
        }
  */


       

     
                   

              /*
16//
let altura1= parseInt (prompt("ingrese la altura"))
let altura2= parseInt (prompt("ingrese la altura"))
let altura3= parseInt (prompt("ingrese la altura"))
let altura4= parseInt (prompt("ingrese la altura"))
let altura5= parseInt (prompt("ingrese la altura"))

let suma = altura1+altura2+altura3+altura4+altura5

let promedio =suma/5

console.log(promedio)

  */

    /*

function mostrarNombre(a)
{
    console.log(a)
}

let a= parseInt (prompt("ingrese un numero"))
let b= parseInt (prompt("ingrese un numero"))
let c= parseInt (prompt("ingrese un numero"))
let d= parseInt (prompt("ingrese un numero"))
let e= parseInt (prompt("ingrese un numero"))

let promedio=(a+b+c+d+e)/5


mostrarNombre(promedio)
  */







 // let termino = 11;
//for (let i = 1; i <= 25; i++) {
  //console.log(termino);
  //termino += 11;
//}


//var hambre = confirm("tiene?");

//if (hambre){alert("manuel tiene hambre")}

//Jquery

//$(document).ready(function() {

  //  $("#Parrafo_1");

    //$("p").hide();

    //$("nav").hide();

    //$("#Input_1").val("soy un input")


    //alert($("#Parrafo_1").text())

   /*

//});

const numeros = [1, 2, 3, 4, 5];
let resta = 2;

for (const numero of numeros) {
  resta *= numero;
}

console.log(resta)


*/

//Formulario

//let numerouno = document.getElementById('numerouno');

//let resultado = numerouno.target.value
//console.log(resultado)

 /*
let nombre=document.getElementById("usuario-input");
let form=document.getElementById("formulario")

const enviarformulario = (event) => {
event.preventDefault()

//console.log(event)

let usuario=event.target.usuario.value


console.log(typeof(parseInt(usuario)))

if(usuario==""){
  console.log("no ingresaste nada")

}

console.log(event.target.usuario.value)

console.log(event.target.contrasenia.value)

};


form.addEventListener("submit",enviarformulario)






const contenedor = document.getElementById("contenedor");

const productos = [

  {

    title: "iphone15",
    price:2600,
    description:"lorem impusn",
    id:123123
  },

  {

    title: "iphone15",
    price:2600,
    description:"lorem impusn",
    id:123123

  },

  {

    title: "iphone15",
    price:2600,
    description:"lorem impusn",
    id:123123

  }]


productos.forEach((producto) => {
  contenedor.innerHTML += `

  <div class="carta">
  <h3>Nombre: ${producto.title}</h3>
  <p>Precio: ${producto.price} </p>
  <p>Descripcion: ${producto.description} </p>
  <button id="${producto.id}">Comprar</button>

</div>`

})

*/

//API



const contenedor=document.getElementById("contenedor")

const getpersonajes = ()=> { 


    fetch("https://rickandmortyapi.com/api/character?page=1")
    .then(response=>response.json())
    .then(data=>mostrarPersonajes(data.results))
    .catch(error=>console.log(error))
    .finally(()=>console.log("finalizo la conexion a la api tito"))
    
       
    }
    
    getpersonajes()




    const getpersonajesdos = ()=> { 


        fetch("https://rickandmortyapi.com/api/character?page=2")
        .then(response=>response.json())
        .then(data=>mostrarPersonajes(data.results))
        .catch(error=>console.log(error))
        .finally(()=>console.log("finalizo la conexion a la api tito"))
        
           
        }
        
        getpersonajesdos()



        const getpersonajestres = ()=> { 


            fetch("https://rickandmortyapi.com/api/character?page=3")
            .then(response=>response.json())
            .then(data=>mostrarPersonajes(data.results))
            .catch(error=>console.log(error))
            .finally(()=>console.log("finalizo la conexion a la api tito"))
            
               
            }
            
            getpersonajestres()




            
        const getpersonajescuatro = ()=> { 


            fetch("https://rickandmortyapi.com/api/character?page=4")
            .then(response=>response.json())
            .then(data=>mostrarPersonajes(data.results))
            .catch(error=>console.log(error))
            .finally(()=>console.log("finalizo la conexion a la api tito"))
            
               
            }
            
            getpersonajescuatro()




                
        const getpersonajescinco = ()=> { 


            fetch("https://rickandmortyapi.com/api/character?page=5")
            .then(response=>response.json())
            .then(data=>mostrarPersonajes(data.results))
            .catch(error=>console.log(error))
            .finally(()=>console.log("finalizo la conexion a la api tito"))
            
               
            }
            
            getpersonajescinco()
        
    
    









    
    
    const mostrarPersonajes = (pepe)=> { 
    
    for(let personaje of pepe){
      console.log(personaje)
      contenedor.innerHTML+=`<div class="card mb-3" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${personaje.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style="font-family:Impact; font-size:2rem">${personaje.name}</h5>
            <h6 class="card-title" style="color:red">${personaje.species}</h5>
            <h5 class="card-title">${personaje.gender}</h5>


            <p class="card-text">${personaje.status}</p>
            <p class="card-text">${personaje.id}</p>

            <p class="card-text"><small class="text-body-secondary">${personaje.location.name}</small></p>
          </div>
        </div>
      </div>
    </div>`
    
    
    }
    }




 