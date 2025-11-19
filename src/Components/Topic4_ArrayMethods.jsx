export default function Topic4_ArrayMethods() {
  const users = ["Reed", "John", "Prince", "Jane"];

  const filtered = users.filter((u) => !u.startsWith("J"));

  const reduced = users.reduce((acc, u) => {
    if (!u.startsWith("J")) acc.push(u);
    return acc;
  }, []);

  return (
    <div>
      <h2>Topic 4: Array Methods</h2>

      <h4>Map:</h4>
      {users.map((u) => (
        <p key={u}>{u}</p>
      ))}

      <h4>Filter (Remove J):</h4>
      {filtered.map((u) => (
        <p key={u}>{u}</p>
      ))}

      <h4>Reduce (Remove J):</h4>
      {reduced.map((u) => (
        <p key={u}>{u}</p>
      ))}
    </div>
  );
}

// React me lists show karne ke liye .map() sabse important method hai.
// .filter() conditions ke basis par list ko modify karta hai.
// .reduce() complex data ko ek single output me convert karta hai.
// Ye teen methods milkar React UI ko dynamic, clean aur data-driven banate hain.