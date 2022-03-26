// const Rectangulo = class R {

// }
//no tiene hoising
class Rectangulo {

}

//Hoisting
//tomar variables definidas con var y funciones con function
// y las lleva al comienzo del archivo

function Cuadrado() {}
console.log(Cuadrado, Rectangulo)

const r = new Rectangulo()

class Chancho{
    propiedad = 'mi propiedad'
    #hambre = false
    static estatico = 40
    constructor(estado = 'sad', hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`chanchito ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho!'}`);
    }

    //no puede acceder a las propiedades de la clase
    //no es necesario generar una instancia
    static comer(){
        console.log(this.propiedad, this.estatico, 'estoy comiendo')
    }
}

Chancho.comer()
const feliz = new Chancho('feliz')
//console.log(feliz.__proto__.hablar)
// feliz.hablar()
// console.log(feliz)
const error = new Chancho()
//error.hablar()