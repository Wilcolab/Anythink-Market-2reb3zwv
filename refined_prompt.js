/**
 * Converts a string to camelCase format.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCased string
 * @throws {TypeError} If input is not a non-empty string
 */
function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a non-empty string');
    }

    // Trim whitespace and validate non-empty
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        throw new TypeError('Input must be a non-empty string');
    }

    // Replace multiple consecutive spaces/underscores/hyphens with single space
    // This handles mixed separators and normalizes them to spaces for processing
    const normalized = trimmed.replace(/[\s_-]+/g, ' ');

    // Split by spaces to get individual words
    const words = normalized.split(' ');

    // Convert each word: lowercase first word, capitalize first letter of others
    const camelCased = words
        .map((word, index) => {
            // Skip empty words that might result from edge cases
            /**
             * Converts a string to dot case format.
             * 
             * Transforms input by normalizing whitespace and delimiters (spaces, underscores, hyphens)
             * into single spaces, then converts each word to lowercase and joins them with dots.
             * 
             * @function toDotCase
             * @param {string} input - The string to convert to dot case. Must be a non-empty string.
             * @returns {string} The converted string in dot case format (e.g., "hello.world").
             * @throws {TypeError} If input is not a string or is empty/whitespace-only.
             * 
             * @example
             * // Returns 'hello.world'
             * toDotCase('hello world');
             * 
             * @example
             * // Returns 'foo.bar.baz'
             * toDotCase('foo_bar-baz');
             * 
             * @example
             * // Returns 'multiple.spaces.handled'
             * toDotCase('multiple   spaces___handled');
             * 
             * @example
             * // Throws TypeError
             * toDotCase('');
             * 
             * @example
             * // Throws TypeError
             * toDotCase(123);
             */
            function toDotCase(input) {
                // Validate input type
                if (typeof input !== 'string') {
                    throw new TypeError('Input must be a non-empty string');
                }

                // Trim whitespace and validate non-empty
                const trimmed = input.trim();
                if (trimmed.length === 0) {
                    throw new TypeError('Input must be a non-empty string');
                }

                // Replace multiple consecutive spaces/underscores/hyphens with single space
                const normalized = trimmed.replace(/[\s_-]+/g, ' ');

                // Split by spaces to get individual words
                const words = normalized.split(' ');

                // Convert each word to lowercase and join with dots
                const dotCased = words
                    .map(word => word.toLowerCase())
                    .filter(word => word.length > 0) // Remove any empty strings
                    .join('.');

                return dotCased;
            }
            if (!word) return '';

            // Convert word to lowercase first
            const lowercased = word.toLowerCase();

            // For first word, return as-is (lowercase)
            // For subsequent words, capitalize first letter and keep rest as-is
            if (index === 0) {
                return lowercased;
            }

            // Capitalize first character, preserve the rest of the word
            return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
        })
        .filter(word => word.length > 0) // Remove any empty strings
        .join('');

    return camelCased;
}

// Test cases demonstrating functionality and error handling

console.log('Test 1 - Basic case:');
console.log(toCamelCase('hello world')); // → "helloWorld"

console.log('\nTest 2 - Leading/trailing whitespace with mixed separators:');
console.log(toCamelCase(' user_name-example ')); // → "userNameExample"

console.log('\nTest 3 - Multiple consecutive spaces:');
console.log(toCamelCase('hello    world   test')); // → "helloWorldTest"

console.log('\nTest 4 - Mixed capitalization:');
console.log(toCamelCase('HeLLo WoRLD')); // → "helloWorld"

console.log('\nTest 5 - String with numbers:');
console.log(toCamelCase('user_name_2_example')); // → "userName2Example"

console.log('\nTest 6 - Already camelCased:');
console.log(toCamelCase('helloWorld')); // → "helloworld"

console.log('\nTest 7 - Error: null input:');
try {
    toCamelCase(null);
} catch (e) {
    console.log(`Error caught: ${e.message}`);
}

console.log('\nTest 8 - Error: undefined input:');
try {
    toCamelCase(undefined);
} catch (e) {
    console.log(`Error caught: ${e.message}`);
}

console.log('\nTest 9 - Error: number input:');
try {
    toCamelCase(42);
} catch (e) {
    console.log(`Error caught: ${e.message}`);
}

console.log('\nTest 10 - Error: empty string after trim:');
try {
    toCamelCase('   ');
} catch (e) {
    console.log(`Error caught: ${e.message}`);
}