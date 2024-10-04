// Create an Array of User Objects
const users = [
    {
      name: 'John Doe',
      age: 30,
      hobbies: ['reading', 'hiking', 'coding']
    },
    {
      name: 'Jane Doe',
      age: 25,
      hobbies: ['painting', 'cooking', 'traveling']
    },
    {
      name: 'Bob Smith',
      age: 40,
      hobbies: ['gaming', 'watching movies', 'playing music']
    }
  ];
  
  // Destructuring
  users.forEach(user => {
    const { name, age, hobbies } = user;
    console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(', ')}`);
  });
  
  // Spread Operator
  const allHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];
  console.log('Combined Hobbies:', allHobbies);
  
  // Alternatively, you can use the flatMap method to combine the hobbies arrays
  const combinedHobbies = users.flatMap(user => user.hobbies);
  console.log('Combined Hobbies (using flatMap):', combinedHobbies);