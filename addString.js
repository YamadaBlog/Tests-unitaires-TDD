function addString(input) {
  if (input === "") return "0"; // empty string

  // Nombre manquant à la fin
  if (input.endsWith(",")) {
    return "Numéro attendu mais EOF trouvé.";
  }

  // Séparer par des virgules et des sauts de ligne, puis filtrer les éléments vides
  const numbers = input
    .split(/,|\n/)
    .map((num) => num.trim())
    .filter(Boolean);

  const sum = numbers.reduce((acc, num) => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
      // Passage par regex possible si volonté
      throw new Error("Invalid input");
    }
    return acc + parsed;
  }, 0);

  // Retourner la somme arrondie à 2 décimales
  return (Math.round(sum * 100) / 100).toString();
}

module.exports = addString;
