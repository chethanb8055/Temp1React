import './item.css'

function Item(props){
    const itemName = props.name 
return(
    <>
        {props.children}
        <p className="Niram">{itemName}</p>
    </>
)
}

export default Item;