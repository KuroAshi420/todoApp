import React from 'react'
import TodoItem from './todoItem';
import TodoList from './todoList';


class Main extends React.Component{
constructor(props){
  super(props);
  this.state = {
    items : []
  }

}
addItem = (inpt)=>{
    this.setState ({
        items : [...this.state.items,inpt]
    })
}
deleteItem = (indice)=>{
this.setState({
    items : this.state.items.filter((el,index)=> (el.id!==indice))
})
}
completeItem =(indice)=>{
    this.setState({
        items : this.state.items.map((el,index)=>(el.id===indice)?{...el,completed:!el.completed } : el)
    })
}

render(){
  return(
      <div>
          <TodoItem add={this.addItem}/>
          <TodoList items={this.state.items} delete={this.deleteItem} complete={this.completeItem}/>
      </div>
  )
}


}
export default Main;