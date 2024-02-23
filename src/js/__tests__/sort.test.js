import sortHeroes from '../sort';

test('check sorting', () => {
  let heroesList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  let sortHeroesList = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  expect(sortHeroes(heroesList)).toEqual(sortHeroesList);
});
