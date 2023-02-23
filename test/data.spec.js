import {alphabeticalOrder, searchByName} from '../src/data.js';

const rick = {
  "id": "1",
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
}

const morty = {
  "id": "2",
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
}

const summer = {
  "id": "3",
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  "origin": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
}

const beth = {
  "id": "4",
  "name": "Beth Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  "origin": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
}

const jerry = {
  "id": "5",
  "name": "Jerry Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
}

const arrayTest = [rick, morty, summer, beth, jerry ]

describe ('ordenar lista personagens', () => {
  test('is a function', () => {
    expect(typeof alphabeticalOrder).toBe('function');
  })

  it('ordenar de a-z', () =>{
    const valueAz = "a-z"

    expect(alphabeticalOrder(valueAz, arrayTest)).toEqual([arrayTest[3], arrayTest[4], arrayTest[1], arrayTest[0], arrayTest[2]])
  })

  it('ordenar de z-a', () =>{
    const valueZa = "z-a"

    expect(alphabeticalOrder(valueZa, arrayTest)).toEqual([arrayTest[2], arrayTest[0], arrayTest[1], arrayTest[4], arrayTest[3]])
  })
})

describe('filtrar por nome', () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe('function')
  });

  it('returns character by searched name', () => {
    expect(searchByName(arrayTest, "rick")).toEqual([arrayTest[0]]);
  })
});