import {filter, alphabeticalOrder, searchByName, calculatePercentage} from "../src/data.js";

const rick = {
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
};

const chris = {
  name: "Chris",
  status: "Dead",
  species: "Alien",
  gender: "unknown",
};

const fleeb = {
  name: "Fleeb",
  status: "unknown",
  species: "Alien",
  gender: "unknown",
};

const jackie = {
  "name": "Jackie",
  "status": "Alive",
  "species": "Alien",
  "gender": "Female",
}

const beebo = {
  "name": "Beebo",
  "status": "Dead",
  "species": "Alien",
  "gender": "Male", 
 
}

const arrayTest = [rick, chris, fleeb, jackie, beebo ]

describe ('ordenar lista personagens', () => {
  it('is a function', () => {
    expect(typeof alphabeticalOrder).toBe('function');//toBe(valor) testa se o valor passado é idêntico ao esperado em valor e tipo
  })

  it('ordenar de a-z', () =>{
    const valueAz = "a-z"

    expect(alphabeticalOrder(valueAz, arrayTest)).toEqual([arrayTest[4], arrayTest[1], arrayTest[2], arrayTest[3], arrayTest[0]])
  })
  //A função . toEqual(valor) testa recursivamente cada valor do objeto ou array.

  it('ordenar de z-a', () =>{
    const valueZa = "z-a"

    expect(alphabeticalOrder(valueZa, arrayTest)).toEqual([arrayTest[0], arrayTest[3], arrayTest[2], arrayTest[1], arrayTest[4]])
  })
})

describe("filtrar por nome", () => {
  it("is a function", () => {
    expect(typeof searchByName).toBe("function");
  });

  it("retornar", () => {
    expect(searchByName(arrayTest, "rick")).toEqual([arrayTest[0]]);
  });
});

describe("calcular porcentagem", () => {
  it("is a function", () => {
    expect(typeof calculatePercentage).toBe("function");
  });

  it("calcular porcentagem dos femininos", () => {
    const porcentagem = calculatePercentage(arrayTest.length, 1);
    expect(porcentagem).toEqual(20);
  });

  it("calcular porcentagem dos masculinos", () => {
    const porcentagem = calculatePercentage(arrayTest.length, 2);
    expect(porcentagem).toEqual(40);
  });

  it("calcular porcentagem dos generos indefinidos", () => {
    const porcentagem = calculatePercentage(arrayTest.length, 2);
    expect(porcentagem).toEqual(40);
  });

  it("calcular porcentagem dos vivos", () => {
    const porcentagem = calculatePercentage(arrayTest.length, 2);
    expect(porcentagem).toEqual(40);
  });

  it("calcular porcentagem dos morto", () => {
    const porcentagem = calculatePercentage(arrayTest.length, 2);
    expect(porcentagem).toEqual(40);
  });

  it("calcular porcentagem dos status indefinidos", () => {
    const porcentagem = calculatePercentage(arrayTest.length, 1);
    expect(porcentagem).toEqual(20);
  });
});
