import Topic1_Functions from "./components/Topic1_Functions";
import Topic2_TemplateLiterals from "./components/Topic2_TemplateLiterals";
import Topic3_Conditionals from "./components/Topic3_Conditionals";
import Topic4_ArrayMethods from "./components/Topic4_ArrayMethods";
import Topic5_ObjectTricks from "./components/Topic5_ObjectTricks";
import Topic6_AsyncAwait from "./components/Topic6_AsyncAwait";
import Topic7_ESModules from "./components/Topic7_ESModules";
import "./app.css";

export default function App() {
  return (
    <div>
      <h1>All JavaScript Topics</h1>

      <Topic1_Functions />
      <Topic2_TemplateLiterals />
      <Topic3_Conditionals />
      <Topic4_ArrayMethods />
      <Topic5_ObjectTricks />
      <Topic6_AsyncAwait />
      <Topic7_ESModules />
    </div>
  );
}
