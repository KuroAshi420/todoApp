import React from 'react'
import Itemss from './Itemss'


export default function TodoList (props){
  return(
    <div>
      {props.items.map((el,index) => <Itemss element={el} delete={props.delete} complete={props.complete}/>
        )}
    </div>
  )
}
