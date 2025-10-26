import Validator from '../regular'

describe('Validator', () => {
  test('валидное имя — только буквы', () => {
    expect(Validator.validateUsername('Player')).toBe(true);
  });

  test('валидное имя — с цифрами и символами', () => {
    expect(Validator.validateUsername('user_12-hero')).toBe(true);
  });

  test('невалидно — содержит недопустимые символы', () => {
    expect(Validator.validateUsername('user!name')).toBe(false);
    expect(Validator.validateUsername('имя')).toBe(false);
    expect(Validator.validateUsername('hello@world')).toBe(false);
  });

  test('невалидно — начинается цифрой', () => {
    expect(Validator.validateUsername('1username')).toBe(false);
  });

  test('невалидно — заканчивается цифрой', () => {
    expect(Validator.validateUsername('username1')).toBe(false);
  });

  test('невалидно — начинается с тире или подчёркивания', () => {
    expect(Validator.validateUsername('-hero')).toBe(false);
    expect(Validator.validateUsername('_hero')).toBe(false);
  });

  test('невалидно — заканчивается тире или подчёркиванием', () => {
    expect(Validator.validateUsername('hero-')).toBe(false);
    expect(Validator.validateUsername('hero_')).toBe(false);
  });

  test('невалидно — более трёх цифр подряд', () => {
    expect(Validator.validateUsername('user1234')).toBe(false);
    expect(Validator.validateUsername('hero_9999_man')).toBe(false);
  });

  test('валидно — до трёх цифр подряд (не в конце)', () => {
    expect(Validator.validateUsername('hero999_man')).toBe(true);
  });
});
