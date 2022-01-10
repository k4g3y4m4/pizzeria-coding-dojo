let pizzaOven = (tipoCorteza,tipoSalsa,quesos, salsas) => {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

let pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"] , ["pepperoni", "salchicha"]);
let pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"] ,["champiñones", "aceitunas", "cebollas"]);

let pizza3 = pizzaOven("estilo New York", "tradicional", ["mozzarella", "parmesano"] , ["chorizo"," champiñones", "salchicha"]);
let pizza4 = pizzaOven("estilo California", "tradicional", ["mozzarella", "parmesano"] , ["pepperoni", "piña"]);

let randomPizza = () => {
    let pizza = pizzaOven(
        ["estilo Chicago", "estilo New York", "estilo California","lanzada de mano"][Math.floor(Math.random() * 4)],
        ["tradicional", "marinara"][Math.floor(Math.random() * 2)],
        ["mozzarella", "parmesano","paria","ricota"][Math.floor(Math.random() * 4)],
        ["chorizo", "champiñones", "salchicha","pepperoni","piña"][Math.floor(Math.random() * 5)]
    );
    return pizza;
}

console.log(randomPizza());