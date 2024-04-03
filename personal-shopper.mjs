import fs from 'node:fs';
import path from 'node:path';

const commands = {
    create: (filename) => {
        fs.writeFile(filename, '{}', (err) => {
            if (err) throw err;
            console.log(`File ${filename} created.`);
        });
    },
    delete: (filename) => {
        fs.unlink(filename, (err) => {
            if (err) throw err;
            console.log(`File ${filename} deleted.`);
        });
    },
    add: (filename, item, count = 1) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;
            let list = JSON.parse(data);
            list[item] = (list[item] || 0) + Number(count);
            fs.writeFile(filename, JSON.stringify(list), (err) => {
                if (err) throw err;
                console.log(`Added ${count} ${item} to ${filename}.`);
            });
        });
    },
    rm: (filename, item, count = 0) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;
            let list = JSON.parse(data);
            if (list[item]) {
                list[item] = list[item] - Number(count);
                if (list[item] <= 0) delete list[item];
                fs.writeFile(filename, JSON.stringify(list), (err) => {
                    if (err) throw err;
                    console.log(`Removed ${count} ${item} from ${filename}.`);
                });
            } else {
                console.error(`No ${item} in ${filename}.`);
            }
        });
    },
    ls: (filename) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;
            let list = JSON.parse(data);
            if (Object.keys(list).length === 0) {
                console.log('Empty list.');
            } else {
                Object.entries(list).forEach(([item, count]) => {
                    console.log(`- ${item} (${count})`);
                });
            }
        });
    },
    help: () => {
        console.log('Commands:');
        console.log('- create: takes a filename as argument and create it (should have `.json` extension specified)');
        console.log('- delete: takes a filename as argument and delete it');
        console.log('- add: takes a filename, item, and count as arguments and adds the item to the list');
        console.log('- rm: takes a filename, item, and count as arguments and removes the item from the list');
        console.log('- ls: takes a filename as argument and prints the list');
        console.log('- help: prints a list of all available commands');
    }
};

const [, , command, filename, item, count] = process.argv;

if (!command) {
    commands.help();
} else if (commands[command]) {
    commands[command](filename, item, count);
} else {
    console.error('Invalid command.');
}
