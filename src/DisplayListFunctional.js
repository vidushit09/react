export default function DisplayListFunctional({list}){
    const listItems= list.map((listItem,index)=><li key={index}>{listItem}</li>)
    return(
        <>
            <ol>
                {listItems}
            </ol>
        </>
    )
}