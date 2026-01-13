import toDotCase from '../../utils/toDotCase';

describe('toDotCase', () => {
  test('basic separators and lowercasing', () => {
    expect(toDotCase('Hello World')).toBe('hello.world');
    expect(toDotCase('user_id')).toBe('user.id');
    expect(toDotCase('mobile-number')).toBe('mobile.number');
  });

  test('handles camelCase and PascalCase', () => {
    expect(toDotCase('helloWorld')).toBe('hello.world');
    expect(toDotCase('ScreenName')).toBe('screen.name');
  });

  test('handles acronyms and mixed caps', () => {
    expect(toDotCase('XMLHttpRequest')).toBe('xml.http.request');
    expect(toDotCase('userIDNumber')).toBe('user.id.number');
  });

  test('collapses multiple separators and trims', () => {
    expect(toDotCase('  multiple---separators  ')).toBe('multiple.separators');
    expect(toDotCase('a..b__c--d')).toBe('a.b.c.d');
  });

  test('preserves numbers', () => {
    expect(toDotCase('version 2 update')).toBe('version.2.update');
    expect(toDotCase('one123Two')).toBe('one123.two');
  });

  test('returns empty string for non-strings or empty input', () => {
    expect(toDotCase(null)).toBe('');
    expect(toDotCase(undefined)).toBe('');
    expect(toDotCase(42)).toBe('');
    expect(toDotCase('    ')).toBe('');
  });

  test('returns empty string when there are no alphanumeric characters', () => {
    expect(toDotCase('@@@---')).toBe('');
  });
});
