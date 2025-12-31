function formatDate(dateString) {
    // 1. Maak van de tekst/string een echt Date object
    const dateObj = new Date(dateString);

    // 2. Definieer de instellingen (let op: het is 'day', niet 'date')
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    // 3. Geef de geformatteerde tekst terug (return!)
    return dateObj.toLocaleDateString('nl-NL', options);
}

export default formatDate;