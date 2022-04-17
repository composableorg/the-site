import { classNames } from "./classNames";

test('handles single string', () => {
    expect(classNames('foo')).toBe('foo');
});

test('handles multi string', () => {
    expect(classNames('foo','bar')).toBe('foo bar');
});

test('handles multiple parameters with invalid', () => {
    expect(classNames('foo', null, 'bar', false)).toBe('foo bar');
});

test('handles no string', () => {
    expect(classNames()).toBe('');
});

test('handles null and false values', () => {
    expect(classNames(null)).toBe('');
    expect(classNames(false)).toBe('');
    expect(classNames(null, false)).toBe('');
});
