import "./App.css";

import Nav from "./components/nav/nav.component";
import List from "./components/list/list.component";

const todos = ["Exercise", "Programming", "Fishing"];
function App() {
  return (
    <div className="App">
      <h1 className="App__logo">#todo</h1>
      <Nav />
      <List items={todos} variant="checkbox" />
    </div>
  );
}

export default App;
