import React from 'react';
export default function Itemss(props) {
  const  el = props.element
    return (<div>
        <div className="affichage">
            <button className="complete" onClick={() => props.complete(el.id)}>{(el.completed) ? "Undo" : "Complete"} </button>
            <button className="delete" onClick={() => props.delete(el.id)}>Delete</button>
            <p className="txt" style={{ textDecoration: (el.completed) && "line-through" }}>{el.text}</p>
        </div>
        
    </div>);
}
