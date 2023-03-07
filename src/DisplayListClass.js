import React from "react";

class DisplayListClass extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let listItems= this.props.list.map((listItem,index)=><li key={index}>{listItem}</li>)
        return(
            <>
                <ol>
                    {listItems}
                </ol>
            </>
        )
    }
}
export default DisplayListClass;