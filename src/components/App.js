import React from "react";
import List from "./List";
import "../App.css";
import STORE from "../store";
class App extends React.Component {
  state = {
    store: STORE,
  };
  function omit(obj, keyToOmit) {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }
  handleDeleteCard = (card) => {
    const newStore = omit(this.state.store, card)
    this.setState({
      store: newStore,
    });
  };
  handleAddRandomCard() {
    console.log("handle add random card");
  }
  render() {
    const listOfCard = this.state.store.lists.map((list) => (
      <List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map((id) => this.state.store.allCards[id])}
        onDeleteCard={this.handleDeleteCard}
        onAddRandomCard={this.handleAddRandomCard}
      />
    ));
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">{listOfCard}</div>
      </main>
    );
  }
}

export default App;
