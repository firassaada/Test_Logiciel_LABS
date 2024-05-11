import { isPriceInRange } from '../exercice3'; 
import { test, expect } from 'vitest';
// Cas de test pour une plage valide
test('Le prix 50 est dans la plage de 20 à 100', () => {
  expect(isPriceInRange(50, 20, 100)).toBe(true);
});

test('Le prix 20 est dans la plage de 20 à 100 (limite inférieure)', () => {
  expect(isPriceInRange(20, 20, 100)).toBe(true);
});

test('Le prix 100 est dans la plage de 20 à 100 (limite supérieure)', () => {
  expect(isPriceInRange(100, 20, 100)).toBe(true);
});

// Cas de test pour une plage invalide
test('Le prix 150 est en dehors de la plage de 20 à 100', () => {
  expect(isPriceInRange(150, 20, 100)).toBe(false);
});

test('Le prix 15 est en dehors de la plage de 20 à 100', () => {
  expect(isPriceInRange(15, 20, 100)).toBe(false);
});

// Cas de test pour des plages particulières
test('Le prix 0 est en dehors de la plage de -10 à 10 (plage négative)', () => {
  expect(isPriceInRange(0, -10, 10)).toBe(true);
});

test('Le prix 5 est dans la plage de -10 à 10 (plage négative)', () => {
  expect(isPriceInRange(5, -10, 10)).toBe(true);
});

test('Le prix 15 est en dehors de la plage de -10 à 10 (plage négative)', () => {
  expect(isPriceInRange(15, -10, 10)).toBe(false);
});
