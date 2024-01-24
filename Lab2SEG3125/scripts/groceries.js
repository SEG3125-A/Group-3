// Script for grocery items for website

var products = [
    {
        name: 'Carrot',
        isVegetarian: true,
        isGlutenFree: true,
        price: 2.99
    },
    {
        name: 'Green Pepper',
        isVegetarian: true,
        isGlutenFree: true,
        price: 2.99
    },
    {
        name: 'Cucumber',
        isVegetarian: true,
        isGlutenFree: true,
        price: 3.99
    },
    {
        name: 'Bread',
        isVegetarian: true,
        isGlutenFree: false,
        price: 4.99
    },
    {
        name: 'Crackers',
        isVegetarian: true,
        isGlutenFree: false,
        price: 5.99
    },
    {
        name: 'Rice',
        isVegetarian: true,
        isGlutenFree: false,
        price: 4.99
    },
    {
        name: 'Eggs',
        isVegetarian: true,
        isGlutenFree: true,
        price: 6.99
    },
    {
        name: 'Flour',
        isVegetarian: true,
        isGlutenFree: false,
        price: 5.99
    },
    {
        name: 'Chicken Breast',
        isVegetarian: false,
        isGlutenFree: true,
        price: 8.99
    },
    {
        name: 'Ground Beef',
        isVegetarian: false,
        isGlutenFree: true,
        price: 10.99
    },
    {
        name: 'Salmon',
        isVegetarian: false,
        isGlutenFree: true,
        price: 9.99
    },
    {
        name: 'Noodles',
        isVegetarian: true,
        isGlutenFree: false,
        price: 2.99
    }
]

/**
 * Function that restricts products in grocery item view. Code borrowed from Caroline Barriere
 * @param {*} prod List of products in inventory
 * @param {*} restrictions List of restrictions detailed by user
 */
function restrictProducts(prod, restrictions) {
    let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

/**
 * Function that returns total price of all selected grocery items.
 * @param {*} prod List of products selected by user to be calculated
 */
function calcTotal(prod) {
    
    total = 0;
    for(let i = 0; i < prod.length; i+=1) {
        total += prod[i].price;
    }

    return total;
}