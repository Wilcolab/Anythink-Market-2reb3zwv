// filepath: /workspaces/Anythink-Market-2reb3zwv/chain_prompt.js

/**
 * Step 1 – Core Logic
 * Converts a basic space-separated string into kebab-case
 */
function toKebabCase(input) {
    // Step 3 – Validation: Check for null, undefined, or non-string inputs
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Check if string is empty after trimming
    if (trimmed.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Step 2 – Edge Case Expansion
    // Replace mixed separators (spaces, underscores, hyphens) and camelCase with spaces
    let result = trimmed
        // Handle camelCase by inserting space before uppercase letters
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        // Replace underscores with spaces
        .replace(/_/g, " ")
        // Replace hyphens with spaces
        .replace(/-/g, " ")
        // Convert to lowercase
        .toLowerCase()
        // Replace multiple consecutive spaces with a single space
        .replace(/\s+/g, " ")
        // Replace spaces with hyphens
        .replace(/\s/g, "-");

    // Step 3 – Robustness: Prevent leading/trailing hyphens
    result = result.replace(/^-+|-+$/g, "");

    // Prevent double hyphens (safety check for complex inputs)
    result = result.replace(/-+/g, "-");

    return result;
}

// Step 1 – Simple Examples
console.log("=== Step 1: Core Logic Examples ===");
console.log('toKebabCase("hello world"):', toKebabCase("hello world"));
console.log('toKebabCase("foo bar baz"):', toKebabCase("foo bar baz"));

// Step 2 – Edge Case Examples
console.log("\n=== Step 2: Edge Case Examples ===");
console.log('toKebabCase("  leading and trailing  "):', toKebabCase("  leading and trailing  "));
console.log('toKebabCase("multiple   spaces"):', toKebabCase("multiple   spaces"));
console.log('toKebabCase("mixed_separator-with-hyphen"):', toKebabCase("mixed_separator-with-hyphen"));
console.log('toKebabCase("camelCaseExample"):', toKebabCase("camelCaseExample"));
console.log('toKebabCase("with123numbers"):', toKebabCase("with123numbers"));

// Step 3 – Validation and Test Cases
console.log("\n=== Step 3: Validation and Test Cases ===");

const testCases = [
    // Success cases
    { input: "hello world", expected: "hello-world", description: "Basic space-separated" },
    { input: "   spaced   out   ", expected: "spaced-out", description: "Multiple spaces and whitespace" },
    { input: "snake_case_input", expected: "snake-case-input", description: "Snake case conversion" },
    { input: "camelCaseExample", expected: "camel-case-example", description: "Camel case conversion" },
    { input: "mixed-with_spaces and CAPS", expected: "mixed-with-spaces-and-caps", description: "Mixed separators and case" },
];

// Failure cases
const failureCases = [
    { input: null, description: "Null input" },
    { input: undefined, description: "Undefined input" },
    { input: 123, description: "Number input" },
    { input: "", description: "Empty string" },
    { input: "   ", description: "Whitespace only" },
];

console.log("\n✓ Success Cases:");
testCases.forEach(({ input, expected, description }) => {
    try {
        const result = toKebabCase(input);
        const passed = result === expected;
        console.log(
            `${passed ? "✓" : "✗"} ${description}: "${input}" => "${result}" (expected: "${expected}")`
        );
    } catch (error) {
        console.log(`✗ ${description}: ${error.message}`);
    }
});

console.log("\n✓ Failure Cases (Expected Errors):");
failureCases.forEach(({ input, description }) => {
    try {
        toKebabCase(input);
        console.log(`✗ ${description}: Should have thrown an error`);
    } catch (error) {
        console.log(`✓ ${description}: "${error.message}"`);
    }
});

module.exports = { toKebabCase };