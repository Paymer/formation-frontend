import PizzaCtrl from "../../src/tp-unit-tests/pizza.controller";
import PizzaService from "../../src/tp-unit-tests/pizza.service";

it(`A l'initialisation le contrôleur PizzaCtrl possède une liste de pizzas `, () => {

const pizzaServ = new PizzaService() 
const pizzaCtrl = new PizzaCtrl(pizzaServ) 

// vérifier que le contrôleur possède une propriété _pizzas_ valorisée
expect(pizzaCtrl.pizzas).toBeDefined();
// vérifier que cette propriété _pizzas_ est un tableau de 2 élements
expect(pizzaCtrl.pizzas.length).toBe(2);
// vérifier qu'une pizza avec le nom 'Pépéroni' est bien présente
expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined;
})