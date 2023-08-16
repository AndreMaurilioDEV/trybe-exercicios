const heroes = [
    { name: 'Viúva Negra', universe: 'Marvel' },
    { name: 'Aquaman', universe: 'DC' },
    { name: 'André Noel', universe: 'Paralelo' }
  ];
  
  const heroGreeting = heroes.map(({name, universe}) => {
    return {
      name,
      universe,
      greeting: `Olá, meu nome é ${name} e eu sou do universo ${universe}.`
    };
  });
  
  console.log(heroGreeting);

  /* ------- SEM SHORTHAND ------------ 
  
  const heroes = [
  { name: 'Viúva Negra', universe: 'Marvel' },
  { name: 'Aquaman', universe: 'DC' },
  { name: 'André Noel', universe: 'Paralelo' }
];

const heroGreeting = heroes.map((hero) => {
  return {
    name: hero.name,
    universe: hero.universe,
    greeting: `Olá, meu nome é ${hero.name} e eu sou do universo ${hero.universe}.`
  };
});

console.log(heroGreeting);
  
  */ 