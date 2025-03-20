function sumString(input) {
  if (input === "") return 0; // on traite le cas du 0 sans input

  // Séparer par des virgules et des sauts de ligne, puis filtrer les éléments vides
  const numbers = input
    .split(/,|\n/)
    .map((num) => num.trim())
    .filter(Boolean);

  const sum = numbers.reduce((acc, num) => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
      // Passage par regex possible si volonté
      throw new Error("Invalid input"); // Dans le cas d'une erreur lors de la saisie
    }
    return acc + parsed;
  }, 0);

  // Calculer la somme et arrondir à 2 décimales
  return sum.toFixed(2);
}

module.exports = sumString;
