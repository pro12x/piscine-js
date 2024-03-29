/*
    Create a function named flags that receives an object and returns the specific aliases and descriptions from the properties of that object.

    The help flag:

    Must be present in the output by default.
    When not present in the input, it should return the description of all flags.
    When present in the input, it specifies the descriptions of the flags that are passed to help. (ex: help: ['divide'])
    Example:
    {
      multiply: 'multiply the values',
      divide: 'divides the values',
      help: ['divide']
    }
    and outputs :

    {
      alias: { h: 'help', m: 'multiply', d: 'divide'}
      description: '-d, --divide: divides the values',
    }
 */

const flags = (obj) => {
    let result = { alias: { h: 'help' } };

    if (obj.length === 0) return result;

    let help = obj.help;
    delete obj.help;

    for (let key in obj) {
        result.alias[key[0]] = key;
    }

    if (help) {
        result.description = help.map((key) => {
            let desc = obj[key];
            return `-${key[0]}, --${key}: ${desc}`;
        });
    } else {
        result.description = Object.keys(obj).map((key) => {
            let desc = obj[key];
            return `-${key[0]}, --${key}: ${desc}`;
        });
    }

    result.description.length === 0
        ? (result.description = '')
        : result.description.length === 1
            ? (result.description = result.description[0])
            : (result.description = result.description.join('\n'));
    return result;
}