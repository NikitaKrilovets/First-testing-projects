function ProductCard(props){
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default ProductCard;