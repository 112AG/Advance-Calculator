// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})



// page 3 code 
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function findPrimes() {
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    let resultElement = document.getElementById('result');

    if (isNaN(start) || isNaN(end)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    resultElement.textContent = `Prime numbers between ${start} and ${end} are: ${primes.join(", ")}`;
}

// page 4

        function isComposite(numb) {
            if (numb <= 1) return false;
            for (let i = 2; i <= Math.sqrt(numb); i++) {
                if (numb % i === 0) return true;
            }
            return false;
        }

        function findComposites() {
            let starter = parseInt(document.getElementById('starter').value);
            let ends = parseInt(document.getElementById('ends').value);
            let resultElements = document.getElementById('results');

            if (isNaN(starter) || isNaN(ends)) {
                resultElements.textContent = "Please enter valid numbers.";
                return;
            }

            let composites = [];
            for (let i = starter; i <= ends; i++) {
                if (isComposite(i)) {
                    composites.push(i);
                }
            }

            resultElements.textContent = `Composite numbers between ${starter} and ${ends} are: ${composites.join(", ")}`;
        }

        // page 5
        function calculate() {
            const numbe = document.getElementById('numberInput').value;
            const squ = numbe * numbe;
            const cube = numbe * numbe * numbe;
            document.getElementById('res').innerHTML = `Square: ${squ} &nbsp; Cube: ${cube}`;
        }

// page 6 code for table of any number 
function generateUniqueTable() {
    const number = document.getElementById('uniqueNumberInput').value;
    const tableOutput = document.getElementById('uniqueTableOutput');
    tableOutput.innerHTML = ''; // Clear previous output

    if (number === '') {
        tableOutput.innerHTML = '<p>Please enter a number.</p>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const result = `${number} x ${i} = ${number * i}`;
        const p = document.createElement('p');
        p.textContent = result;
        tableOutput.appendChild(p);
    }
}

// page 6 find number divided by whom
function findCustomDivisors() {
    const number = document.getElementById('customNumberInput').value;
    const divisorsOutput = document.getElementById('customDivisorsOutput');
    divisorsOutput.innerHTML = ''; // Clear previous output

    if (number === '') {
        divisorsOutput.innerHTML = '<p>Please enter a number.</p>';
        return;
    }

    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    divisorsOutput.innerHTML = `<p>Divisors of ${number}: ${divisors.join(', ')}</p>`;
    divisorsOutput.innerHTML += `<p>Total number of divisors: ${divisors.length}</p>`;
}


// page 7 to find root
function calculaters() {
    const inputCount = document.getElementById('inputCount').value;
    const resultElementers = document.getElementById('resultend');
    let resulters;

    if (inputCount.includes('√')) {
        const counters = parseFloat(inputCount.replace('√', ''));
        resulters = Math.sqrt(counters);
    } else {
        const counters = parseFloat(inputCount);
        resulters = `√${counters * counters}`;
    }

    resultElementers.textContent = `Result: ${resulters}`;
}


// footer
function subscribeNewsletter() {
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
    } else {
        alert('Please enter a valid email address.');
    }
}
