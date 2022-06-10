import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

// Component to handle active link styles
function CustomNavLink({ to, children }) {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {children}
        </NavLink>
    );
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <nav>
                    <CustomNavLink to='/'>Home</CustomNavLink>
                    <CustomNavLink to='/counter'>Counter</CustomNavLink>
                    <CustomNavLink to='/items'>Items</CustomNavLink>
                    <CustomNavLink to='/comments'>Comments</CustomNavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
