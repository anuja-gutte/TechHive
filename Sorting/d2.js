function performInsertionSort() {
    // Get the input values
    const arrayInput = document.getElementById("arrayInput").value;

    // Parse the array input from comma-separated string to an array of numbers
    const array = arrayInput.split(',').map(item => parseInt(item.trim()));

    // Check if the user input is valid
    if (array.some(isNaN)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Clear any previous results and array elements
    document.getElementById("result").innerHTML = '';
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';

    // Create visual representation of the array
    array.forEach((item, index) => {
        const element = document.createElement('div');
        element.classList.add('element');
        element.setAttribute('id', `element-${index}`);
        element.innerHTML = item;
        arrayContainer.appendChild(element);
    });

    // Perform animated insertion sort
    let i = 1;

    function sortStep() {
        if (i >= array.length) {
            document.getElementById("result").innerHTML = "Sorting completed!";
            array.forEach((_, index) => {
                document.getElementById(`element-${index}`).classList.add('sorted');
            });
            return;
        }

        const key = array[i];
        let j = i - 1;

        // Highlight the current element being inserted
        const currentElement = document.getElementById(`element-${i}`);
        currentElement.classList.add('highlight');

        function innerLoop() {
            if (j >= 0 && array[j] > key) {
                // Swap elements visually
                array[j + 1] = array[j];

                // Swap elements in the DOM
                const current = document.getElementById(`element-${j + 1}`);
                const previous = document.getElementById(`element-${j}`);
                current.innerHTML = previous.innerHTML;

                // Highlight the swapping elements
                current.classList.add('swapping');
                previous.classList.add('swapping');

                setTimeout(() => {
                    current.classList.remove('swapping');
                    previous.classList.remove('swapping');
                    j--;
                    innerLoop(); // Repeat until the correct position is found
                }, 500);
            } else {
                array[j + 1] = key;

                // Insert the key element in the correct position
                const correctPosition = document.getElementById(`element-${j + 1}`);
                correctPosition.innerHTML = key;
                correctPosition.classList.add('sorted');
                
                currentElement.classList.remove('highlight');
                i++;
                setTimeout(sortStep, 500); // Proceed to the next element after a short delay
            }
        }

        innerLoop();
    }

    // Start the animation
    sortStep();
}
