const games = [
    { id: 1, title: 'Counter-Strike: Global Offensive', genre: 'FPS' },
    { id: 2, title: 'Dota 2', genre: 'MOBA' },
    { id: 3, title: 'Half-Life 2', genre: 'FPS' },
    { id: 4, title: 'Portal 2', genre: 'Puzzle' },
  ];


  // FIND - utilizado para encontrar o primeiro elemento que satisfaça a condição passada e retornar o primeiro valor do array que corresponda a essa condição.

const gameWithTitle = games.find((game) => game.title === 'Dota 2');
console.log(gameWithTitle);
// { id: 2, title: 'Dota 2', genre: 'MOBA' }

const gameWithGenre = games.find((game) => game.genre === 'FPS');
console.log(gameWithGenre);
// { id: 1, title: 'Counter-Strike: Global Offensive', genre: 'FPS' }