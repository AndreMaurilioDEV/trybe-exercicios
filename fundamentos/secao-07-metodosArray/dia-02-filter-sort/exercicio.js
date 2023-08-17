const pokemons = [
    { name: 'Pikachu', type: 'Elétrico', level: 25 },
    { name: 'Charizard', type: 'Fogo', level: 50 },
    { name: 'Bulbasaur', type: 'Planta', level: 10 },
    { name: 'Gyarados', type: 'Água', level: 40 },
    { name: 'Alakazam', type: 'Psíquico', level: 35 },
    { name: 'Snorlax', type: 'Normal', level: 50 },
    { name: 'Mewtwo', type: 'Psíquico', level: 70 },
    { name: 'Dragonite', type: 'Dragão', level: 55 },
    { name: 'Mew', type: 'Psíquico', level: 30 },
    { name: 'Articuno', type: 'Gelo', level: 60 },
    { name: 'Zapdos', type: 'Elétrico', level: 60 },
    { name: 'Moltres', type: 'Fogo', level: 60 },
    { name: 'Gengar', type: 'Fantasma', level: 45 },
    { name: 'Machamp', type: 'Lutador', level: 50 },
    { name: 'Lapras', type: 'Água', level: 35 },
    { name: 'Venusaur', type: 'Planta', level: 45 },
    { name: 'Blastoise', type: 'Água', level: 55 },
    { name: 'Golem', type: 'Pedra', level: 40 },
    { name: 'Arcanine', type: 'Fogo', level: 55 },
    { name: 'Jolteon', type: 'Elétrico', level: 40 },
  ];


  const filterStrongPokemons = () => {
    const Strongers = pokemons.filter((strong) => strong.level > 30);
    console.log(Strongers);
  }

  const getStrongPokemonName = () => {
    const than50 = pokemons.filter((strong) => strong.level > 50);
    const allNames = than50.map(({name}) => ({name}));
    console.log(allNames);
  };

  const levelOrder = pokemons.sort((a, b) =>  a.level - b.level);

  const sortPokemons = () => {
   return pokemons.sort(({level: levelA, name: nameA}, {level: levelB, name: nameB}) => {
    if(levelA === levelB) {
        return nameA.localeCompare(nameB);
    } else {
        return levelB - levelA;
    }
   })
  }

  filterStrongPokemons();
  getStrongPokemonName();
  console.log(levelOrder);
  console.log(sortPokemons());