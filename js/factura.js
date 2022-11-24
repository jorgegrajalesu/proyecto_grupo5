//crear una función
function calcular(){
    //definir variables para el iva, precio y cantidad
    const iva = 0.19;
    let precio = document.simuladorFactura.precio.value;
    let cantidad = document.simuladorFactura.cantidad.value;
    //capturar el producto
    producto = document.getElementById('producto').value;

    /*
    Crear una validación para evitar operaciones con datos nulos o vacios; que la cantidad o precio no sea 0.
    Se hace con una estructura condicional if - then
    */
   if (precio == 0 || precio == null || cantidad==0 || cantidad == null){
    alert("cantidad o precio son 0 o no son validos, intentar de nuevo");
   }else{
    //declarar las variables para las operaciones
    //valor total vt
    let vt = precio * cantidad;
    // valor del porcentaje del producto con iva  vi
    let vi = vt * iva;
    //total a pagar que es la suma de iva + valor total tp
    let tp = vt + vi;

    //imprimir o mostrar los resultados en la pagina web,se utiliza un elemento llamado innerHTML
    //mostrar el producto seleccionado
    document.getElementById("valorProducto").innerHTML=producto;
    //mostrar el precio
    document.getElementById("valorPrecio").innerHTML=precio;
    //mostrar el valorTotal
    document.getElementById("valorTotal").innerHTML=vt;
    //mostrar el valorIva
    document.getElementById("valorIva").innerHTML=vi;
    //mostrar el totalPagar
    document.getElementById("totalPagar").innerHTML=tp;

   }

}