import React from "react";
import Card from "./Card";
function List(props) {
  const card = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        onDeleteCard={props.onDeleteCard}
      />
    );
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">{card}</div>
      <button 
        type="button" 
        onClick={() => props.onAddRandomCard(props.card)}>
        Add Random Card
      </button>
    </section>
  );
}

export default List;
