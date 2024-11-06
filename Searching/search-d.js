function performLinearSearch() {
    // Get the input values
    const arrayInput = document.getElementById("arrayInput").value;
    const searchValue = parseInt(document.getElementById("searchInput").value);

    // Parse the array input from comma-separated string to an array of numbers
    const array = arrayInput.split(',').map(item => parseInt(item.trim()));

    // Check if the user input is valid
    if (array.some(isNaN) || isNaN(searchValue)) {
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
        element.innerHTML = `
            <div class="index">${index}</div>
            ${item}
        `;
        arrayContainer.appendChild(element);
    });

    // Create the pointer element
    const pointer = document.getElementById('pointer');
    pointer.style.display = 'block';

    // Perform animated linear search
    let foundIndex = -1;
    let i = 0;

    function highlightElement() {
        // Clear previous highlights
        if (i > 0) {
            document.getElementById(`element-${i - 1}`).classList.remove('highlight');
        }

        // Highlight current element
        const currentElement = document.getElementById(`element-${i}`);
        currentElement.classList.add('highlight');

        // Position the pointer
        const rect = currentElement.getBoundingClientRect();
        pointer.style.left = rect.left + 'px';
        pointer.style.top = rect.top - 20 + 'px'; // Adjust top position for better alignment

        if (array[i] === searchValue) {
            foundIndex = i;
            currentElement.classList.add('found');
            document.getElementById("result").innerHTML = `Value ${searchValue} found at index ${foundIndex}.`;
            return;  // Stop searching once found
        } else {
            currentElement.classList.remove('highlight');
        }

        i++;
        if (i < array.length) {
            setTimeout(highlightElement, 500); // Delay between steps for animation
        } else {
            // If not found, indicate failure
            document.getElementById("result").innerHTML = `Value ${searchValue} not found in the array.`;
        }
    }

    // Start the animation
    highlightElement();
}