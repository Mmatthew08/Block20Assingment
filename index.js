let numbers = [];
let evens = []; let odds = [];

function addNumbers() {
    let input = document.forms["add-number"]["number"].value;
    if (input == "") {
        alert("No number is added.");
        return false;
    } else {
        numbers.push(parseInt(input));
    }

    document.getElementById("bank").innerHTML = numbers;
    document.forms["add-number"]["number"].value = "";
}

function sortBankOne() {
    const firstValue = numbers.shift();
    if(firstValue % 2 === 0) {
        evens.push(firstValue);
    } else {
        odds.push(firstValue);
    }

    document.getElementById("bank").innerHTML = numbers;
    document.getElementById("odds").innerHTML = odds;
    document.getElementById("evens").innerHTML = evens;
}

function sortAll() {
    evens = []; odds = [];
    for (let i of numbers) {
        if (i % 2 === 0) {
            evens.push(i);
        } else {
            odds.push(i);
        }
    }

    numbers = []
    document.getElementById("bank").innerHTML = numbers;
    document.getElementById("odds").innerHTML = odds;
    document.getElementById("evens").innerHTML = evens;
}