// Définition de la fonction setup qui va modifier le comportement des méthodes every et some
const setup = () => {
    // Initialisation du tableau pour stocker les instances d'arrays sur lesquelles every est appelé
    const everyCalls = []
    // Sauvegarde de la méthode originale every pour pouvoir l'appeler plus tard
    const _every = Array.prototype.every
    // Remplacement de la méthode every par une fonction personnalisée
    Array.prototype.every = function () {
        // Ajout de l'instance de l'array courant au tableau everyCalls
        everyCalls.push(this)
        // Appel de la méthode originale every avec le contexte et les arguments actuels
        return _every.apply(this, arguments)
    }

    // Initialisation du tableau pour stocker les instances d'arrays sur lesquelles some est appelé
    const someCalls = []
    // Sauvegarde de la méthode originale some pour pouvoir l'appeler plus tard
    const _some = Array.prototype.some
    // Remplacement de la méthode some par une fonction personnalisée
    Array.prototype.some = function () {
        // Ajout de l'instance de l'array courant au tableau someCalls
        someCalls.push(this)
        // Appel de la méthode originale some avec le contexte et les arguments actuels
        return _some.apply(this, arguments)
    }
    // Retour de l'objet contenant les tableaux d'appels
    return { everyCalls, someCalls }
}

// Exécution de la fonction setup et récupération des tableaux d'appels
const { everyCalls, someCalls } = setup();

// Création d'un tableau avec des nombres impairs
const array1 = [1, 2, 3, 4];
// Création d'un tableau avec des nombres pairs
const array2 = [5, 6, 7, 8];

// Définition d'une fonction pour vérifier si un nombre est pair
const isEven = (num) => num % 2 === 0;

// Utilisation de la méthode every pour vérifier si tous les éléments de array1 sont pairs
const allEven1 = array1.every(isEven);
// Affichage du résultat, qui sera false car tous les éléments ne sont pas pairs
console.log(allEven1); // false

// Utilisation de la méthode some pour vérifier si au moins un élément de array2 est pair
const hasEven = array2.some(isEven);
// Affichage du résultat, qui sera true car au moins un élément est pair
console.log(hasEven); // true

// Affichage des tableaux qui ont utilisé la méthode every
console.log(everyCalls); // Affiche les tableaux qui ont utilisé la méthode every
// Affichage des tableaux qui ont utilisé la méthode some
console.log(someCalls); // Affiche les tableaux qui ont utilisé la méthode some
