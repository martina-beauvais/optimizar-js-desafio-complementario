const idioma = {  //Operador Ternario  
    español: { //Desestruración 
        traducidos: "si",
        idiomaOriginal: "si",
    },
    ingles: {//Desestruración 
        traducidos: "si",
        idiomaOriginal: "si",
    },
    frances: "no",
    italiano: {//Desestruración 
        traducidos: "si",
        idiomaOriginal: "si",
    },
}

const {español: {traducidos, idiomaOriginal}, ingles, frances, italiano} = idioma 

// --- LIBROS EN ESPAÑOL ---

const buscarEspañol = (idioma.español === idioma.español) ? true : false
buscarEspañol ? console.log("Si hay libros disponibles libros en español") : console.log("No se han encontrado libros")

// --- LIBROS EN INGLÉS ---

const buscarIngles = (idioma.ingles === idioma.ingles) ? true : false
buscarIngles ? console.log("Si hay libros disponibles libros en inglés") : console.log("No se han encontrado libros")

// --- LIBROS EN ITALIANO ---
const buscarItaliano = (idioma.italiano === idioma.italiano) ? true : false
buscarItaliano ? console.log("Si hay libros disponibles libros en italiano") : console.log("No se han encontrado libros")

// -------- Operador Lógico AND --------
// --- LIBROS EN FRANCÉS --- 

const buscarFrances = (idioma.frances === idioma.frances) && console.log("No hay libros disponibles en francés")


// -------- DESESTRUCTURACIÓN EN PARÁMETROS --------

// ----- PRODUCTOS ----- 
const prod1 = {
    id: 1,
    nombre: "Una Eduación Mortal",
    autor: "Naomi Novik",
    precio: 350,
    stock: "456",
}
const prod2 = {
    id: 2, 
    nombre: "Renegados", 
    autor:"Marissa Meyer", 
    precio: 300, 
    stock: "21", 
}
const prod3 = { 
    id: 3, 
    nombre: "Matar Un Reino", 
    autor:"Alexandra Christo", 
    precio: 250, 
    stock: "783", 

}

const desestructurar = ( {id, nombre, autor, precio} ) => {
    console.log(id, nombre, autor, precio)
}

desestructurar(prod1)
desestructurar(prod2)
desestructurar(prod3)


const prod4 = { //SPREAD DE OBJETOS
    ...prod1,
    id: 4,
    nombre: "El Último Graduado"
}
console.log(prod4)

const productos = [prod1, prod2, prod3, prod4]
console.log(productos)

function sumar(...precio) {
    return precio.reduce((acc, n) => acc + n)
}
console.log(sumar(350*2,300,250))