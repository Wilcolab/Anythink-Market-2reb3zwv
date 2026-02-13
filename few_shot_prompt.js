function toCamelCase(str) {
    return str
        .split(/[-_\s]+/) // Split on hyphens, underscores, or spaces
        .map((word, index) => {
            // First word stays lowercase, rest are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber