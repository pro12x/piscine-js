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
