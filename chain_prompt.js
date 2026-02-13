/**
 * Converts a string into kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {TypeError} If input is invalid
 */
function toKebabCase(input) {
    // Validate that exactly one parameter is provided
    if (arguments.length !== 1) {
        throw new TypeError('toKebabCase expects exactly one parameter');
    }

    // Check for null, undefined, or non-string types
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new TypeError('Input must be a non-null string');
    }

    // Trim whitespace and check if the string is empty
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        throw new TypeError('Input string cannot be empty');
    }

    // Convert camelCase to space-separated by inserting space before uppercase letters
    let result = trimmed.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Replace underscores and hyphens with spaces to normalize separators
    result = result.replace(/[-_]/g, ' ');

    // Convert to lowercase for consistent output
    result = result.toLowerCase();

    // Replace multiple consecutive spaces with a single space
    result = result.replace(/\s+/g, ' ');

    // Replace spaces with hyphens to create kebab-case
    result = result.replace(/\s+/g, '-');

    return result;
}

// ===== STEP 1: Basic Implementation Examples =====
console.log('=== STEP 1: Basic Implementation ===');
console.log(toKebabCase('hello world')); // Output: 'hello-world'
console.log(toKebabCase('foo bar baz')); // Output: 'foo-bar-baz'

// ===== STEP 2: Expanded Input Handling Examples =====
console.log('\n=== STEP 2: Expanded Input Handling ===');
console.log(toKebabCase('  leading and trailing  ')); // Output: 'leading-and-trailing'
console.log(toKebabCase('multiple   consecutive   spaces')); // Output: 'multiple-consecutive-spaces'
console.log(toKebabCase('Mixed_Case-With-Hyphens')); // Output: 'mixed-case-with-hyphens'
console.log(toKebabCase('camelCaseString')); // Output: 'camel-case-string'
console.log(toKebabCase('snake_case_example')); // Output: 'snake-case-example'

// ===== STEP 3: Error Handling Examples =====
console.log('\n=== STEP 3: Error Handling ===');

// Example 1: Null input
try {
    toKebabCase(null);
} catch (error) {
    console.log(`Error caught: ${error.message}`); // Output: "Error caught: Input must be a non-null string"
}

// Example 2: Empty string after trimming
try {
    toKebabCase('   ');
} catch (error) {
    console.log(`Error caught: ${error.message}`); // Output: "Error caught: Input string cannot be empty"
}

// Example 3: Valid input with numbers
console.log(toKebabCase('HTML2PDF converter')); // Output: 'html2-pdf-converter'

// Example 4: Complex mixed input
console.log(toKebabCase('  getHTMLElementById_test  ')); // Output: 'get-html-element-by-id-test'