

alert("Bienvenido a Alojamientos ElDescanso.\n El mejor lugar para descansar 🛌  🌴")

let habitaciones = alert("A continuacion le mostraremos las caracteristicas de cada habitacion que mas se ajusten a sus necesidades.")

alert("La Habitacion Simple cuenta con: \n Una cama simple \n Baño propio \n Servicio de internet \n Con un precio de $1000")
alert("La Habitacion Comfort cuenta con: \n Una cama doble \n Tv \n Aire acondicionado \n Servicio de internet \n Con un precio de $2000")
alert("La Habitacion Premium cuenta con: \n Una cama king size \n Tv de alta resolucion \n Mini bar con todo tipo de bebidas \n Aire acondicionado \n Internet de 300 mbps \n Ropero p/2 Personas \n Con un precio de $3000")
let habitacion = prompt("Ingrese porfavor la opcion con numeros para seleccionar la habitacion en la que desea hospedarse \n 1.Habitacion Simple \n 2.Habitacion Comfort \n 3.Habitacion Premium");
while(habitacion != "1"  && habitacion != "2" && habitacion !="3"){
    alert("Seleccione un numero valido porfavor e intentelo nuevamente");
    window.location.reload()
    i++; 
}

let precio = Number;

//switch de las opciones 

switch(habitacion){
    case "1" || 1: 
precio = 1000
alert("!!Ha seleccionado la habitacion simple!!");
break;
case "2" || 2:    
    precio = 2000
    alert("Excelente eleccion de la habitacion Comfort");
    break;
    case "3"|| 3 :      
    precio = 3000   
    alert("Ha seleccionado la mejor habitacion del complejo , !!!Felicidades!!!");
    break;
    default :
    precio = 100000000;  
    alert("Seleccione una habitacion Por favor");   
}

 alert("Ahora vamos a crear su usuario para continuar el pago \n Por favor siga las instrucciones")
   
  let username = prompt(" Ingrese su nombre y apellido");
  let  correo = prompt(" Ingrese su correo electronico");
  let  provincia = prompt(" Ingrese su provincia");
  
 let usuario = (username,correo,provincia);

 alert("Bienvenido : " + username + " \n Correo :  " + correo + " \n De la provincia : " + provincia)



alert("Eliga su metodo de pago \n Recuerde que pagando en efectivo tiene un descuento del %10 en su alojamiento! \n Mientras que pagando con tarjeta tiene un recargo del %10 ")
let metodoDePago = prompt("Indique como va a realizar su pago. \n 1.Efectivo  \n 2. Tarjeta ") 
 

// funciones para calcular el porcentaje pagando con efectivo o tarjeta

let tarjetaPay = num1 => {return porcentajeTotal = precio + (num1 *0.10)}



function efectivoPay(num1){
    return porcentajeTotal = precio - (num1 * 0.10)
}



if(metodoDePago == "1" ){
    precio = efectivoPay(precio)
alert("El costo final de tu servicio es de $" + precio)
} else if(metodoDePago == "2"){
    precio = tarjetaPay(precio)
alert("El precio final de su estadia es de $ " + precio)
}else{
    alert("Metodo de pago incorrecto intentelo nuevamente")
    window.location.reload()
}




alert("Gracias  " + username + " por alojarse con ElDescanso \n En breve le enviaremos a su correo electronico todos los detalles de su hospedaje.")
