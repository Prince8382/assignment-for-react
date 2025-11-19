export default function Topic2_TemplateLiterals() {
  const name = "Prince";
  const age = 21;

  return (
    <div>
      <h2>Topic 2: Template Literals</h2>
      <p>{`My name is ${name} and I am ${age} years old.`}</p>
    </div>
  );
}

// Template literals string ko dynamic banane ke liye use hote hain.
// Hum ${} ke andar directly variables ya expressions likh sakte hain.
// Isse cleaner, readable aur error-free string creation hoti hai.