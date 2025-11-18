import FunctionDeclaration from "./components/FunctionDeclaration";
import ArrowFunction from "./components/ArrowFunction";
import ArrayMap from "./components/ArrayMap";
import UseStateExample from "./components/UseStateExample";
import PropsExample from "./components/PropsExample";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import "./index.css";

// export default function App() {
//   return (
//     <>
//       <FunctionDeclaration />
//       <ArrowFunction />
//       <ArrayMap />
//       <UseStateExample />
//       <PropsExample />
//       <ConditionalRendering />
//       <ListRendering />
//     </>
//   );
// }

export default function App() {
  return (
    <div className="app">
      <div className="app-inner">
        <h1>React Basic Examples</h1>
        <section>
          <h2>1. Components</h2>
          <FunctionDeclaration />
          <ArrowFunction />
        </section>

        <section>
          <h2>2. Other examples</h2>
          <ArrayMap />
          <UseStateExample />
          <PropsExample />
          <ConditionalRendering />
          <ListRendering />
        </section>
      </div>
    </div>
  );
}

