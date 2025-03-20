try {
  console.assert(
    sumString("2,3") === 5,
    '❌ sumString("2,3") doit retourner 5'
  );
  console.assert(
    sumString("0.1,0.2") === 0.3,
    '❌ sumString("0.1,0.2") doit retourner 0.3'
  );
  console.assert(sumString("1") === 1, '❌ sumString("1") doit retourner 1');

  console.log("Tous les tests passent sont OK !");
} catch (error) {
  console.error(error.message);
}
