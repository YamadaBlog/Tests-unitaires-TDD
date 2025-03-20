function sumString(input) {
  if (input === "") return 0; // on traite le cas du 0 sans input

  const numbers = input.split(",").map((num) => {
    const parsed = parseFloat(num); // Convert number to float
    if (isNaN(parsed)) {
      throw new Error("Invalid input"); // Dans le cas d'une erreur lors de la saisie
    }
    return parsed;
  });

  // Calculer la somme et arrondir à 2 décimales
  const result = numbers.reduce((acc, current) => acc + current, 0);
  return parseFloat(result.toFixed(2)); // Arrondir à 2 décimales
}

module.exports = sumString;
