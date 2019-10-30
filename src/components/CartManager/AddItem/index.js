import React, {useState} from 'react';

const AddItem = (props) => {
    const emptyItem = {
        name:'',
        price: '',
        quantity:1
    }

    const [item,setItems] = useState(emptyItem);

 const handleChange = (e) => {
     const receivedValue =  e.target.value;
     if(receivedValue.includes('-')){
         const splittedString = receivedValue.split('-');
         const itemName = splittedString[0];
         const itemPrice = parseInt(splittedString[1],10);
         const newItem = {
             name: itemName,
             price: itemPrice
         };
         setItems(newItem);
     }
 }

        return (
            <div>
                <form onSubmit ={e => {props.addItem(e,item)}}>
                <input
                    type="text"
                    name ="newFruit"
                    placeholder="enter name and price using hyphen"
                    onChange={handleChange}
                />
                </form>
            </div>
        );
}

export default AddItem;
