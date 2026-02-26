(function() {
    const outputElement = document.getElementById('output');
    let currentString = '';

    function isLetter(char) {
        return /^[a-zA-Zа-яА-Я]$/.test(char);
    }

    document.addEventListener('keydown', function(event) {
        if (event.key.length > 1) return;

        if (event.key === 'Escape') {
            currentString = '';
            outputElement.textContent = '';
            return;
        }

        if (isLetter(event.key)) {
            currentString += event.key.toUpperCase();
            outputElement.textContent = currentString;
        }
    });
})();