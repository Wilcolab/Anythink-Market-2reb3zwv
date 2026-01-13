/**
 * Convert a string to dot.case
 * - Treats spaces, hyphens, underscores, and non-alphanumeric characters as separators
 * - Normalizes casing to lowercase for all tokens
 * - Splits camelCase/PascalCase and common acronyms (XMLHttpRequest -> xml.http.request)
 * - Preserves numeric characters in their positions
 * - Returns an empty string for non-strings or empty input
 *
 * Examples:
 *  toDotCase('Hello World') -> 'hello.world'
 *  toDotCase('helloWorld') -> 'hello.world'
 *  toDotCase('XMLHttpRequest') -> 'xml.http.request'
 *  toDotCase('user_id') -> 'user.id'
 */
const toDotCase = (input) => {
  if (typeof input !== 'string') return '';

  const str = input.trim();
  if (str.length === 0) return '';

  // Split into words using separators if present, otherwise split on camel/Pascal boundaries
  const splitIntoWords = (s) => {
    if (/[^A-Za-z0-9]/.test(s)) {
      // Split on any non-alphanumeric sequence (spaces, punctuation, dashes, underscores, etc.)
      return s.split(/[^A-Za-z0-9]+/).filter(Boolean);
    }
    // No explicit separators: split on camelCase/PascalCase boundaries and acronym boundaries
    // (?<=[a-z0-9])(?=[A-Z]) : between a lowercase/digit and an uppercase (fooBar)
    // (?<=[A-Z])(?=[A-Z][a-z0-9]) : between an acronym and a TitleCase word (XMLHttp)
    return s.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z0-9])/);
  };

  const words = splitIntoWords(str).filter(Boolean);
  if (words.length === 0) return '';

  return words.map((w) => w.toLowerCase()).join('.');
};

export default toDotCase;
