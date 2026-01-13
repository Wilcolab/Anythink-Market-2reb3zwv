/**
 * Convert a string to camelCase (production-ready):
 * - Accepts a single string parameter and throws on invalid input
 * - Treats spaces, hyphens, underscores and other non-alphanumerics as separators
 * - Normalizes casing: first word is lowercase, subsequent words are capitalized
 * - Preserves numbers in their original positions
 * - Handles already camelCased strings (returns them unchanged)
 * - Splits PascalCase/camelCase tokens (including acronyms like XMLHttpRequest)
 *
 * @param {string} input
 * @returns {string}
 * @throws {Error} if input is null/undefined/not a string/empty after trimming
 * @throws {Error} if input contains no alphanumeric characters
 *
 * Examples:
 *  toCamelCase('hello world') -> 'helloWorld'
 *  toCamelCase('Hello-world_test') -> 'helloWorldTest'
 *  toCamelCase('convert_this-string NOW 123') -> 'convertThisStringNow123'
 *  toCamelCase('XMLHttpRequest') -> 'xmlHttpRequest'
 *  toCamelCase('firstName') -> 'firstName' (unchanged)
 */
const toCamelCase = (input) => {
  // Validate input
  if (input === null || input === undefined) {
    throw new Error('Input must be a non-empty string');
  }
  if (typeof input !== 'string') {
    throw new Error('Input must be a non-empty string');
  }

  const str = input.trim();
  if (str.length === 0) {
    throw new Error('Input must be a non-empty string');
  }

  // If the string is already a valid camelCase token (lowercase first char, no separators)
  // return it unchanged to avoid unnecessary transformations.
  if (/^[a-z][a-zA-Z0-9]*$/.test(str)) {
    return str;
  }

  // Helper: split into tokens. Prefer splitting on explicit separators when present.
  // If there are no separators, split at camelCase/PascalCase boundaries while
  // preserving common acronym boundaries like 'XMLHttpRequest'.
  const splitIntoWords = (s) => {
    // If there are separators, split on any non-alphanumeric sequence
    if (/[^A-Za-z0-9]/.test(s)) {
      return s.split(/[^A-Za-z0-9]+/).filter(Boolean);
    }
    // Otherwise split on camel/Pascal boundaries and between acronyms and words.
    // Explanation of regex:
    // - (?<=[a-z0-9])(?=[A-Z]) : boundary between a lowercase/digit and an uppercase (fooBar)
    // - (?<=[A-Z])(?=[A-Z][a-z0-9]) : boundary inside uppercase sequences before a TitleCase word (XMLHttp)
    return s.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z0-9])/);
  };

  const words = splitIntoWords(str).filter(Boolean);

  if (words.length === 0) {
    throw new Error('Input must contain at least one alphanumeric character');
  }

  // Build the camelCase result:
  // - First word -> entirely lowercase
  // - Following words -> capitalize first letter, lowercase the rest
  const first = words[0].toLowerCase();
  const rest = words
    .slice(1)
    .map((w) => {
      const lower = w.toLowerCase();
      // If token begins with a digit, we can't capitalize a digit. Keep token as-is (lowercased).
      if (/^[0-9]/.test(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');

  return first + rest;
};

export default toCamelCase;
