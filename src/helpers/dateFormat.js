function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return dateObj.toLocaleDateString('nl-NL', options);
}

export default formatDate;