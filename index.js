// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat() {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
} 

function removeLastCat() {
    var removeLastCat = cats.slice(0, cats.length -1);
    return removeLastCat;
}

function removeFirstCat() {
    var removeFirstCat = cats.slice(1);
    return removeFirstCat;
}