import { test, expect } from 'vitest';
import { transformToUpperCase } from '../exercice1';

test('Test de la fonction transformToUpperCase', () => {    
    const result = transformToUpperCase('hello');
    expect(result).toBe('HELLO');
});
test('Gère les chaînes de caractères vides', () => {
    const result = transformToUpperCase('');
    expect(result).toBe('');
  });
  
  test('Gère les chaînes de caractères avec des chiffres', () => {
    const result = transformToUpperCase('Hello123');
    expect(result).toBe('HELLO123');
  });