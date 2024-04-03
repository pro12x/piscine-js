/*
    <3 Your pleasure? 💖 That of others Ɛ>

As you're smart, you asked every guest of the party to precise in their answer the kind of drink they would enjoy and the kind of food they would die for.

Create a happiness-manager.mjs script that sort, who wants to drink what and who wants to eat what and integrate that in your barbecue's shopping list!

note that you must only consider vips guests, those that answerd 'yes'

The script must:

Take a directory as first argument (the guest directory)
Take a file .json as second argument:
If the file already exists, it will add the informations to it. If some elements already exist in the original file, it will be replaced by new values.
If it doesn't, the script must handle the creation of the file.
Handle case when no one answered yes to the invitation:
No one is coming. has to appear in console.
No file is updated/created.
Handle cases when answers contains no "food" information, or no "drink" information
Handle cases when no one has chosen a category (for example: no one chose to drink softs). This category should not appear in the final list.
You have to handle the info like this:

Drinks:
Beers: 1 pack / 6 vips (rounded up). Expected key: 6-packs-beers.
Water, wine, softs: 1 bottle / 4 vips in each category (rounded up). Expected keys: wine-bottles, water-bottles, soft-bottles.
Food:
Veggies and vegans: 1 eggplant, 1 courgette, 3 mushrooms and 1 hummus / 3 vips in these categories put together. Expected keys: eggplants, mushrooms, hummus, courgettes.
Carnivores: 1 burger per person. Expected key: burgers.
Fish lovers: 1 sardine per person. Expected key: sardines.
Omnivores: 1 chicken+shrimps+pepper kebab / person. Expected key: kebabs.
Bonus: you'll add 1 potatoe per person (all categories put together). Expected key: potatoes.
The infos have to be formated like this in the .json file:

{
  "key": 1 // according to actual number associated to the elem
}
Notions
for...of
Array.prototype.map()
Math.ceil()
Node file system: stats
Node file system: readdir
Node file system: readFile
Node file system: writeFile
JSON.parse()
JSON.stringify()
Node process: exit

 */

import fs from 'fs/promises';

async function parseGuestDirectory(directoryPath) {
    try {
        const guests = await fs.readdir(directoryPath);
        const vipGuests = [];

        for (const guest of guests) {
            const guestResponse = await fs.readFile(`${directoryPath}/${guest}`, 'utf-8');
            const responseObj = JSON.parse(guestResponse);

            if (responseObj.answer === 'yes') {
                vipGuests.push(responseObj);
            }
        }

        return vipGuests;
    } catch (error) {
        console.error(`Error parsing guest directory: ${error.message}`);
        process.exit(1);
    }
}

function calculateQuantities(vipGuests) {
    const drinkCategories = ['Beers', 'Water', 'Wine', 'Softs'];
    const foodCategories = ['Veggies', 'Vegans', 'Carnivores', 'Fish lovers', 'Omnivores'];

    const quantities = {
        '6-packs-beers': 0,
        'wine-bottles': 0,
        'water-bottles': 0,
        'soft-bottles': 0,
        eggplants: 0,
        mushrooms: 0,
        hummus: 0,
        courgettes: 0,
        burgers: 0,
        sardines: 0,
        kebabs: 0,
        potatoes: 0,
    };

    vipGuests.forEach((guest) => {
        if (guest.answer === 'yes') {
            drinkCategories.forEach((category) => {
                if (guest.drink && guest.drink.toLowerCase() === category.toLowerCase()) {
                    quantities[`${category.toLowerCase()}-bottles`] += 1;
                }
            });

            foodCategories.forEach((category) => {
                if (guest.food && guest.food.toLowerCase() === category.toLowerCase()) {
                    quantities[category.toLowerCase()] += 1;
                }
            });
        }
    });

    quantities['potatoes'] = quantities['eggplants'] + quantities['mushrooms'] + quantities['hummus'] + quantities['courgettes'];

    return quantities;
}


async function updateShoppingList(shoppingListFile, quantities) {
    try {
        let shoppingList = {};

        // Check if the shopping list file exists, and if so, load its content
        try {
            const data = await fs.readFile(shoppingListFile, 'utf-8');
            shoppingList = JSON.parse(data);
        } catch (error) {
            // If the file doesn't exist, shoppingList remains an empty object
        }

        // Update the shopping list with calculated quantities
        for (const key in quantities) {
            if (quantities[key] > 0) {
                shoppingList[key] = quantities[key];
            }
        }

        // Write the updated shopping list to the file
        await fs.writeFile(shoppingListFile, JSON.stringify(shoppingList, null, 2));
        console.log('Shopping list updated successfully!');
    } catch (error) {
        console.error(`Error updating shopping list: ${error.message}`);
        process.exit(1);
    }
}

async function main() {
    if (process.argv.length !== 4) {
        console.error('Usage: happiness-manager.mjs <guestDirectory> <shoppingList.json>');
        process.exit(1);
    }

    const guestDirectory = process.argv[2];
    const shoppingListFile = process.argv[3];

    const vipGuests = await parseGuestDirectory(guestDirectory);
    if (vipGuests.length === 0) {
        console.log('No one is coming.');
        return;
    }

    const quantities = calculateQuantities(vipGuests);
    await updateShoppingList(shoppingListFile, quantities);
}

main();