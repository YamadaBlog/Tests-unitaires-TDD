const addString = require("./addString");

describe("addString", () => {
  test("Retourne 0 pour une chaîne vide", () => {
    expect(addString("")).toBe("0");
  });

  test("Retourne la somme de deux nombres", () => {
    expect(addString("2,3")).toBe("5");
  });

  test("Retourne la somme de deux nombres décimaux", () => {
    expect(addString("0.1,0.2")).toBe("0.3");
  });

  test("Retourne le nombre si un nombre en paramètre", () => {
    expect(addString("1")).toBe("1");
  });

  test("Retourne un erreur si un nombre invalide", () => {
    expect(addString("abc")).toThrowError("Invalid input");
  });

  test("Retourne la somme de plusieurs nombres", () => {
    expect(addString("1,2,2")).toBe("5");
  });

  test("Retourne la somme sur un /n", () => {
    expect(addString("1\n1,2")).toBe("4");
  });

  test("Retourne la somme sur un /n avec un numéro manquant", () => {
    expect(addString("1,\n3")).toBe("4");
  });

  test("Nombre manquant en dernière position", () => {
    expect(addString("1,3,")).toBe("Numéro attendu mais EOF trouvé.");
  });
});
