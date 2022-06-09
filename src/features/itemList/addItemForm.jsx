import { useState } from 'react';
import { Button, Input } from '@components/UI';
import './addItemForm.css';

export default function AddItemForm({ onAddItem }) {
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onTextChange = (event) => setText(event.currentTarget.value);

    const onKeyPress = (event) => {
        if (event.code === 'Enter') {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (text.trim() === '') {
            setErrorMessage('Please enter a name');
            return;
        }

        onAddItem(text);
        setText('');
        setErrorMessage('');
    };

    return (
        <div className='add-item-form'>
            <div className='form-container'>
                <Input
                    type='text'
                    name='item-name'
                    value={text}
                    onChange={onTextChange}
                    onKeyPress={onKeyPress}
                    label='Name'
                />
                <Button onClick={onSubmit} variant='primary'>
                    Add +
                </Button>
            </div>
            {errorMessage && <p className='error'>{errorMessage}</p>}
        </div>
    );
}
