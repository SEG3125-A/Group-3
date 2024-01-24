// Script for grocery items for website

var products = [
    {
        name: 'Carrot',
        isVegetarian: true,
        isGlutenFree: true,
        isOrganic: true,
        price: 2.99
    },
    {
        name: 'Green Pepper',
        isVegetarian: true,
        isGlutenFree: true,
        isOrganic: true,
        price: 2.99
    },
    {
        name: 'Cucumber',
        isVegetarian: true,
        isGlutenFree: true,
        isOrganic: true,
        price: 3.99
    },
    {
        name: 'Bread',
        isVegetarian: true,
        isGlutenFree: false,
        isOrganic: true,
        price: 4.99
    },
    {
        name: 'Crackers',
        isVegetarian: true,
        isGlutenFree: false,
        isOrganic: false,
        price: 5.99
    },
    {
        name: 'Rice',
        isVegetarian: true,
        isGlutenFree: false,
        isOrganic: false,
        price: 4.99
    },
    {
        name: 'Eggs',
        isVegetarian: true,
        isGlutenFree: true,
        isOrganic: true,
        price: 6.99
    },
    {
        name: 'Flour',
        isVegetarian: true,
        isGlutenFree: false,
        isOrganic: true,
        price: 5.99
    },
    {
        name: 'Chicken Breast',
        isVegetarian: false,
        isGlutenFree: true,
        isOrganic: true,
        price: 8.99
    },
    {
        name: 'Ground Beef',
        isVegetarian: false,
        isGlutenFree: true,
        isOrganic: true,
        price: 10.99
    },
    {
        name: 'Salmon',
        isVegetarian: false,
        isGlutenFree: true,
        isOrganic: true,
        price: 9.99
    },
    {
        name: 'Noodles',
        isVegetarian: true,
        isGlutenFree: false,
        isOrganic: false,
        price: 2.99
    }
]

/**
 * Function that restricts products in grocery item view. 
 * @param {*} prod List of products in inventory
 * @param {*} restriction List of restrictions detailed by user
 */
function restrictProducts(prod, restriction) {
    let product_names = [];

	for (let i=0; i<prod.length; i+=1) {

        if(prod[i].isVegetarian && prod[i].isGlutenFree && prod[i].isOrganic && restriction.includes('vegetarian') && restriction.includes('glutenFree') && restriction.includes('organic')) {
            product_names.push(prod[i]);
        } else if(prod[i].isVegetarian && prod[i].isGlutenFree && restriction.includes('vegetarian') && restriction.includes('glutenFree')) {
            product_names.push(prod[i]);
        } else if(prod[i].isVegetarian && prod[i].isOrganic && restriction.includes('vegetarian') && restriction.includes('organic')) {
            product_names.push(prod[i]);
        } else if(prod[i].isOrganic && prod[i].isGlutenFree && restriction.includes('glutenFree') && restriction.includes('organic')) {
            product_names.push(prod[i]);
        } else if(prod[i].isVegetarian && restriction.includes('vegetarian')) {
            product_names.push(prod[i]);
        } else if(prod[i].isGlutenFree && restriction.includes('glutenFree')) {
            product_names.push(prod[i]);
        } else if(prod[i].isOrganic && restriction.includes('organic')) {
            product_names.push(prod[i]);
        } else if(restriction.includes('none')) {
            product_names.push(prod[i]);
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