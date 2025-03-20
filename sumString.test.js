const sumString = require("./sumString");

describe("sumString", () => {
  test("Retourne 0 pour une chaîne vide", () => {
    expect(sumString("")).toBe(0);
  });

  test("Retourne la somme de deux nombres", () => {
    expect(sumString("2,3")).toBe(5);
  });

  test("Retourne la somme de deux nombres décimaux", () => {
    expect(sumString("0.1,0.2")).toBe(0.3);
  });

  test("Retourne le nombre si un nombre en paramètre", () => {
    expect(sumString("1")).toBe(1);
  });

  test("Retourne un erreur si un nombre invalide", () => {
    expect(sumString("abc")).toThrowError("Invalid input");
  });

  test("Retourne la somme de plusieurs nombres", () => {
    expect(sumString("1,2,2")).toBe(5);
  });
});
