import { Link } from "react-router-dom";
import "./button.scss";


const Button = ({ to, children, className = "", ...props }) => {

    if (to) {
        return (
            <Link to={to} className={`button ${className}`} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`button ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
