import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Nav from "./components/nav/nav.component";
import AllAndActiveItems from "./pages/all-and-active-items/all-and-active-items.component";
import CompletedItems from "./pages/completed-items/completed-items.component";
import Footer from "./components/footer/footer.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      details: { name: "", isComplete: false, key: 0 },
      items: [],
    };

    this.setCurrentItem = this.setCurrentItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.deleteAllItems = this.deleteAllItems.bind(this);
    this.resetDetails = this.resetDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.store = this.store.bind(this);
    this.getActiveItems = this.getActiveItems.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("items")) {
      this.setState({ items: JSON.parse(localStorage.getItem("items")) });
    }
  }

  setCurrentItem(item) {
    this.setState({
      details: item,
    });
  }

  // Getters
  getActiveItems() {
    const { items } = this.state;
    return items.filter((item) => item.isComplete !== true);
  }

  addItem(formattedItem) {
    const { items } = this.state;
    this.setState({
      items: [...items, formattedItem],
    });
  }

  removeItem(id) {
    const { items } = this.state;
    const updatedItems = items.filter((item) => item.key !== id);
    this.setState({ items: updatedItems });
    // Update localstorage
    this.store(updatedItems);
  }

  deleteAllItems() {
    // Filter completed items and store to the localstorage
    const activeItems = this.getActiveItems();
    this.setState({ items: activeItems });
    this.store(activeItems);
  }

  resetDetails() {
    this.setCurrentItem({ name: "", isComplete: false, key: 0 });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setCurrentItem({ name: value, isComplete: false, key: Date.now() });
  }

  handleCheckboxChange(event, id) {
    const { items } = this.state;
    // Find the exact item
    // And set as complete
    items.forEach((item) => {
      if (item.key === id) {
        item.isComplete = !item.isComplete;
      }
    });

    this.setState({ items });
    this.store(items);
  }

  async handleSubmit(event) {
    await event.preventDefault();

    const { details, items } = this.state;
    // Insure that new items stored in localstorage is not an empty array
    const newItem = [...items, details];

    if (details.name.trim()) {
      this.addItem(details);
      this.resetDetails();
      this.store(newItem);
    }
  }

  // A function that accepts array of items to be stored in the local storage.
  store(data) {
    // The second argument of 'setItem' only accepts JSON string type
    localStorage.setItem("items", JSON.stringify(data));
  }

  render() {
    const { details, items } = this.state;
    const completedItemsOnly = items.filter((item) => item.isComplete === true);
    return (
      <div className="App">
        <h1 className="App__logo">
          <Link to="/">#todo</Link>
        </h1>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <AllAndActiveItems
                details={details}
                addItem={this.addItem}
                handleChange={this.handleChange}
                handleCheckboxChange={this.handleCheckboxChange}
                handleSubmit={this.handleSubmit}
                items={items}
                setAsComplete={this.setAsComplete}
              />
            )}
          />
          <Route
            exact
            path="/active-items"
            render={() => (
              <AllAndActiveItems
                details={details}
                addItem={this.addItem}
                handleChange={this.handleChange}
                handleCheckboxChange={this.handleCheckboxChange}
                handleSubmit={this.handleSubmit}
                items={this.getActiveItems()}
                setAsComplete={this.setAsComplete}
              />
            )}
          />
          <Route
            path="/completed-items"
            render={() => (
              <CompletedItems
                items={completedItemsOnly}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteAllItems={this.deleteAllItems}
                removeItem={this.removeItem}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
