export default function ArrayMap() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h3>Array Map Example</h3>
      {fruits.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
