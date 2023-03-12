import React from "react"
import { products } from "../prods/products"

export function Header(props: any) {
    console.log(props)
    return(
    <div >
        <img src={props.product.image} ></img>
        <h1>{props.product.price}</h1>
    </div>
    )
}