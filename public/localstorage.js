const getStoragedCart = ()=>{
    const storedCartString = localStorage.getItem("cart");
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const addLs = id=>{
    const cart = getStoragedCart();
    cart.push(id);
    // call saveLs function
    saveLs(cart)
}


const saveLs = cart => {
    localStorage.setItem("cart", JSON.stringify(cart))
}

export {addLs, getStoragedCart}