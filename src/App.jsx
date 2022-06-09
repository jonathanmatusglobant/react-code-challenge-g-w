import logo from './logo.svg';
import './App.css';
import Counter from '@features/counter/counter';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>React Challenge</p>
            </header>
            <main>
                <Counter />
            </main>
        </div>
    );
}

export default App;
