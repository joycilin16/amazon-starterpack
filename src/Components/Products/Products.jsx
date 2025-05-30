import React, { useState } from 'react'
import CSS from './Products.module.css'
import plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'
const Products = () => {
const [parent]= useAutoAnimate()
const [MenuProducts, setMenuProducts] = useState(ProductsData);

const filter=(type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type===type))
}
  return (
    <div className={CSS.containers}>
        <img src={plane} alt="" />
        <h1>Our Featured Products</h1>
        <div className={CSS.products}>
        <ul className={CSS.Menu}>
            <li onClick={()=>{
                setMenuProducts(ProductsData)
            }}>All</li>
            <li onClick={()=>{
                filter("skin care")
            }}>SkinCare</li>
            <li onClick={()=>{
                filter("conditioner")
            }}>Conditioners</li>
            <li  onClick={()=>{
                filter("foundation")
            }}>Foundations</li>
        </ul>

        <div className={CSS.list} ref={parent}>
{
MenuProducts.map((product,i)=>(
    <div className={CSS.product}  >
       <div className="left-s">
        <div className="name">
            <span>{product.name}</span>
            <span >{product.detail}</span>
        </div>
        <span>{product.price}$</span>
        <div  >Shop Now</div>
       </div>

       <img src={product.img} alt="product-img"   className='img-p'/>
    </div>
))
}
        </div>
        </div>
    </div>
  )
}

export default Products