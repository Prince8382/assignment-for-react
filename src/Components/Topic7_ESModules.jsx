import getSiteName, { siteName, year } from "../constants.js";

export default function Topic7_ESModules() {
  return (
    <div>
      <h2>Topic 7: ES Modules</h2>
      <p>Site Name: {siteName}</p>
      <p>Year: {year}</p>
      <p>Default Import: {getSiteName()}</p>
    </div>
  );
}

// ES Modules code ko different files me divide karke reusable banate hain.
// export aur import ke through hum functions, variables, components share kar sakte hain.
// Default aur named exports ka use React projects ko clean structure deta hai.
// Har professional React app me module system mandatory hota hai.