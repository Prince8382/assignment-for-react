export default function Topic1_Functions() {
  function normalFunction() {
    return "Hello from normal Function";
  }

  const arrowFunction = () => "Hello from Arrow Function";

  return (
    <div>
      <h2>Topic 1: Functions</h2>
      <p>{normalFunction()}</p>
      <p>{arrowFunction()}</p>
    </div>
  );
}

//Functions JavaScript ka basic building block hote hain aur React ke har component ka base bhi function hi hota hai.
// React me components mostly arrow functions ki form me likhe jate hain.
// Ye dono syntax samajhna React development ke liye essential hai.