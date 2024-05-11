import { test, expect } from 'vitest';
import { sortArray } from '../exercice2';

test('Trie un tableau de nombres dans l\'ordre croissant', () => {
  const input = [3, 1, 5, 2, 4];
  const result = sortArray(input);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Trie un tableau de nombres déjà trié', () => {
  const input = [1, 2, 3, 4, 5];
  const result = sortArray(input);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Trie un tableau de nombres dans l\'ordre décroissant', () => {
  const input = [5, 4, 3, 2, 1];
  const result = sortArray(input);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Gère les tableaux avec des éléments non numériques', () => {
  const input = [1, 'a', 3, 2];
  expect(() => sortArray(input)).toThrow('Le tableau contient des éléments non numériques.');
});

test('Gère les tableaux vides', () => {
  const input = [];
  const result = sortArray(input);
  expect(result).toEqual([]);
});
