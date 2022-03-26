//function si tienen concepto de this
function Fn(){
    this.prop = 'propiedad'
    return 'chanchito feliz' //con new regresa this
}
//las funciones function tambien son clases
const r = new Fn()
//console.log(r.prop)

//fat arrow function no tienen contexto de this
//return implicito
const fatFn = () => 2

const r1 = fatFn()
console.log(r1)