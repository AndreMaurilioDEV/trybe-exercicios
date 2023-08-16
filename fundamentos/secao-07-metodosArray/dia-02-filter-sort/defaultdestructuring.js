const person = {
    name: 'João',
    lastName: 'Cavernoso',
    age: 22,
  };
  
  // Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6. Veja o exemplo:
  const { nationality = 'Português' } = person;
  console.log(nationality)


  
const heroes = ['Shrek', 'Princess Fiona'];
const [hero1, hero2, hero3 = 'Puss in Boots'] = heroes;

console.log(hero1); // Shrek
console.log(hero2); // Princess Fiona
console.log(hero3); // Puss in Boots