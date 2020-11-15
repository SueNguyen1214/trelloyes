import React from "react"
function Card(props){
    return(
        <div className="Card">
            <button onClick={() => props.onDeleteCard(props.card)} type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card