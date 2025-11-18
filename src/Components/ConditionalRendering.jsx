export default function ConditionalRendering() {
  const isLoggedIn = true;

  return (
    <div>
      <h3>Conditional Rendering</h3>
      {isLoggedIn ? <p>Welcome Prince!</p> : <p>Please Login</p>}
    </div>
  );
}
