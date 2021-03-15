import "./App.css";

import Nav from "./components/nav/nav.component";
import List from "./components/list/list.component";
import ListHeader from "./components/list-header/list-header.component";
import Button from "./components/button/button.component";

const todos = [
  "Do coding challenges",
  "Do coding challenges",
  "Do coding challenges",
];
function App() {
  return (
    <div className="App">
      <h1 className="App__logo">#todo</h1>
      <Nav />
      {true && <ListHeader />}
      <List items={todos} variant="checkbox" />
      {false && (
        <div className="App__button-wrapper">
          <Button
            color="danger"
            startIcon="delete_outline"
            label="delete all"
          />
        </div>
      )}
    </div>
  );
}

export default App;
