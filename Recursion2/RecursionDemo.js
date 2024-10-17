document.getElementById('startButton').addEventListener('click', () => {
    const number = parseInt(document.getElementById('factorialInput').value);
    visualizeFactorial(number);
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function visualizeFactorial(n) {
    const callStackElement = document.getElementById('callStack');
    callStackElement.innerHTML = ''; // Clear previous visualizations
    const stack = [];

    async function callFactorial(n) {
        // Show the current recursive call
        const callElement = document.createElement('div');
        callElement.className = 'recursion-step';
        callElement.textContent = `factorial(${n})`;
        callStackElement.appendChild(callElement);

        await sleep(500); // Delay for visualization

        let result;
        if (n === 0 || n === 1) {
            result = 1; // Base case
        } else {
            result = n * (await callFactorial(n - 1)); // Recursive call
        }

        // Update the call element with the result when it's returned
        const returnValueElement = document.createElement('span');
        returnValueElement.className = 'return-value';
        returnValueElement.textContent = `= ${result}`;
        callElement.appendChild(returnValueElement);

        await sleep(500); // Delay for visualization
        return result;
    }

    await callFactorial(n);
}
