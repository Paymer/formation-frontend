
import PizzaService from "../../src/tp-unit-tests/pizza.service";

it(`A l'initialisation le contrôleur PizzaCtrl possède une liste de pizzas `, () => {

const pizzaServ = new PizzaService() 


// vérifier que le contrôleur possède une propriété _pizzas_ valorisée
expect(pizzaServ.pizzas).toBeDefined();
// vérifier que cette propriété _pizzas_ est un tableau de 2 élements
expect(pizzaServ.pizzas.length).toBe(2);
// vérifier qu'une pizza avec le nom 'Pépéroni' est bien présente
expect(pizzaServ.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined;
})