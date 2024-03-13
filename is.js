/*
    Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.
        is.num: value is a number.
        is.nan: value is NaN.
        is.str: value is a string.
        is.bool: value is a boolean.
        is.undef: value is undefined.
        is.def: value is defined.
        is.arr: value is an array.
        is.obj: value is a simple object or null objects.
        is.fun: value is a function.
        is.truthy: value is truthy.
        is.falsy: value is falsy.
*/

//const is = {}
is.num = (n) => typeof n === 'number'
is.nan = (n) => Number.isNaN(n)
is.str = (s) => typeof s === "string"
is.bool = (b) => typeof b === "boolean"
is.undef = (v) => v === undefined
is.def = (v) => v !== undefined
is.arr = (v) => Array.isArray(v)
is.obj = (v) => typeof v === "object" && v !== null && !is.fun(v) && !is.arr(v)
is.fun = (v) => typeof v === "function"
is.truthy = (v) => v
is.falsy = (v) => !v
