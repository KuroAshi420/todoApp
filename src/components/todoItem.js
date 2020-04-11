import React from 'react'


class TodoItem extends React.Component{

  state = {
     input:""
  }


handelchange = (e) =>{
  this.setState({
    input : e.target.value
  })
}
addTodo = () =>{
  this.props.add({text: this.state.input,id: Date.now(),completed:false})
  this.setState({
   input:""
  })
}

render(){
  return(
    <div>
      <div className="header">
        <h1>TO-DO App!</h1>
        <p class="sousTitre">Add new To-Do</p>
        <input 
           type="text"
           placeholder="Enter new task" 
           class="item" 
           value = {this.state.input}
           onChange = {this.handelchange}
        />
        <button type="submit" class="btn" onClick={this.addTodo}>Add</button>
      </div>
      <div className="response-text">
        <h3>Let's get some works done!</h3>
        <hr/>
      </div>
      </div>
  )
}


}
export default TodoItem;