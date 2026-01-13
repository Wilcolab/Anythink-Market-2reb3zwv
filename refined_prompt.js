/**
 * Converts a string into camelCase format.
 *
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase version of the input string
 * @throws {Error} If input is null, undefined, not a string, or empty after trimming
 *
 * @example
 * toCamelCase("hello world") // "helloWorld"
 * toCamelCase("Hello-world_test") // "helloWorldTest"
 * toCamelCase("hello_world test-case") // "helloWorldTestCase"
 */
/**
 * Converts a string to camelCase format.
 *
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to camelCase notation where the first word is lowercase and
 * subsequent words are capitalized.
 *
 * @param {string} input - The input string to convert. Can contain spaces, hyphens,
 *                         or underscores as word separators.
 *
 * @returns {string} The converted camelCase string. The first word is entirely lowercase,
 *                   and each subsequent word has its first character capitalized with
 *                   the remaining characters in lowercase.
 *
 * @throws {Error} Throws an error if:
 *                 - input is null or undefined
 *                 - input is not a string
 *                 - input is an empty string or contains only whitespace/separators
 *
 * @example
 * // Returns: 'helloWorld'
 * toCamelCase('hello-world');
 *
 * @example
 * // Returns: 'helloWorldFromString'
 * toCamelCase('hello_world_from_string');
 *
 * @example
 * // Returns: 'helloWorldTest'
 * toCamelCase('hello world test');
 *
 * @example
 * // Throws Error: Input must be a non-empty string
 * toCamelCase(null);
 *
 * @example
 * // Throws Error: Input must be a non-empty string
 * toCamelCase('   ');
 */
function toCamelCase(input) {
    // Validate input: check for null, undefined, and type
    if (input === null || input === undefined) {
        throw new Error("Input must be a non-empty string");
    }

    // Ensure input is a string
    if (typeof input !== "string") {
        throw new Error("Input must be a non-empty string");
    }

    // Trim whitespace and validate that string is not empty
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        throw new Error("Input must be a non-empty string");
    }

    // Split on multiple separators: spaces, hyphens, and underscores
    // This regex matches one or more of these characters and treats them as delimiters
    const words = trimmedInput
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0); // Remove empty strings from consecutive separators

    // Handle edge case where input contains only separators
    if (words.length === 0) {
        throw new Error("Input must be a non-empty string");
    }

    // Convert first word to lowercase, then capitalize first letter of subsequent words
    return words
        .map((word, index) => {
            if (index === 0) {
                // First word: convert entire word to lowercase
                return word.toLowerCase();
            }
            // Subsequent words: lowercase the word, then capitalize first character
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

// ============================================================================
// EXAMPLES AND TEST CASES
// ============================================================================

console.log("=== Valid Cases ===");

// Example 1: Basic space-separated words
console.log('toCamelCase("hello world")');
console.log("Result:", toCamelCase("hello world"));
console.log("Expected: helloWorld\n");

// Example 2: Mixed separators (hyphens, underscores, spaces)
console.log('toCamelCase("Hello-world_test case")');
console.log("Result:", toCamelCase("Hello-world_test case"));
console.log("Expected: helloWorldTestCase\n");

// Example 3: Already camelCased string (returns unchanged, normalized to lowercase first word)
console.log('toCamelCase("helloWorldTest")');
console.log("Result:", toCamelCase("helloWorldTest"));
console.log("Expected: helloWorldTest\n");

// Example 4: String with numbers
console.log('toCamelCase("hello-world-2024-test")');
console.log("Result:", toCamelCase("hello-world-2024-test"));
console.log("Expected: helloWorld2024Test\n");

// Example 5: Leading/trailing spaces and multiple consecutive separators
console.log('toCamelCase("  hello___world---test  ")');
console.log("Result:", toCamelCase("  hello___world---test  "));
console.log("Expected: helloWorldTest\n");

console.log("=== Invalid Cases (Should Throw) ===");

// Example 6: Number input
try {
    toCamelCase(123);
} catch (error) {
    console.log("toCamelCase(123)");
    console.log("Error thrown:", error.message);
    console.log("Expected: Input must be a non-empty string\n");
}

// Example 7: Null input
try {
    toCamelCase(null);
} catch (error) {
    console.log("toCamelCase(null)");
    console.log("Error thrown:", error.message);
    console.log("Expected: Input must be a non-empty string\n");
}

// Example 8: Undefined input
try {
    toCamelCase(undefined);
} catch (error) {
    console.log("toCamelCase(undefined)");
    console.log("Error thrown:", error.message);
    console.log("Expected: Input must be a non-empty string\n");
}

// Example 9: Empty string
try {
    toCamelCase("");
} catch (error) {
    console.log('toCamelCase("")');
    console.log("Error thrown:", error.message);
    console.log("Expected: Input must be a non-empty string\n");
}

// Example 10: Only whitespace
try {
    toCamelCase("   ");
} catch (error) {
    console.log('toCamelCase("   ")');
    console.log("Error thrown:", error.message);
    console.log("Expected: Input must be a non-empty string\n");
}