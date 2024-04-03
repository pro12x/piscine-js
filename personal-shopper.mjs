'use strict';

import { readdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

const guestDirectory = process.argv[2] ?? './guests';
const fileShoppingList = process.argv[3] ?? 'shopping-list.json';

let drinkWishers = {
    beer: 0,
    wine: 0,
    water: 0,
    soft: 0,
}
    , foodWishers = {
    eggplants: 0,
    mushrooms: 0,
    hummus: 0,
    courgettes: 0,
    burgers: 0,
    sardines: 0,
    kebabs: 0,
    potatoes: 0,
}
    , guestsCounter = 0;

async function main() {
    let shoppingList = {};
    if (existsSync(fileShoppingList)) {
        try {
            const content = await readFile(fileShoppingList);
            shoppingList = content.length > 0 ? JSON.parse(content) : {};
        } catch (err) {
            console.error(new Error(`fail parsing shopping list in ${fileShoppingList}: ${err}\n a new list will be created`));
        }
    }

    const filenames = (await readdir(guestDirectory)).filter(filename => filename.endsWith('.json'));
    for (const fileName of filenames) {
        const guestInfo = JSON.parse(await readFile(`${guestDirectory}/${fileName}`));
        if (guestInfo.answer === 'yes') {
            guestsCounter++;
            foodWishers.potatoes++;
            if (guestInfo.drink) {
                drinkWishers[guestInfo.drink]++;
            }
            if (guestInfo.food) {
                switch (guestInfo.food) {
                    case 'veggie':
                    case 'vegan':
                        foodWishers.mushrooms += 3;
                        foodWishers.eggplants++;
                        foodWishers.hummus++;
                        foodWishers.courgettes++;
                        break;
                    case 'carnivore':
                        foodWishers.burgers++;
                        break;
                    case 'fish':
                        foodWishers.sardines++;
                        break;
                    case 'everything':
                        foodWishers.kebabs++;
                        break;
                }
            }
        }
    }

    if (!guestsCounter) {
        console.log('No one is coming.');
        return;
    }

    if (drinkWishers.beer) {
        shoppingList['6-packs-beers'] = Math.ceil(drinkWishers.beer / 6);
    }
    for (let product of ['water', 'wine', 'soft']) {
        if (drinkWishers[product]) {
            shoppingList[`${product}-bottles`] = Math.ceil(drinkWishers[product] / 4);
        }
    }

    for (let product of ['eggplants', 'mushrooms', 'hummus', 'courgettes']) {
        if (foodWishers[product]) {
            shoppingList[product] = Math.ceil(foodWishers[product] / 3);
        }
    }
    for (let product of ['burgers', 'sardines', 'kebabs', 'potatoes']) {
        if (foodWishers[product]) {
            shoppingList[product] = Math.ceil(foodWishers[product]);
        }
    }

    await writeFile(fileShoppingList, JSON.stringify(shoppingList));
}

main().catch(console.error);
