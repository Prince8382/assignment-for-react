export default function ListRendering() {
  const users = ["Aman", "Rohit", "Priya"];

  return (
    <div>
      <h3>List Rendering Example</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
