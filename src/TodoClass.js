import React from "react";
import DisplayListClass from "./DisplayListClass";
class TodoClass extends React.Component{
    constructor(){
        super();
        this.state={
            todo: ""
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);


    }
    handleChange(event){
        this.setState({todo: event.target.value});
    } 
    handleSubmit(event){
        event.preventDefault();
        this.setState({todo: ""});
        this.props.addTodo(this.state.todo);
    }
    render(){
        return(

            <div>
                <div>Class Component list</div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todo} onChange={this.handleChange}></input>
                    <button type="submit">Add</button>
                </form>
                <DisplayListClass list={this.props.todoList} />
            </div>
        )
    }

}
export default TodoClass;