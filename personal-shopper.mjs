import fs from 'fs/promises';
import path from 'path';

async function readGuestResponses(directory) {
    const files = await fs.readdir(directory);
    const responses = [];
    for (const file of files) {
        if (file.endsWith('.json')) {
            const filePath = path.join(directory, file);
            const data = await fs.readFile(filePath, 'utf-8');
            const guestResponse = JSON.parse(data);
            if (guestResponse.answer === 'yes') {
                responses.push(guestResponse);
            }
        }
    }
    return responses;
}

function categorizePreferences(responses) {
    const categories = {
        drinks: {
            beers: 0,
            water: 0,
            wine: 0,
            softs: 0
        },
        food: {
            veggies: 0,
            vegans: 0,
            carnivores: 0,
            fishLovers: 0,
            omnivores: 0,
            potatoes: 0
        }
    };

    for (const response of responses) {
        if (response.drink) {
            if (response.drink.includes('beer')) categories.drinks.beers++;
            if (response.drink.includes('water')) categories.drinks.water++;
            if (response.drink.includes('wine')) categories.drinks.wine++;
            if (response.drink.includes('soft')) categories.drinks.softs++;
        }
        if (response.food) {
            if (response.food.includes('veggie') || response.food.includes('vegan')) categories.food.veggies++;
            if (response.food.includes('carnivore')) categories.food.carnivores++;
            if (response.food.includes('fish')) categories.food.fishLovers++;
            if (response.food.includes('omnivore')) categories.food.omnivores++;
        }
        categories.food.potatoes++; // Everyone gets potatoes
    }

    return categories;
}

function calculateQuantities(categories) {
    const quantities = {};
    for (const category in categories) {
        for (const item in categories[category]) {
            const quantity = Math.ceil(categories[category][item] / 4); // Rounded up to the nearest whole number
            quantities[`${item}-${category}`] = quantity;
        }
    }
    return quantities;
}

async function updateShoppingList(fileName, quantities) {
    let shoppingList = {};
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        shoppingList = JSON.parse(data);
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
    }

    for (const item in quantities) {
        shoppingList[item] = quantities[item];
    }

    await fs.writeFile(fileName, JSON.stringify(shoppingList, null, 2));
}

async function main(directory, shoppingListFileName) {
    const responses = await readGuestResponses(directory);
    if (responses.length === 0) {
        console.log('No one is coming.');
        return;
    }

    const categories = categorizePreferences(responses);
    const quantities = calculateQuantities(categories);
    await updateShoppingList(shoppingListFileName, quantities);
    console.log('Shopping list updated successfully.');
}

// Example usage
main('./guests', './shoppingList.json');
