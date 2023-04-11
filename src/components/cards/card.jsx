import React,{Component} from 'react';
import styles from './card.module.css';
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from "react-icons/ai";
class Card extends Component {
    constructor(){
        super();
    this.state = { 
        quantity : 1,
     } 
    }
plusOne =()=>{
    this.setState(prevState=>({quantity:prevState.quantity+1}));
}
minusOne =()=>{
    if(this.state.quantity >1)
    this.setState(prevState=>({quantity:prevState.quantity-1}));
}
    render() { 
        const {image,title,price,alt} =this.props;
        const{quantity} = this.state;
        return ( 
            <article className={styles.cardWrapper}>
                <img src={image} alt={alt} />
                <h4>{title}</h4>
                <p>{price} {quantity ? `*${quantity} = ${quantity * Number(price.split(" ")[0])} $` :'' } </p>
                <hr />
                <AiOutlineMinusCircle onClick={this.minusOne} />
                <span>{quantity}</span>
                <AiOutlinePlusCircle onClick={this.plusOne} />
            </article>
         );
    }
}
 
export default Card;