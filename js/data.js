/*En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y
existencia. Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros.
Considerando que los datos se cargan en un array de objetos (Ej. estructura de cada objeto:
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2}), se requiere una función que
retorne la cantidad de artículos sin existencia en un departamento dado.
Función: cantidadArticulosSinExistencia.
Parámetros: articulos (array de objetos articulo), departamento (un número).
Retorno: la cantidad de artículos que no tienen existencia en el departamento indicado.
*/
let cantidadArticulosSinExistencia=(articulo,departamento)=>{
    let cnt=0;
    for(let i=0;i<articulo.length;i++)
        if(articulo[i].departamento===departamento && articulo[i].existencia===0){
            cnt++;
        }
        return cnt;
    }
      

let articulos =[
    {departamento:2,nombre:"Pijama",precio:15,existencia:2},
    {departamento:3,nombre:"Camisa",precio:10,existencia:0},
    {departamento:1,nombre:"Peluche",precio:3,existencia:0},
    {departamento:3,nombre:"Gorra",precio:12,existencia:0},
    {departamento:2,nombre:"Bolso",precio:20,existencia:3}

];

let salida=document.getElementById("salida")

salida.innerHTML=`
Cantidad de articulos sin existencia en el departamento 1: ${cantidadArticulosSinExistencia(articulos,1)}
<br>Cantidad de articulos sin existencia en el departamento 2: ${cantidadArticulosSinExistencia(articulos,2)}
<br>Cantidad de articulos sin existencia en el departamento 3: ${cantidadArticulosSinExistencia(articulos,3)}
`
