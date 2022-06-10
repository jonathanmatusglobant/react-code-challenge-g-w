import logo from './logo.svg';
import './App.css';
import { ItemList, Counter, Comments } from '@features';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>React Challenge</p>
            </header>
            <main>
                <Comments />
            </main>
        </div>
    );
}

export default App;
