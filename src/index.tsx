const test = "hoi";

function* generator() {
    yield "generator";
    yield "is";
    yield "cool";
}

const gen = generator();
console.log(gen);