//function to sort an array of numbers in ascending order
export function sortArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('La fonction attend un tableau en entrée.');
      }
    
      if (!array.every((el) => typeof el === 'number')) {
        throw new Error('Le tableau contient des éléments non numériques.');
      }
    return array.sort((a, b) => a - b);
}