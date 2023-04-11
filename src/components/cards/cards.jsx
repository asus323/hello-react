import React, { Component } from 'react';
import {v4} from "uuid";
import {CardWrapper} from './cardElements';
import Card from './card';
import iphonePic from '../../images/iphone.jpg';
import mac from '../../images/mac.jpg';
class cards extends Component {
    constructor(){
        super();
        this.state = {
            productData : [
                {image:iphonePic, title:"iphone 13pro max", price:"130000000 $", alt:"iphone 13promax"},
                {image:mac, title:"iphone 13pro max", price:"130000000 $", alt:"iphone 13promax" }
            ],
        }
    }
  render() {
    return (
        <CardWrapper>
        {this.state.productData.map(product => <Card key={v4()} image={product.image} title={product.title} price={product.price} alt="product.alt" />)}
    </CardWrapper>
    )
  }
}
export default cards;