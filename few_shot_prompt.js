function toCamelCase(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }

    // Split by spaces, hyphens, underscores, and other non-alphanumeric characters
    const words = str.split(/[\s\-_\W]+/).filter(word => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    // First word: all lowercase
    let result = words[0].toLowerCase();

    // Subsequent words: capitalize first letter, rest lowercase
    for (let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return result;
}

module.exports = toCamelCase;