import { useState } from 'react';
import { generateRandomID } from '@utils/globalUtils';
import Item from './item';
import AddItemForm from './addItemForm';
import './itemList.css';

export default function ItemList() {
    const [items, setItems] = useState([]);

    const onAddItemHandler = (text) => {
        setItems([...items, { id: generateRandomID(), value: text }]);
    };

    const onRemoveItemHandler = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div className='item-list-container'>
            <AddItemForm onAddItem={onAddItemHandler} />
            <hr />
            <ul className='item-list-items'>
                {items.map((item) => (
                    <Item key={item.id} item={item} onRemove={onRemoveItemHandler} />
                ))}
            </ul>
        </div>
    );
}
