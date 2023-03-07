import  React  from  "react";
import  TodoFunctional  from  "./TodoFunctional.js";
import  TodoClass  from  "./TodoClass.js";

class  App  extends  React.Component  {
    constructor()  {
        super();
        this.state={
            displayClass:  false,
            todoList: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.addTodo=this.addTodo.bind(this);

    }
    handleChange(event){
        this.setState({
            displayClass:event.target.checked
        })
    }
    addTodo(todo){
      let tempList= this.state.todoList;
      tempList.push(todo);
      this.setState({todoList:tempList});
    }
    render()  {
        let  list;
        if  (this.state.displayClass)
            list=<TodoClass todoList={this.state.todoList} addTodo={this.addTodo}/>
        else
            list=<TodoFunctional  todoList={this.state.todoList}/>
        return(
        <>
            <div>Check box to add todo</div>
            <input  type="checkbox"  onChange={this.handleChange}></input>
            {list}
            
        </>)
    }
}

export  default  App;
