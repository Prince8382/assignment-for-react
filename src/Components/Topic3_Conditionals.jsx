export default function Topic3_Conditionals() {
  const isLoggedIn = true;

  return (
    <div>
      <h2>Topic 3: Conditionals</h2>

      <p>{isLoggedIn ? "Welcome Back!" : "Please Login"}</p>

      {isLoggedIn && <p>You are logged in!</p>}

      {!isLoggedIn || <p>You are not logged out</p>}
    </div>
  );
}

// Conditionals React UI ko dynamic banate hain — jaise login hone par alag UI, logout par alag.
// Ternary operator short if–else ke liye best hota hai.
// && truthy condition me render karta hai, jabki || falsy condition me.
// In operators ki wajah se JSX concise aur clean hota hai.
