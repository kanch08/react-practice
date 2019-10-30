import React from 'react';

function CartTotal(props){
    console.log("props", props)
    return (
            <div>
                <p>TOTAL=  {props.getTotal()}</p>
            </div>
        );
}

export default CartTotal;
