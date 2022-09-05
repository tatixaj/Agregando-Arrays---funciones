// variables

// Arrays :
const productos = [];
const carrito = [];
const totalPrecio = [];

// Variables de Login
let user = "tati";
let pass = "1234";

// Variables de proceso:
let productoFiltrado;
let productoElegido;
let productoCarrito;
let precioProducto;
let Unidad;
let totalPrecioUnidades = 0;
let userIngresado;
let passIngresado;

// Constructor de objetos
class producto {
    constructor (id, nombre, precio, stock, unidad) { 
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.unidad = unidad;
    
}
} 

// Objetos construidos:
let anillos = new producto (1000, "Anillos", 500, "1000");
let gargantillas = new producto (1000, "Gargantillas", 1000, "1000");
let pulseras = new producto (1000, "Pulseras", 700, "1000");
let aros = new producto (1000, "Aros", 380, "1000");
let carteras = new producto (1000, "Carteras", 2800, "1000");
let pashminas = new producto (1000, "Pashminas", 1500, "1000");

// Objetos pusheados al Array de productos
productos.push (anillos, gargantillas, pulseras, aros, carteras, pashminas);
console.log(productos);




// Login - acceso
ingreso ();
if (validacion) { //Pueden pedir productos si la validación del user es True
    pedirProducto ();
    while (validacion) {
    productoIngresado ()
    
}
sumarCarrito ();
}

// funciones:

// Funcion Login 
function ingreso () {
    for (i=0; i<3; i++) {

        userIngresado = prompt("ingrese su nombre de usuario:");
        passIngresado = prompt("Ingrese su contraseña")

        if (userIngresado == user && pass == passIngresado) {
            console.log("Ingreso exitoso")
            alert("ingreso exitoso");
            validacion = true;
            break;
        }
        else {
            validacion = false
            console.log(validacion)
            if (userIngresado !== user && passIngresado == pass) {
                console.log("usuario invalido");
                alert("usuario inválido");
                validacion = false;
            }
            else {
                if (userIngresado == user && passIngresado !== pass) {
                    console.log("contraseña inválida");
                    alert("contraseña inválido")
                    validacion = false;
                }
                else {
                    console.log("Usuario y contraseña inválidas")
                    alert("usuario y contraseña inválidas")
                    validacion = false;
                }
            }
        } 
    }
    if (validacion == false) {
    console.log("superó el límite de intentos")
    alert("superó el limite de intentos")
    }
}
// funcion Ingresar producto por el cliente
function pedirProducto () {
    productoElegido = prompt("Que producto desea comprar: \n Anillos \n Gargantillas \n Pulseras \n Aros \n Carteras \n Pashminas \n o presiona n para salir");
    console.log(productoElegido);
    if (productoElegido === "n") {
        validacion = false
        console.log(`${userIngresado} Gracias por confiar en nosotros, nos contactaremos para coordinar el pago!`)
        alert(`${userIngresado} Gracias por confiar en nosotros, nos contactaremos para coordinar el pago!`)
    }
    else {
        validacion = true
    }
}

// 
function productoIngresado () {
    productoFiltrado = productos.find (item => item.nombre === productoElegido);
    console.log(productoFiltrado);

    Unidad = prompt("ingrese cuantas unidades desea");
    totalPrecioUnidades = productoFiltrado.precio * Unidad;
    console.log(totalPrecioUnidades);
    

    alert(`El producto seleccionado es ${productoFiltrado.nombre} 
    El precio por unidad es $${productoFiltrado.precio} 
    Usted ha solicitado ${Unidad} item/s.
    El total es de $${totalPrecioUnidades}`);

    carrito.push(productoFiltrado); //Array carrito de compras
    console.log(`carrito`, carrito);
    

    totalPrecio.push(totalPrecioUnidades); //Array subtotal de precios
    console.log(totalPrecio);

    pedirProducto ();
}

function sumarCarrito () {
    precioProducto = totalPrecio.reduce((total, producto) => total + producto, 0)
    console.log(precioProducto);
    alert(`El costo total de su compra es de $${precioProducto}`)
}

