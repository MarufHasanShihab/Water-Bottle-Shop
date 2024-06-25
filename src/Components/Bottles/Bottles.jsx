import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css"
import {addLs, getStoragedCart } from "../../../public/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const [cart, setCart] = useState([]);

    const handlePurchaseBtn = bottle =>{
        setCart([...cart, bottle]);
        addLs(bottle.id)
    }
    useEffect(()=>{
        if(bottles.length){
            const storedCart = getStoragedCart();
            const saveCart = [];
            for(let id of storedCart){
                const bottle = bottles.filter(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            setCart(saveCart)
        }
    },[bottles])
    
 

    return (
        <div>
            <Cart cart={cart} />
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handlePurchaseBtn={handlePurchaseBtn}  />)
                }
            </div>
        </div>
    );
};

export default Bottles;