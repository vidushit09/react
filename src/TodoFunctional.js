
export default function TodoFunctional({todoList}){
    
    const listItems= todoList.map((listItem,index)=><li key={index}>{listItem}</li>)
    return(
        <>
            
            <ol>
                {listItems}
            </ol>
        </>
    )
}