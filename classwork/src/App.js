
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import { Input } from "./components/Input";
import { Myself } from "./components/Myself";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph />
      <Input />
      <Myself name="John Doe" age={20} gender="male" />
      <Myself name="Mike Doe" age={20} gender="male" />
      <Myself name="Chris Dane " age={45} gender="male" />
      <Myself name="Jane Doe" age={20} gender="female" />

      <Counter />
    </div>
  );
}

export default App;
