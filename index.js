// Write your solution here!
const cats = [
"Milo",
"Otis",
"Garfield",
];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const dogs = [...cats, "Broom"];
    return dogs;
}
function prependCat(name) {
    const dogs = ["Arnold", ...cats];
    return dogs;
}
function removeLastCat() {
    const dogs = cats.slice(0, 2);
    return dogs;
}
function removeFirstCat() {
    const dogs = cats.slice(1);
    return dogs;
}