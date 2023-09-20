/* Ejercicio 1 */
function notas(notas) {
    switch(notas){
        case 0 && 1 && 2:
            alert("Muy mal")
            break
        case 3 && 4 && 5:
            alert("Mal")
            break
        case 6:
            alert("Tan cerca pero tan lejos")
            break
        case 7 && 8:
            alert("Bien")
            break
        case 9 && 10:
            alert("Muy bien!")
            break
    }
}

/* Ejercicio 2 */

function biggestOne(num1, num2, pal){
    if(num1 > num2){
        console.log(num1)
    }else if(num2 > num1){
        console.log(num2)
    }else {
        console.log(pal[0] + pal.substr(-1))
    }
}

/* Ejercicio 3 */

let frutasYVerduras = [{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}]
function filtroFYV(){
    console.log(frutasYVerduras.filter(vegetal => vegetal.fruta))
}

/* Ejercicio 4 */
let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];
let gaseosasEnStock = {gaseosas: []}
for(i = 0; i < unidades.length; i++){
    if(unidades[i] >= 3){
    gaseosasEnStock.gaseosas.push(gaseosas[i])
}

}
console.log(gaseosasEnStock)



/* Ejercicio 5 */

function añodenacimiento(personas){
    let año = new Date().getFullYear()
    for (var i = 0; i < personas.length; i++){
        let resta =  año - personas[i].edad
        personas[i].nacimiento = resta

    }
    console.log(personas)
}