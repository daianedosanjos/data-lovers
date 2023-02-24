import {alphabeticalOrder, searchByName, filter} from '../src/data.js';

const rick = {
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male", 
}

<<<<<<< HEAD
const morty = {
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",  
=======
const chris = {
  "name": "Chris",
  "status": "Dead",
  "species": "Alien",
  "gender": "unknown",
>>>>>>> a098599d396c99cdf941ac16518058d1534bec81
}

const fleeb = {
  "name": "Fleeb",
  "status": "unknown",
  "species": "Alien",
  "gender": "unknown",
}

const jackie = {
  "name": "Jackie",
  "status": "Alive",
  "species": "Alien",
  "gender": "Female",
}

<<<<<<< HEAD
const beth = {
  "id": "4",
  "name": "Beth Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
 
}

const jerry = {
  "id": "5",
  "name": "Jerry Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
 
}

const arrayTest = [rick, morty, summer, beth, jerry ]
=======
const beebo = {
  "name": "Beebo",
  "status": "Dead",
  "species": "Alien",
  "gender": "Male", 
 
}

const arrayTest = [rick, chris, fleeb, jackie, beebo ]
>>>>>>> a098599d396c99cdf941ac16518058d1534bec81


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

describe('filtrar por nome', () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe('function')
  });

  it('retornar', () => {
    expect(searchByName(arrayTest, "rick")).toEqual([arrayTest[0]]);
  })
});

<<<<<<< HEAD


=======
describe('buscar por status', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function')
  });

  it('retornar personagem por status filtrado', () => {
    const especie1 = "Alive"
    const especie2 = "Dead"
    const especie3 = "unknown"


    expect(filter(especie1, arrayTest)).toEqual([arrayTest[3]]);
    expect(filter(especie2, arrayTest)).toEqual([arrayTest[2]]);
    expect(filter(especie3, arrayTest)).toEqual([arrayTest[3]]);
  })
});
>>>>>>> a098599d396c99cdf941ac16518058d1534bec81
