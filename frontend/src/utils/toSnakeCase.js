/**
 * Convert a string to snake_case.
 * Examples:
 *  toSnakeCase('HelloWorld') -> 'hello_world'
 *  toSnakeCase('hello world') -> 'hello_world'
 */
const toSnakeCase = (input) => {
  if (typeof input !== 'string') return '';

  return input
    .trim()
    // handle camelCase boundaries: "fooBar" -> "foo_Bar"
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    // handle acronym + word boundaries: "XMLHttp" -> "XML_Http"
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1_$2')
    // replace non-alphanumeric characters with underscores
    .replace(/[^a-zA-Z0-9]+/g, '_')
    // remove leading/trailing underscores
    .replace(/^_+|_+$/g, '')
    // collapse multiple underscores
    .replace(/_+/g, '_')
    .toLowerCase();
};

export default toSnakeCase;
