import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ItemList, Counter, Comments, Home } from '@features';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='counter' element={<Counter />} />
                    <Route path='items' element={<ItemList />} />
                    <Route path='comments' element={<Comments />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
