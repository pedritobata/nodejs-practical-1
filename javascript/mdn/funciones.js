const c = console.log;

c("Functions !!");

// funcion definicion

function sayHello(name) {
  return "Hi " + name;
}

c(sayHello("Perico"));

// funcion expresion
const sayBye = function (name) {
  return "Good bye " + name;
};

c(sayBye("Nandinho"));

// pasando parametro por referencia

const person = {
  name: "Luis",
  lastName: "Moreyra",
  age: 33,
};

c("Before", person);

function changePersonName(personOld) {
  personOld.name = "Luchito";
}

changePersonName(person);

c("After", person);

// Pasando una funcion como un parametro

function map(cb, arr) {
  const result = [];
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    result[i] = cb(arr[i]);
  }
  return result;
}

const numbers2 = [1, 2, 3, 4];
if (numbers2.length > 0) {
  var f = function (num) {
    return Math.pow(num, 3);
  };
}
c("Elevando al cubo", map(f, numbers2));

// function como definicion se eleva (hoisting) en su ambito
c('Eleva al cuadrado', square(5));
//c('Eleva al cubo', cube(5));  no puedo acceder a la function interna

function square(num){
    function cube(num){
        return num * num * num;
    }
    return num * num;
}

// Scope the function

var num1 = 5;
var num2 = 8;
var name = 'Yerbita';

function getScore(){
    var result = 0;
    function add(){
        result = num1 + num2;
        return result;
    }

    return add();
}

c(`${name} anotó ${getScore()} puntos!!`);

// Auto referencia de funciones
const myFunc = function foo(){
    c('func', myFunc);
    c('func', foo);
    c('func', arguments.callee);
}

myFunc();

// Closure
function addPrefix(prefix){
    function getPrefixedLastName(lastName){
        return prefix + ' ' + lastName;
    }
    return getPrefixedLastName;
}

const addMalePrefix = addPrefix('Mr');
c(addMalePrefix('Ferreyra'));
c(addMalePrefix('Castañeda'));

const addFemalePrefix = addPrefix('Miss');
c(addFemalePrefix('Karin'));
c(addFemalePrefix('Loca'));

c(addPrefix('Mr')('Magoo'));

// Closure para manipular variables internas

function getPersonData(name){
    var age = 40;
    return {
        getName: function(){
            return name;
        },
        setName: function(newName){
            name = newName;
        },
        getAge: function(){
            return age;
        },
        setAGe: function(newAge){
            age = newAge;
        }
    }
}

const personData = getPersonData('Perico');
c('old name', personData.getName())
personData.setName('Periquito');
c('new name', personData.getName())

// Closure para encapsular un dato
const getSecret = (function getClientSecret(){
    var secret = 'aaaf90dj';
    return function (){
        return secret;
    }
})();

c('Secret', getSecret());


