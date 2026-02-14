/**
 * Converts a string to kebab-case format
 * @param {string} str - The input string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {TypeError} If input is invalid
 */
function toKebabCase(str) {
    // Step 3: Validate input - must be exactly one parameter
    if (arguments.length !== 1) {
        throw new TypeError('toKebabCase expects exactly 1 argument');
    }

    // Check for null or undefined
    if (str == null) {
        throw new TypeError('Input cannot be null or undefined');
    }

    // Check for non-string type
    if (typeof str !== 'string') {
        throw new TypeError(`Expected string, received ${typeof str}`);
    }

    // Trim whitespace and check if empty
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new TypeError('Input cannot be empty or whitespace-only');
    }

    // Step 2: Handle mixed separators and cases
    // Replace camelCase with separator + lowercase letter
    let result = trimmed.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Replace underscores, spaces, and existing hyphens with a common separator
    result = result.replace(/[\s_-]+/g, '-');

    // Convert to lowercase
    result = result.toLowerCase();

    // Remove any leading or trailing hyphens that may have been created
    result = result.replace(/^-+|-+$/g, '');

    // Prevent double hyphens (though regex above should handle this)
    result = result.replace(/-+/g, '-');

    return result;
}

// Test cases
try {
    // Test case 1: Basic space-separated string
    console.log(toKebabCase('hello world test')); // Output: 'hello-world-test'

    // Test case 2: Mixed separators, camelCase, and uppercase
    console.log(toKebabCase('  HelloWorld_foo bar-baz  ')); // Output: 'hello-world-foo-bar-baz'

    // Test case 3: Numeric characters preserved
    console.log(toKebabCase('User123_Name Value456')); // Output: 'user123-name-value456'

    // Test case 4: Invalid input (empty string)
    console.log(toKebabCase(''));
} catch (error) {
    console.error(`Error: ${error.message}`); // Output: Error: Input cannot be empty or whitespace-only
}