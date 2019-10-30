import React, { useState } from 'react';
import AddItem from "../AddItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import CartTotal from "../CartTotal";

function Cart () {
    const items = [
        {
            id:101,
            name:'Mango',
            price: 20,
            quantity: 1
        },
        {
            id: 102,
            name:'Orange',
            price: 40,
            quantity: 1
        },
        {
            id:103,
            name:'Kiwi',
            price: 30,
            quantity: 1
        }
    ];
    const [fruit, setFruits] = useState(items);

    const decQuantity = (name) => {
        const newFruit = fruit.map(f => {
            if (f.name === name && f.quantity>1) {
                f.quantity -= 1;
            }
            return f;
        });

        setFruits(newFruit);
    } ;

    const incQuantity = (name) => {
        const newFruit = fruit.map(f => {
            if (f.name === name) {
                f.quantity += 1;
            }
            return f;
        });
        setFruits(newFruit);
    } ;

    const addItem = (e,fr) => {
        e.preventDefault();
        if(findItem(fr.name)){
          console.log("bvhfb")
        }else {
            const dupFruit = [...fruit];
            dupFruit.push({
                id: 104,
                name: fr.name,
                price: fr.price,
                quantity: 1,
            });
            setFruits(dupFruit)
        }
    }

    const findItem = (n) => {
       fruit.map(f => { if(f.name === n){
           return f.index;
       }});
    }

    const handleDelete = (name) => {
        if (fruit.length >1) {
            const newFruits = fruit.filter(f => {
                return f.name !== name;
            });
            setFruits(newFruits);
        }
    };
    const getTotal = () => {
        const total = fruit.reduce((accumulator,value) => accumulator + value.price *value.quantity,0);
            return total;
    }

    return (
        <div>

            <AddItem addItem={addItem}/>
            <table>
                <thead>
                <tr>
                    <th>S.no</th>
                    <th>Fruit</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { fruit.map((item,key) => {
                    return(
                        <tr>
                            <td>{key+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price * item.quantity}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => incQuantity(item.name)}>+</button>
                                <button onClick={() => decQuantity(item.name)}>-</button>
                            </td>
                            <td><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.name)}/></td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
           <CartTotal getTotal={getTotal}/>
        </div>
    );
}

export default Cart;
