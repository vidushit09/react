import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            counter: 0
        }
        this.start= this.start.bind(this);
    }
    start(){
        var btn= document.getElementsByTagName("button")[0];
        btn.disabled=true;
        setInterval(()=>{
            this.setState({
                counter: this.state.counter+1
            })
        },500)
        
    }
    render(){
        return(
            <div>
                <div>Value of counter is:  {this.state.counter} </div>
                <button onClick={this.start}>Start counter</button>
            </div>
        )
    }

}

export default Counter;