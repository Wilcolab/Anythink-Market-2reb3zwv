/**
 * String case conversion utilities module.
 * Provides functions to convert strings between different naming conventions.
 * 
 * @module stringCaseConversions
 * @description This module contains utility functions for converting strings
 * between camelCase and dot.case formats. All functions validate input and
 * handle multiple separator types (spaces, hyphens, underscores).
 */

/**
 * Converts a string to camelCase format.
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase. Can contain
 * spaces, hyphens, or underscores as word separators. Whitespace is trimmed.
 * @returns {string} The camelCase version of the input where the first word
 * is lowercase and subsequent words have their first letter capitalized.
 * @throws {TypeError} Thrown if input is not a string or is an empty/whitespace-only string
 * 
 * @example
 * toCamelCase('hello-world_test');
 * // Returns: "helloWorldTest"
 * 
 * @example
 * toCamelCase('HELLO_WORLD_TEST');
 * // Returns: "helloWorldTest"
 */

/**
 * Converts a string to dot.case format.
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case. Can contain
 * spaces, hyphens, or underscores as word separators. Whitespace is trimmed.
 * @returns {string} The dot.case version of the input where all words are
 * converted to lowercase and joined with dots as separators.
 * @throws {TypeError} Thrown if input is not a string or is an empty/whitespace-only string
 * 
 * @example
 * toDotCase('hello-world_test');
 * // Returns: "hello.world.test"
 * 
 * @example
 * toDotCase('HELLO_WORLD_TEST');
 * // Returns: "hello.world.test"
 */
