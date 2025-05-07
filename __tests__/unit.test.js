// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//phone number
test('tests if 123 is a valid number', () => {
   expect(isPhoneNumber('123')).toBe(false);
});
test('test if 123-456-7890 is a valid number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('test if phone-num is valid', () => {
    expect(isPhoneNumber('phone-num')).toBe(false);
});
test('test if (123) 456-7890 is valid number', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

//emails
test('tests if hi@gmail.com is valid', () => {
    expect(isEmail('hi@gmail.com')).toBe(true);
});
test('tests if hi@some_website.com is valid', () => {
    expect(isEmail('hi@some_website.com')).toBe(true);
});
test('tests if higmail.com is valid', () => {
    expect(isEmail('higmail.com')).toBe(false);
});
test('tests if hi@gmail123.com is valid', () => {
    expect(isEmail('higmail123.com')).toBe(false);
});

//password
test('tests if abc is strong', () => {
    expect(isStrongPassword('abc')).toBe(false);
});
test('tests if 1abcdefg is strong', () => {
    expect(isStrongPassword('1abcdefg')).toBe(false);
});
test('tests if abc_d123 is strong', () => {
    expect(isStrongPassword('abc_d123')).toBe(true);
});
test('tests if StrongPassword1 is strong', () => {
    expect(isStrongPassword('StrongPassword1')).toBe(true);
});

//date
test('tests if 5/6/2025 is a date', () => {
    expect(isDate('5/6/2025')).toBe(true);
});
test('tests if 05/06/2025 is a date', () => {
    expect(isDate('05/06/2025')).toBe(true);
});
test('tests if 5/6/25 is a date', () => {
    expect(isDate('5/6/25')).toBe(false);
});
test('tests if 05/06/20250 is a date', () => {
    expect(isDate('05/06/20250')).toBe(false);
});

//hexcolor
test('tests if FFFFFF is a hexcolor', () => {
    expect(isHexColor('FFFFFF')).toBe(true);
});
test('tests if f0c is a hexcolor', () => {
    expect(isHexColor('f0c')).toBe(true);
});
test('tests if ff is a hexcolor', () => {
    expect(isHexColor('ff')).toBe(false);
});
test('tests if FFFFFFFF is a hexcolor', () => {
    expect(isHexColor('FFFFFFFF')).toBe(false);
});