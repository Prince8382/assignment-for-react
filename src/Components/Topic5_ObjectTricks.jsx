export default function Topic5_ObjectTricks() {
  const name = "Prince";

  const user = { name, age: 21 };

  const { age } = user;

  const updatedUser = { ...user, city: "Gorakhpur" };

  return (
    <div>
      <h2>Topic 5: Object Tricks</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{JSON.stringify(updatedUser)}</p>
    </div>
  );
}

// Object shorthand properties code ko short aur neat banati hain.
// Destructuring se hum object ke values ko easily extract kar sakte hain.
// Spread operator old object se updated object create karne me perfect hota hai.
// React me props aur state ko manage karne ke liye ye tricks daily use hoti hain.