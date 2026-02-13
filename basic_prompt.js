function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }

    // Trim whitespace and validate non-empty
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        throw new Error('Input must be a non-empty string');
    }

    // Split on word separators (spaces, hyphens, underscores)
    // This regex matches one or more occurrences of space, hyphen, or underscore
    const words = trimmed.split(/[\s\-_]+/);

    // Convert each word: first word lowercase, rest with first letter uppercase
    return words
        .map((word, index) => {
            // Skip empty strings that may result from consecutive separators
            if (word.length === 0) return '';
            
            // First word: lowercase first letter, keep rest as-is
            if (index === 0) {
                return word[0].toLowerCase() + word.slice(1).toLowerCase();
            }
            
            // Subsequent words: uppercase first letter, lowercase the rest
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // Remove all separators by joining without delimiter
}