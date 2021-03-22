const c = console.log;

c('Expresiones y Operadores')

// Operador de asignacion devuelve la parte derecha de la operacion
let x = 4;
let y = 2;
c('x = y =>', x = y);
x = 4;
y = 2;
c('x += y =>', (x += y));
x = 4;
y = 2;
c('x -= y =>', x -= y);
x = 4;
y = 2;
c('x *= y =>', x *= y);

// Comparacion

c('"12" < 14', '12' < 14)
c('"12" > 14', '12' > 14)