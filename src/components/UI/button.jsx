import './button.css';

export default function Button({ children, variant, className, ...otherProps }) {
    return (
        <button className={`button ${variant} ${className}`} {...otherProps}>
            {children}
        </button>
    );
}
