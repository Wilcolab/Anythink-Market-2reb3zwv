import toCamelCase from '../../utils/toCamelCase';

describe('toCamelCase (production-ready)', () => {
  test('basic examples', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
    expect(toCamelCase('Hello-world_test')).toBe('helloWorldTest');
    expect(toCamelCase('first name')).toBe('firstName');
    expect(toCamelCase('user_id')).toBe('userId');
    expect(toCamelCase('mobile-number')).toBe('mobileNumber');
  });

  test('example from earlier prompt', () => {
    expect(toCamelCase('convert_this-string NOW 123')).toBe('convertThisStringNow123');
  });

  test('handles mixed separators and multiple consecutive separators', () => {
    expect(toCamelCase('  hello---world__test  ')).toBe('helloWorldTest');
  });

  test('preserves numbers and handles numeric tokens', () => {
    expect(toCamelCase('version 2 update')).toBe('version2Update');
    expect(toCamelCase('foo 123bar')).toBe('foo123bar');
    expect(toCamelCase('123 start')).toBe('123Start');
  });

  test('preserves camelCase if already valid', () => {
    expect(toCamelCase('firstName')).toBe('firstName');
    expect(toCamelCase('a')).toBe('a');
  });

  test('handles PascalCase and acronyms', () => {
    expect(toCamelCase('ScreenName')).toBe('screenName');
    expect(toCamelCase('XMLHttpRequest')).toBe('xmlHttpRequest');
  });

  test('throws on invalid inputs (null/undefined/non-string/empty-after-trim)', () => {
    expect(() => toCamelCase(null)).toThrow('Input must be a non-empty string');
    expect(() => toCamelCase(undefined)).toThrow('Input must be a non-empty string');
    expect(() => toCamelCase(123)).toThrow('Input must be a non-empty string');
    expect(() => toCamelCase('   ')).toThrow('Input must be a non-empty string');
  });

  test('throws when there are no alphanumeric characters', () => {
    expect(() => toCamelCase('@@@---')).toThrow('Input must contain at least one alphanumeric character');
  });
});
