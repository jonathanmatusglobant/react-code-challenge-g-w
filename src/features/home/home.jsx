import './home.css';
import logo from '../../logo.svg';

export default function Home() {
    return (
        <>
            <img src={logo} className='App-logo' alt='logo' />
            <p className='home-text'>React Challenge</p>
        </>
    );
}
