function filterOptions() {
    const input = document.getElementById('textInput');
    const optionsList = document.getElementById('optionsList');
    const inputValue = input.value.toLowerCase();

    // Clear previous options
    optionsList.innerHTML = '';

    // Filter and add matching options
    const options = ['An', 'Am', 'Anh'];
    options.forEach(option => {
        if (option.toLowerCase().startsWith(inputValue)) {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionsList.appendChild(optionElement);
        }
    });
}