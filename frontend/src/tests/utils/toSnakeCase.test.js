import toSnakeCase from '../../utils/toSnakeCase';

describe('toSnakeCase', () => {
  test('converts spaces to underscores and lowercases', () => {
    expect(toSnakeCase('Hello World')).toBe('hello_world');
  });

  test('handles camelCase', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  test('handles kebab-case and other separators', () => {
    expect(toSnakeCase('Hello-World')).toBe('hello_world');
    expect(toSnakeCase('multiple---separators')).toBe('multiple_separators');
  });

  test('trims and collapses spaces', () => {
    expect(toSnakeCase('  multiple   spaces  ')).toBe('multiple_spaces');
  });

  test('preserves existing snake_case', () => {
    expect(toSnakeCase('snake_case')).toBe('snake_case');
  });

  test('handles acronyms and mixed caps', () => {
    expect(toSnakeCase('XMLHttpRequest')).toBe('xml_http_request');
    expect(toSnakeCase('userID')).toBe('user_id');
  });

  test('preserves numbers', () => {
    expect(toSnakeCase('123Number Test')).toBe('123number_test');
  });

  test('returns empty string for non-string input', () => {
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
    expect(toSnakeCase(42)).toBe('');
  });
});
